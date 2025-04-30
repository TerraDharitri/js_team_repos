interface EntireBalanceType {
    balance?: string;
    gasPrice: string;
    gasLimit?: string;
    decimals: number;
    digits: number;
    data?: string;
    chainId: string;
}
export declare function getEntireBalance({ balance, gasLimit, gasPrice, decimals, digits, data, chainId }: EntireBalanceType): {
    entireBalance: string;
    entireBalanceMinusDust: string;
    parsedEntireBalance: string;
};
export declare function getEntireTokenBalance({ balance, decimals, digits }: {
    balance?: string | undefined;
    decimals?: number | undefined;
    digits?: number | undefined;
}): string;
export default getEntireBalance;
//# sourceMappingURL=getEntireBalance.d.ts.map