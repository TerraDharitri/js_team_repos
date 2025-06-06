export interface IAnalyticsComputeService {
    lockedValueUSDFarms(): Promise<string>;
    totalValueLockedUSD(): Promise<string>;
    totalValueStakedUSD(): Promise<string>;
    totalAggregatedRewards(days: number): Promise<string>;
    totalLockedMoaStakedUSD(): Promise<string>;
    feeTokenBurned(tokenID: string, time: string): Promise<string>;
    penaltyTokenBurned(tokenID: string, time: string): Promise<string>;
}
