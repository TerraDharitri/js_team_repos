export declare function getTransactionCost(transaction: {
    [key: string]: any;
}): Promise<{
    data: {
        data?: {
            txGasUnits: number;
            returnMessage: string;
        } | undefined;
        code: string;
    };
    success: boolean;
} | {
    success: boolean;
    data?: undefined;
}>;
export default getTransactionCost;
//# sourceMappingURL=transactionCost.d.ts.map