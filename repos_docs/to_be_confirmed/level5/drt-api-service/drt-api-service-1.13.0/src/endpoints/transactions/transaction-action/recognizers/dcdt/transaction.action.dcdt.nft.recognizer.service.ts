import { AddressUtils, BinaryUtils, NumberUtils, StringUtils } from "@terradharitri/sdk-nestjs-common";
import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ApiConfigService } from "src/common/api-config/api.config.service";
import { TokenTransferProperties } from "src/endpoints/tokens/entities/token.transfer.properties";
import { DcdtType } from "src/endpoints/dcdt/entities/dcdt.type";
import { TokenTransferService } from "src/endpoints/tokens/token.transfer.service";
import { TransactionAction } from "../../entities/transaction.action";
import { TransactionActionCategory } from "../../entities/transaction.action.category";
import { TransactionMetadata } from "../../entities/transaction.metadata";
import { TransactionMetadataTransfer } from "../../entities/transaction.metadata.transfer";
import { TransactionActionRecognizerInterface } from "../../transaction.action.recognizer.interface";

@Injectable()
export class TransactionActionDcdtNftRecognizerService implements TransactionActionRecognizerInterface {
  constructor(
    private readonly apiConfigService: ApiConfigService,
    @Inject(forwardRef(() => TokenTransferService))
    private readonly tokenTransferService: TokenTransferService,
  ) { }

  async recognize(metadata: TransactionMetadata): Promise<TransactionAction | undefined> {
    return this.recognizeTransfer(metadata) ??
      await this.recognizeFreeze(metadata) ??
      await this.recognizeBurn(metadata);

  }

  async recognizeFreeze(metadata: TransactionMetadata): Promise<TransactionAction | undefined> {
    if (!metadata || metadata.functionName !== 'freeze' || metadata.receiver !== this.apiConfigService.getDcdtContractAddress()) {
      return undefined;
    }

    const tokenIdentifier = BinaryUtils.hexToString(metadata.functionArgs[0]);

    const tokenProperties = await this.tokenTransferService.getTokenTransferProperties({ identifier: tokenIdentifier });
    if (!tokenProperties) {
      return undefined;
    }

    if (!AddressUtils.isValidHexAddress(metadata.functionArgs[1])) {
      return undefined;
    }

    const address = AddressUtils.bech32Encode(metadata.functionArgs[1]);

    const result = new TransactionAction();
    result.category = TransactionActionCategory.dcdtNft;
    result.name = 'freeze';
    result.description = `Freezed token ${tokenIdentifier} balance for address ${address}`;
    result.arguments = {
      address,
      token: {
        ...tokenProperties,
      },
    };

    return result;
  }

  async recognizeBurn(metadata: TransactionMetadata): Promise<TransactionAction | undefined> {
    if (!metadata || metadata.functionName !== 'DCDTNFTBurn') {
      return undefined;
    }

    const identifier = BinaryUtils.hexToString(metadata.functionArgs[0]);
    const value = BinaryUtils.hexToNumber(metadata.functionArgs[2]);
    const nonce = metadata.functionArgs[1];
    const tokenProperties = await this.tokenTransferService.getTokenTransferProperties({ identifier });

    if (!tokenProperties) {
      return undefined;
    }

    const result = new TransactionAction();
    result.category = TransactionActionCategory.dcdtNft;
    result.name = 'burn';
    result.description = `Burned token ${identifier}`;
    result.arguments = {
      token: {
        ...tokenProperties,
        identifier: `${identifier}-${nonce}`,
        value: value,
      },
    };
    return result;
  }

  private recognizeTransfer(metadata: TransactionMetadata): TransactionAction | undefined {
    return this.getMultiTransferAction(metadata, TransactionActionCategory.dcdtNft, 'transfer', 'Transfer');
  }

  getMultiTransferActionWithTicker(metadata: TransactionMetadata, category: TransactionActionCategory, name: string, action: string): TransactionAction | undefined {
    const multiTransfers = metadata.transfers;
    if (!multiTransfers) {
      return undefined;
    }

    const description = `${action} ${multiTransfers.map(x => `${NumberUtils.toDenominatedString(x.value, x.properties?.decimals)} ${x.properties?.ticker}`).filter(x => x !== undefined).join(', ')}`;

    return this.getMultiTransferAction(metadata, category, name, description);
  }

  getMultiTransferActionWithFullDescription(metadata: TransactionMetadata, category: TransactionActionCategory, name: string, action: string): TransactionAction | undefined {
    const multiTransfers = metadata.transfers;
    if (!multiTransfers) {
      return undefined;
    }

    const description = `${action} ${multiTransfers.map(x => this.getMultiTransferDescription(x)).filter(x => x !== undefined).join(', ')} to ${metadata.receiver}`;

    return this.getMultiTransferAction(metadata, category, name, description);
  }

  getMultiTransferAction(metadata: TransactionMetadata, category: TransactionActionCategory, name: string, description: string): TransactionAction | undefined {
    const multiTransfers = metadata.transfers;
    if (!multiTransfers) {
      return undefined;
    }

    const result = new TransactionAction();
    result.category = category;
    result.name = name;
    result.description = description;
    result.arguments = {
      transfers: multiTransfers.map(x => this.getNftTransferDetails(x)).filter(x => x !== undefined),
      receiver: metadata.receiver,
      functionName: metadata.functionName && StringUtils.isFunctionName(metadata.functionName) ? metadata.functionName : undefined,
      functionArgs: metadata.functionArgs && metadata.functionArgs.every(x => StringUtils.isHex(x)) ? metadata.functionArgs : undefined,
    };

    return result;
  }

  getNftTransferDetails(transfer: TransactionMetadataTransfer): any {
    const properties = transfer.properties;
    if (properties) {
      return {
        ...properties,
        value: transfer.value.toString(),
      };
    }

    return undefined;
  }

  getMultiTransferDescription(transfer: TransactionMetadataTransfer): string | undefined {
    const properties = transfer.properties;
    if (!properties) {
      return undefined;
    }

    if (properties.type === 'FungibleDCDT') {
      return this.getTokenTransferDescription(properties, transfer.value);
    } else {
      return this.getNftTransferDescription(properties, transfer.value);
    }
  }

  private getTokenTransferDescription(properties: TokenTransferProperties, value: BigInt): string {
    const denominatedValue = NumberUtils.toDenominatedString(value, properties.decimals);
    return `${denominatedValue} ${properties.name} (${properties.ticker})`;
  }

  private getNftTransferDescription(properties: TokenTransferProperties, value: BigInt): string {
    switch (properties.type) {
      case DcdtType.MetaDCDT:
        const denominatedValue = NumberUtils.toDenominatedString(value, properties.decimals);
        return `${denominatedValue} ${properties.name} (${properties.identifier})`;
      case DcdtType.NonFungibleDCDT:
        return `NFT of collection ${properties.name} (${properties.identifier})`;
      case DcdtType.SemiFungibleDCDT:
        return `quantity ${value.toString()} for NFT of collection ${properties.name} (${properties.identifier})`;
      default:
        return 'Unknown';
    }
  }
}
