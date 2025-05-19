import { ElasticEvent, ElasticLog } from "@drt-monorepo/common";
import { DharitrixPair } from "./dharitrix.pair";
import { DharitrixLiquidityEvent } from "./dharitrix.liquidity.event";

export class DharitrixRemoveLiquidityEvent extends DharitrixLiquidityEvent {
  constructor(event: ElasticEvent, log: ElasticLog, pair: DharitrixPair) {
    super(event, log, pair, "removeLiquidity");

    const decodedEvent = this.decodeEvent();
    this.caller = decodedEvent.caller.bech32();
  }
}
