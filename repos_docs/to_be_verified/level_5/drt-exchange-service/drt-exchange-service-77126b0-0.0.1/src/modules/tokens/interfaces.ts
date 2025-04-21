export interface ITokenComputeService {
    getrewaPriceInUSD(): Promise<string>;
    computeTokenPriceDerivedrewa(
        tokenID: string,
        pairsNotToVisit: [],
    ): Promise<string>;
    computeTokenPriceDerivedUSD(tokenID: string): Promise<string>;
}
