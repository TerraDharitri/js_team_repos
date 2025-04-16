export class ApiNetworkStake {
  totalValidators: number;
  activeValidators: number;
  totalStaked: string;
  minimumAuctionQualifiedStake: string;
  waitingValidators: number;
  qualifiedAuctionValidators: number;
  allStakedNodes: number;
  inactiveValidators?: number;
  queueSize?: number;
}
