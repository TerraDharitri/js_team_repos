export enum TokensTypeEnum {
  fungibleDCDT = "FungibleDCDT",
  nonFungibleDCDT = "NonFungibleDCDT",
  semiFungibleDCDT = "SemiFungibleDCDT",
  metaDCDT = "MetaDCDT",
}

export interface IToken {
  identifier: string;
  type: TokensTypeEnum;
  name: string;
  ticker: string;
  decimals: number;
  balance: string;
  nonce?: number;
  collection?: string;
}
