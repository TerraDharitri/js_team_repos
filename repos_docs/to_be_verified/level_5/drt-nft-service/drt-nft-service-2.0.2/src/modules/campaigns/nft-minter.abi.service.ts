import { Injectable } from '@nestjs/common';
import '../../utils/extensions';
import { BuyRandomNftActionArgs } from './models';
import BigNumber from 'bignumber.js';
import {
  Address,
  BigUIntValue,
  BytesValue,
  ContractFunction,
  OptionalValue,
  TokenIdentifierValue,
  TypedValue,
  U64Value,
  BigUIntType,
  VariadicValue,
  List,
  Interaction,
  CompositeValue,
  TokenPayment,
  ResultsParser,
} from '@terradharitri/sdk-core';
import { drtConfig, gas } from '../../config';
import { DrtProxyService } from 'src/common';
import { TransactionNode } from '../common/transaction';
import { BuyRequest, IssueCampaignRequest } from './models/requests';
import { nominateVal } from 'src/utils';
import { BrandInfoViewResultType } from './models/abi/BrandInfoViewAbi';
import { ContractLoader } from '@terradharitri/sdk-nestjs/lib/src/sc.interactions/contract.loader';

@Injectable()
export class NftMinterAbiService {
  private readonly parser: ResultsParser;
  private readonly abiPath: string = './src/abis/nft-minter.abi.json';
  private readonly abiInterface: string = 'NftMinter';
  private readonly contract = new ContractLoader(
    this.abiPath,
    this.abiInterface,
  );

  constructor(private drtProxyService: DrtProxyService) {
    this.parser = new ResultsParser();
  }

  public async getCampaignsForScAddress(address: string) {
    const contract = await this.contract.getContract(address);
    let getDataQuery = <Interaction>contract.methodsExplicit.getAllBrandsInfo();

    const response = await this.getFirstQueryResult(getDataQuery);
    const campaign: BrandInfoViewResultType[] = response?.firstValue?.valueOf();
    return campaign;
  }

  async issueToken(
    ownerAddress: string,
    request: IssueCampaignRequest,
  ): Promise<TransactionNode> {
    const contract = await this.contract.getContract(request.minterAddress);

    let issueTokenForBrand = contract.call({
      func: new ContractFunction('issueTokenForBrand'),
      value: TokenPayment.rewaFromBigInteger(drtConfig.issueNftCost),
      args: this.getIssueCampaignArgs(request),
      gasLimit: gas.issueToken,
      chainID: drtConfig.chainID,
    });
    return issueTokenForBrand.toPlainObject(new Address(ownerAddress));
  }

  async buyRandomNft(
    ownerAddress: string,
    request: BuyRequest,
  ): Promise<TransactionNode> {
    const contract = await this.contract.getContract(request.minterAddress);

    let buyRandomNft = contract.call({
      func: new ContractFunction('buyRandomNft'),
      value: TokenPayment.rewaFromBigInteger(request.price),
      args: this.getBuyNftArguments(request),
      gasLimit: gas.endAuction,
      chainID: drtConfig.chainID,
    });
    if (parseInt(request.quantity) > 1) {
      buyRandomNft.setGasLimit(
        buyRandomNft.getGasLimit().valueOf() +
          (parseInt(request.quantity) - 1) * gas.endAuction,
      );
    }
    return buyRandomNft.toPlainObject(new Address(ownerAddress));
  }

  private async getFirstQueryResult(interaction: Interaction) {
    let queryResponse = await this.drtProxyService
      .getService()
      .queryContract(interaction.buildQuery());
    let result = this.parser.parseQueryResponse(
      queryResponse,
      interaction.getEndpoint(),
    );
    return result;
  }

  private getBuyNftArguments(args: BuyRandomNftActionArgs): TypedValue[] {
    let returnArgs: TypedValue[] = [
      BytesValue.fromUTF8(args.campaignId),
      BytesValue.fromUTF8(args.tier),
    ];
    if (args.quantity) {
      return [
        ...returnArgs,
        new OptionalValue(
          new BigUIntType(),
          new BigUIntValue(new BigNumber(args.quantity)),
        ),
      ];
    }

    return returnArgs;
  }

  private getIssueCampaignArgs(request: IssueCampaignRequest): TypedValue[] {
    let returnArgs: TypedValue[] = [
      BytesValue.fromUTF8(request.collectionIpfsHash),
      BytesValue.fromUTF8(request.campaignId),
      BytesValue.fromUTF8(request.mediaTypes.split('/')[1]),
      BytesValue.fromHex(nominateVal(parseFloat(request.royalties))),
      new U64Value(new BigNumber(request.mintStartTime.toString())),
      new U64Value(new BigNumber(request.mintEndTime.toString())),
      new TokenIdentifierValue(request.mintPriceToken),
      BytesValue.fromUTF8(request.collectionName),
      BytesValue.fromUTF8(request.collectionTicker),
      new U64Value(new BigNumber(request.whitelistEndTime.toString())),
      List.fromItems(request.tags?.map((tag) => BytesValue.fromUTF8(tag))),
      VariadicValue.fromItems(
        ...request.tiers.map((tier) =>
          CompositeValue.fromItems(
            BytesValue.fromUTF8(tier.tierName),
            new U64Value(new BigNumber(tier.totalNfts.toString())),
            new BigUIntValue(new BigNumber(tier.mintPriceAmount)),
          ),
        ),
      ),
    ];

    return returnArgs;
  }
}
