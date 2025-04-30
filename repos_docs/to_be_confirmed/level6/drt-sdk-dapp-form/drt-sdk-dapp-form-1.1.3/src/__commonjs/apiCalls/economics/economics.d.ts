export interface EconomicsInfoType {
    totalSupply: number;
    circulatingSupply: number;
    staked: number;
    price: number;
    marketCap: number;
    apr: number;
    topUpApr: number;
    baseApr: number;
}
export declare function getEconomicsInfo(): Promise<EconomicsInfoType | null>;
//# sourceMappingURL=economics.d.ts.map