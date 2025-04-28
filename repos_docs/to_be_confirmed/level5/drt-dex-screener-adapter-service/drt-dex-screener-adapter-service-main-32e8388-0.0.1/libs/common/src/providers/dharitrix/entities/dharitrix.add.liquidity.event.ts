import { ElasticEvent, ElasticLog } from "@mvx-monorepo/common";
import { DharitrixPair } from "./dharitrix.pair";
import { DharitrixLiquidityEvent } from "./dharitrix.liquidity.event";

export class DharitrixAddLiquidityEvent extends DharitrixLiquidityEvent {
  constructor(event: ElasticEvent, log: ElasticLog, pair: DharitrixPair) {
    super(event, log, pair, "addLiquidity");

    const decodedEvent = this.decodeEvent();
    this.caller = decodedEvent.caller.bech32();
  }
}
