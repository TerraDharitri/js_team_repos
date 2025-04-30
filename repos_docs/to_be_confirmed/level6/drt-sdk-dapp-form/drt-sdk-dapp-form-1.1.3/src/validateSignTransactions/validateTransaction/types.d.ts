import { IPlainTransactionObject } from '@terradharitri/sdk-core/out';
import { MultiDcdtTransactionType, MultiSignTransactionType, TransactionsDataTokensType } from '@terradharitri/sdk-dapp/types/transactions.types';
import { ApiConfigType } from 'apiCalls';
import { ExtendedValuesType } from 'types';
export interface TxSignValuesType {
    receiver: string;
    receiverUsername?: string;
    senderUsername?: string;
    amount: string;
    tokenId: string;
    gasLimit: string;
    gasPrice: string;
    data: string;
    nonce?: string;
}
export interface ValidateType {
    tx: MultiSignTransactionType;
    txsDataTokens: TransactionsDataTokensType;
    type?: MultiDcdtTransactionType['type'];
    ledger?: ExtendedValuesType['ledger'];
    rewaLabel: string;
    address: string;
    balance: string;
    chainId: string;
    apiConfig: ApiConfigType;
}
export interface ValidateSignTransactionsType {
    extractedTxs: IPlainTransactionObject[];
    address: string;
    rewaLabel: string;
    balance: string;
    chainId: string;
    apiConfig: ApiConfigType;
}
//# sourceMappingURL=types.d.ts.map