import { MarketplaceTypeEnum } from '../marketplaces/models/MarketplaceType.enum';

export class MarketplaceUtils {
  public static readonly commonMarketplaceAbiPath: string =
    './src/abis/dcdt-nft-marketplace.abi.json';

  public static readonly xoxnoMarketplaceAbiPath: string =
    './src/abis/xoxno-nft-marketplace.abi.json';

  public static readonly abiInterface: string = 'DcdtNftMarketplace';

  static isExternalMarketplace(type: MarketplaceTypeEnum) {
    return type === MarketplaceTypeEnum.External;
  }
}
