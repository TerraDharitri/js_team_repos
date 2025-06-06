import {
  ApiConfigService,
  JoinExitEvent,
  MetricsEvents,
  PairResponse, SwapEvent,
  LogPerformanceAsync,
  ApiMetricsService,
  ApiService,
  CacheInfo,
  IndexerService,
} from "@drt-monorepo/common";
import { Injectable } from "@nestjs/common";
import { GeneralEvent } from "@drt-monorepo/common/providers/entities/general.event";
import { IProviderService } from "@drt-monorepo/common/providers";
import { OneDexPair } from "./entities/onedex.pair";
import swapAbi from "./abis/swap.abi.json";
import { AbiRegistry, Address, Interaction, ResultsParser, SmartContract, TypedOutcomeBundle, U32Value } from "@terradharitri/sdk-core/out";
import { PerformanceProfiler } from "@terradharitri/sdk-nestjs-monitoring";
import { ContractQueryRequest } from "@terradharitri/sdk-network-providers/out/contractQueryRequest";
import { BinaryUtils, OriginLogger } from "@terradharitri/sdk-nestjs-common";
import { ApiService } from "@terradharitri/sdk-nestjs-http";
import { ContractQueryResponse } from "@terradharitri/sdk-network-providers/out";
import { CacheService } from "@terradharitri/sdk-nestjs-cache";
import { OneDexSwapEvent } from "./entities/onedex.swap.event";
import BigNumber from "bignumber.js";
import { OneDexAddLiquidityEvent } from "./entities/onedex.add.liquidity.event";
import { OneDexAddInitialLiquidityEvent } from "./entities/onedex.add.initial.liquidity.event";
import { OneDexRemoveLiquidityEvent } from "./entities/onedex.remove.liquidity.event";

@Injectable()
export class OneDexService implements IProviderService {
  private readonly logger = new OriginLogger(OneDexService.name);

  private readonly resultsParser: ResultsParser;
  private readonly swapAddress: string;
  private readonly swapContract: SmartContract;

  constructor(
    private readonly apiConfigService: ApiConfigService,
    private readonly apiService: ApiService,
    private readonly apiMetricsService: ApiMetricsService,
    private readonly dharitrIApiService: ApiService,
    private readonly cacheService: CacheService,
    private readonly indexerService: IndexerService,
  ) {
    this.resultsParser = new ResultsParser();

    this.swapAddress = this.apiConfigService.getOneDexSwapAddress();
    this.swapContract = new SmartContract({
      address: new Address(this.swapAddress),
      abi: AbiRegistry.create(swapAbi),
    });
  }

  @LogPerformanceAsync(MetricsEvents.SetOneDexDuration)
  public async getPair(address: string): Promise<PairResponse | undefined> {
    const oneDexPairs = await this.getPairs();
    const oneDexPair = oneDexPairs.find((p) => p.address === address);
    if (!oneDexPair) {
      return undefined;
    }

    const pair = {
      id: oneDexPair.address,
      dexKey: this.getProviderName(),
      asset0Id: oneDexPair.firstTokenId,
      asset1Id: oneDexPair.secondTokenId,
      feeBps: oneDexPair.pairFeePercent,
    };

    return {
      pair,
    };
  }

  @LogPerformanceAsync(MetricsEvents.SetOneDexDuration)
  public async getPairs(): Promise<OneDexPair[]> {
    const rawPairs = await this.getPairsMetadata();

    const pairs: OneDexPair[] = [];
    for (const rawPair of rawPairs) {
      const [firstToken, secondToken] = await Promise.all([
        this.dharitrIApiService.getToken(rawPair.first_token_id),
        this.dharitrIApiService.getToken(rawPair.second_token_id),
      ]);

      if (!firstToken || !secondToken) {
        this.logger.error(`Token not found for pair with lp ${rawPair.lp_token_id}`);
        continue;
      }

      const pair: OneDexPair = {
        id: rawPair.pair_id,
        address: `${this.swapAddress}-${rawPair.lp_token_id}`,
        lpTokenId: rawPair.lp_token_id,
        lpTokenDecimals: rawPair.lp_token_decimal,
        firstTokenId: rawPair.first_token_id,
        firstTokenDecimals: firstToken.decimals,
        secondTokenId: rawPair.second_token_id,
        secondTokenDecimals: secondToken.decimals,
        pairFeePercent: rawPair.total_fee_percentage,
      };
      pairs.push(pair);
    }

    return pairs;
  }

