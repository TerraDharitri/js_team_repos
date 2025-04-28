import { DcdtToken } from '../entities';

export interface DataApiTradingPairsResponse {
  address: string;
  state: string;
  firstToken: DcdtToken;
  secondToken: DcdtToken;
}
