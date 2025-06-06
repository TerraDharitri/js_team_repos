import { registerEnumType } from '@nestjs/graphql';

export enum AuctionTypeEnum {
  None = 'None',
  Nft = 'Nft',
  NftBid = 'NftBid',
  SftAll = 'SftAll',
  SftOnePerPayment = 'SftOnePerPayment',
}

export enum NumbatSwapAuctionTypeEnum {
  Auction,
  Swap,
  Buy,
}

registerEnumType(AuctionTypeEnum, {
  name: 'AuctionTypeEnum',
});