  public async getPairsMetadata(): Promise<any[]> {
    return await this.cacheService.getOrSet(
      CacheInfo.OneDexPairsMetadata().key,
      async () => await this.getPairsMetadataRaw(),
      CacheInfo.OneDexPairsMetadata().ttl,
    );
  }

  public async getPairsMetadataRaw(): Promise<any[]> {
    const rawPairs = [];

    const size = 100;
    let from = 0;
    let currentRawPairs = [];
    do {
      const interaction = this.swapContract.methodsExplicit.viewPairsPaginated([
        new U32Value(from),
        new U32Value(size),
      ]);
      const responseRaw = await this.queryContract(interaction);
      currentRawPairs = responseRaw?.firstValue?.valueOf();

      rawPairs.push(...currentRawPairs);

      from += currentRawPairs.length;
    } while (currentRawPairs.length === size);

    for (const rawPair of rawPairs) {
      rawPair.pair_id = rawPair.pair_id.toNumber();
      rawPair.lp_token_decimal = rawPair.lp_token_decimal.toNumber();
      rawPair.total_fee_percentage = rawPair.total_fee_percentage.toNumber();
    }

    return rawPairs;
  }

  @LogPerformanceAsync(MetricsEvents.SetOneDexDuration)
  public async getEvents(before: number, after: number): Promise<GeneralEvent[]> {
    const pairs = await this.getPairs();

    const swapInputTopic = BinaryUtils.base64Encode("SwapTokensFixedInputEvent");
    const swapOutputTopic = BinaryUtils.base64Encode("SwapTokensFixedOutputEvent");
    const addInitialLiquidityTopic = BinaryUtils.base64Encode("AddInitialLiquidityEvent");
    const addLiquidityTopic = BinaryUtils.base64Encode("AddLiquidityEvent");
    const removeLiquidityTopic = BinaryUtils.base64Encode("RemoveLiquidityEvent");
    const eventNames = [swapInputTopic, swapOutputTopic, addInitialLiquidityTopic, addLiquidityTopic, removeLiquidityTopic];

    const logs = await this.indexerService.getLogs(before, after, [this.swapAddress], eventNames);

    const events: (OneDexSwapEvent | OneDexAddLiquidityEvent | OneDexAddInitialLiquidityEvent | OneDexRemoveLiquidityEvent)[] = [];
    for (const log of logs) {
      for (const event of log.events) {
        switch (event.topics[0]) {
          case swapInputTopic:
          case swapOutputTopic:
            const swapEvent = new OneDexSwapEvent(event, log, pairs);
            events.push(swapEvent);
            break;
          case addInitialLiquidityTopic:
            const addInitialLiquidityEvent = new OneDexAddInitialLiquidityEvent(event, log, pairs);
            events.push(addInitialLiquidityEvent);
            break;
          case addLiquidityTopic:
            const addLiquidityEvent = new OneDexAddLiquidityEvent(event, log, pairs);
            events.push(addLiquidityEvent);
            break;
          case removeLiquidityTopic:
            const removeLiquidityEvent = new OneDexRemoveLiquidityEvent(event, log, pairs);
            events.push(removeLiquidityEvent);
            break;
          default:
            this.logger.error(`Unknown event topic ${event.topics[0]}. Event: ${JSON.stringify(event)}`);
        }
      }
    }

    return events;
  }

  public getProviderName(): string {
    return "OneDex";
  }

