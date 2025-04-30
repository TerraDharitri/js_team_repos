import { MultiSignTransactionType, TransactionDataTokenType } from '@terradharitri/sdk-dapp/types/transactions.types';
import { ValidateSignTransactionsType } from './validateTransaction';
export declare function validateSignTransactions(props: ValidateSignTransactionsType): Promise<{
    txsDataTokens: Record<string, TransactionDataTokenType>;
    errors: {
        [key: string]: string;
    };
    parsedTransactions: MultiSignTransactionType[];
} | null>;
//# sourceMappingURL=validateSignTransactions.d.ts.map