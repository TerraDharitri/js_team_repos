import { IPlainTransactionObject } from '@terradharitri/sdk-core/out';
import { TransactionsDataTokensType } from '@terradharitri/sdk-dapp/types/transactions.types';
export interface ValidateReceiversType {
    transactions: IPlainTransactionObject[];
    txsDataTokens?: TransactionsDataTokensType;
    isMainnet: boolean;
    address: string;
    whitelistedReceivers?: string[];
}
export declare function validateReceivers({ transactions: txs, txsDataTokens, isMainnet, address, whitelistedReceivers }: ValidateReceiversType): boolean;
export default validateReceivers;
//# sourceMappingURL=validateReceivers.d.ts.map