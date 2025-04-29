import { Address, AddressValue, BytesValue, ContractFunction, U64Value } from '@terradharitri/sdk-core';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DrtApiService, getSmartContract } from 'src/common';
import { drtConfig, gas } from 'src/config';
import { getCollectionAndNonceFromIdentifier, timestampToEpochAndRound } from 'src/utils/helpers';
import '../../utils/extensions';
import { nominateVal } from '../../utils/formatters';
import { FileContent } from '../ipfs/file.content';
import { PinataService } from '../ipfs/pinata.service';
import { S3Service } from '../s3/s3.service';
import BigNumber from 'bignumber.js';
import { TransactionNode } from '../common/transaction';
import { UpdateQuantityRequest, CreateNftRequest, TransferNftRequest, CreateNftWithMultipleFilesRequest } from './models/requests';
import { generateCacheKeyFromParams } from 'src/utils/generate-cache-key';
import { FileUpload } from 'graphql-upload';
import { DrtStats } from 'src/common/services/drt-communication/models/drt-stats.model';
import { RedisCacheService } from '@terradharitri/sdk-nestjs-cache';
import { Constants } from '@terradharitri/sdk-nestjs-common';
import { UploadToIpfsResult } from '../ipfs/ipfs.model';

@Injectable()
export class AssetsTransactionService {
  constructor(
    private pinataService: PinataService,
    private s3Service: S3Service,
    private drtApiService: DrtApiService,
    private readonly logger: Logger,
    private redisCacheService: RedisCacheService,
  ) {}

  async updateQuantity(ownerAddress: string, request: UpdateQuantityRequest): Promise<TransactionNode> {
    const { collection, nonce } = getCollectionAndNonceFromIdentifier(request.identifier);
    const contract = getSmartContract(request.updateQuantityRoleAddress);
    const transaction = contract.call({
      func: new ContractFunction(request.functionName),
      args: [BytesValue.fromUTF8(collection), BytesValue.fromHex(nonce), new U64Value(new BigNumber(request.quantity))],
      gasLimit: gas.addBurnQuantity,
      chainID: drtConfig.chainID,
      caller: Address.fromString(ownerAddress),
    });
    return transaction.toPlainObject();
  }

  async burnQuantity(ownerAddress: string, request: UpdateQuantityRequest): Promise<TransactionNode> {
    const [nft, drtStats] = await Promise.all([this.drtApiService.getNftByIdentifier(request.identifier), this.getOrSetAproximateDrtStats()]);

    if (!nft) {
      throw new NotFoundException('NFT not found');
    }

    const [epoch] = timestampToEpochAndRound(
      nft.timestamp,
      drtStats.epoch,
      drtStats.roundsPassed,
      drtStats.roundsPerEpoch,
      drtStats.refreshRate,
    );

    if (epoch > drtConfig.burnNftActivationEpoch) {
      return await this.updateQuantity(ownerAddress, request);
    }

    return await this.transferNft(
      ownerAddress,
      new TransferNftRequest({
        identifier: request.identifier,
        quantity: request.quantity,
        destinationAddress: drtConfig.burnAddress,
      }),
    );
  }

  async createNftWithMultipleFiles(ownerAddress: string, request: CreateNftWithMultipleFilesRequest): Promise<TransactionNode> {
    let uploadFilePromises = [];
    for (const file of request.files) {
      uploadFilePromises.push(this.uploadFileToPinata(file));
    }
    const filesToIpfs = await Promise.all(uploadFilePromises);

    return this.getCreateNftTransaction(ownerAddress, request, filesToIpfs);
  }

  async createNft(ownerAddress: string, request: CreateNftRequest): Promise<TransactionNode> {
    const fileData = await this.uploadFileToPinata(request.file);

    return this.getCreateNftTransaction(ownerAddress, request, [fileData]);
  }

  async transferNft(ownerAddress: string, transferRequest: TransferNftRequest): Promise<TransactionNode> {
    const { collection, nonce } = getCollectionAndNonceFromIdentifier(transferRequest.identifier);
    const contract = getSmartContract(ownerAddress);
    const transaction = contract.call({
      func: new ContractFunction('DCDTNFTTransfer'),
      args: [
        BytesValue.fromUTF8(collection),
        BytesValue.fromHex(nonce),
        new U64Value(new BigNumber(transferRequest.quantity)),
        new AddressValue(new Address(transferRequest.destinationAddress)),
      ],
      gasLimit: gas.nftTransfer,
      chainID: drtConfig.chainID,
      caller: Address.fromString(ownerAddress),
    });
    let response = transaction.toPlainObject();
    response.gasLimit = Math.max(drtConfig.transferMinCost + response.data.length * drtConfig.pricePerByte, gas.nftTransfer);
    return {
      ...response,
      chainID: drtConfig.chainID,
    };
  }

  private async getCreateNftTransaction(
    ownerAddress: string,
    request: CreateNftRequest | CreateNftWithMultipleFilesRequest,
    filesData: UploadToIpfsResult[],
  ) {
    const assetMetadata = await this.uploadFileMetadata(request.attributes.description);
    const attributes = `tags:${request.attributes.tags};metadata:${assetMetadata.hash}`;
    const contract = getSmartContract(ownerAddress);
    const transaction = contract.call({
      func: new ContractFunction('DCDTNFTCreate'),
      args: this.getCreateNftsArgs(request, filesData, attributes),
      gasLimit: gas.nftCreate,
      chainID: drtConfig.chainID,
      caller: Address.fromString(ownerAddress),
    });
    let response = transaction.toPlainObject();

    return {
      ...response,
      gasLimit: gas.nftCreate + response.data.length * drtConfig.pricePerByte,
      chainID: drtConfig.chainID,
    };
  }

  private async uploadFileMetadata(description: string): Promise<any> {
    const fileMetadata = new FileContent({
      description: description,
    });
    const assetMetadata = await this.pinataService.uploadText(fileMetadata);

    await this.s3Service.uploadText(fileMetadata, assetMetadata.hash);
    return assetMetadata;
  }

  private async uploadFileToPinata(fileUpload: FileUpload) {
    const file = await fileUpload;
    const fileData = await this.pinataService.uploadFile(file);
    await this.s3Service.upload(file, fileData.hash);
    return fileData;
  }

  private getCreateNftsArgs(request: CreateNftWithMultipleFilesRequest | CreateNftRequest, filesToIpfs: any[], attributes: string) {
    const args = [
      BytesValue.fromUTF8(request.collection),
      new U64Value(new BigNumber(request.quantity)),
      BytesValue.fromUTF8(request.name),
      BytesValue.fromHex(nominateVal(parseFloat(request.royalties))),
      BytesValue.fromUTF8(filesToIpfs[0].hash),
      BytesValue.fromUTF8(attributes),
    ];
    for (const file of filesToIpfs) {
      args.push(BytesValue.fromUTF8(file.url));
    }
    return args;
  }

  private async getOrSetAproximateDrtStats(): Promise<DrtStats> {
    try {
      const cacheKey = this.getApproximateDrtStatsCacheKey();
      const getDrtStats = () => this.drtApiService.getDrtStats();
      return this.redisCacheService.getOrSet(cacheKey, getDrtStats, Constants.oneDay());
    } catch (error) {
      this.logger.error('An error occurred while getting drt stats', {
        path: `${AssetsTransactionService.name}.${this.getOrSetAproximateDrtStats.name}`,
        exception: error,
      });
    }
  }

  private getApproximateDrtStatsCacheKey() {
    return generateCacheKeyFromParams('assets', 'approximateDrtStats');
  }
}
