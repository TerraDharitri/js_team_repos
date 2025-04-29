export class ApiValidatorAuction {
  owner: string;
  numStakedNodes: number;
  nodes: ApiValidatorAuctionNode[];
}

export class ApiValidatorAuctionNode {
  blsKey: string;
  qualified: boolean;
}

export class ApiValidatorAuctionResponse {
  data: {
    auctionList: ApiValidatorAuction[];
  };
}
