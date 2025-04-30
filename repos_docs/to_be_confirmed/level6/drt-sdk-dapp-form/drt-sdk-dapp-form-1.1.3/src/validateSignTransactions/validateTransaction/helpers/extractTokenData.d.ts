import { TransactionsDataTokensType } from '@terradharitri/sdk-dapp/types/transactions.types';
export declare function extractTokenData(props: {
    dataId: string;
    rewaLabel: string;
    txsDataTokens: TransactionsDataTokensType;
}): import("@terradharitri/sdk-dapp/types/transactions.types").TransactionDataTokenType | {
    tokenId: string;
    amount: string;
    type: string;
    nonce: string;
    receiver: string;
};
export default extractTokenData;
//# sourceMappingURL=extractTokenData.d.ts.map