  public fromSwapEvent(event: OneDexSwapEvent): SwapEvent {
    let asset0In: string | undefined = undefined;
    let asset1In: string | undefined = undefined;
    let asset0Out: string | undefined = undefined;
    let asset1Out: string | undefined = undefined;
    let asset0Reserves: string;
    let asset1Reserves: string;
    let priceNative: string;

    if (event.pair.firstTokenId === event.tokenInId) {
      asset0In = new BigNumber(event.tokenInAmount).shiftedBy(-event.pair.firstTokenDecimals).toFixed();
      asset1Out = new BigNumber(event.tokenOutAmount).shiftedBy(-event.pair.secondTokenDecimals).toFixed();
      asset0Reserves = new BigNumber(event.tokenInReserves).shiftedBy(-event.pair.firstTokenDecimals).toFixed();
      asset1Reserves = new BigNumber(event.tokenOutReserves).shiftedBy(-event.pair.secondTokenDecimals).toFixed();
      priceNative = new BigNumber(asset1Reserves).dividedBy(asset0Reserves).toFixed();
    } else {
      asset1In = new BigNumber(event.tokenInAmount).shiftedBy(-event.pair.secondTokenDecimals).toFixed();
      asset0Out = new BigNumber(event.tokenOutAmount).shiftedBy(-event.pair.firstTokenDecimals).toFixed();
      asset0Reserves = new BigNumber(event.tokenOutReserves).shiftedBy(-event.pair.firstTokenDecimals).toFixed();
      asset1Reserves = new BigNumber(event.tokenInReserves).shiftedBy(-event.pair.secondTokenDecimals).toFixed();
      priceNative = new BigNumber(asset1Reserves).dividedBy(asset0Reserves).toFixed();
    }

    return {
      eventType: "swap",
      txnId: event.txHash,
      txnIndex: event.txOrder,
      eventIndex: event.eventOrder,
      maker: event.caller,
      pairId: event.pair.address,
      asset0In,
      asset1In,
      asset0Out,
      asset1Out,
      priceNative,
      reserves: {
        asset0: asset0Reserves,
        asset1: asset1Reserves,
      },
    };
  }

  public fromAddRemoveLiquidityEvent(event: OneDexAddInitialLiquidityEvent | OneDexAddLiquidityEvent | OneDexRemoveLiquidityEvent): JoinExitEvent {
    const eventType = event.type === "addLiquidity" ? "join" : "exit";

    return {
      eventType,
      txnId: event.txHash,
      txnIndex: event.txOrder,
      eventIndex: event.eventOrder,
      maker: event.caller,
      pairId: event.pair.address,
      amount0: new BigNumber(event.firstTokenAmount).shiftedBy(-event.pair.firstTokenDecimals).toFixed(),
      amount1: new BigNumber(event.secondTokenAmount).shiftedBy(-event.pair.secondTokenDecimals).toFixed(),
      reserves: {
        asset0: new BigNumber(event.firstTokenReserves).shiftedBy(-event.pair.firstTokenDecimals).toFixed(),
        asset1: new BigNumber(event.secondTokenReserves).shiftedBy(-event.pair.secondTokenDecimals).toFixed(),
      },
    };
  }

  private async queryContract(interaction: Interaction): Promise<TypedOutcomeBundle> {
    const performanceProfiler = new PerformanceProfiler();

    try {
      const request = new ContractQueryRequest(interaction.buildQuery()).toHttpRequest();
      const httpResponse = await this.apiService.post(`${this.apiConfigService.getApiUrl()}/query`, request, { headers: request.headers });
      const queryResponse = ContractQueryResponse.fromHttpResponse(httpResponse.data);

      const response = this.resultsParser.parseQueryResponse(queryResponse, interaction.getEndpoint());
      return response;
    } catch (error) {
      this.logger.error(`Failed to query contract: ${interaction.getEndpoint()}`);
      this.logger.error(error);
      throw error;
    } finally {
      performanceProfiler.stop();
      this.apiMetricsService.setVmQueryDurationHistogram(interaction.getEndpoint().name, performanceProfiler.duration);
    }
  }
}
