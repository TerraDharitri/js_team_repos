import { PartialNftType, TransactionTypeEnum, ExtendedValuesType } from 'types';
export declare const computeTokenDataField: ({ amount, decimals, tokenId }: {
    amount: string;
    tokenId: string;
    decimals: number;
}) => string;
export declare const computeNftDataField: ({ nft, amount, receiver, errors }: {
    nft?: PartialNftType | undefined;
    amount: string;
    receiver: string;
    errors: boolean;
}) => string;
export declare const getDataField: ({ txType, values, nft, amountError, receiverError }: {
    txType: TransactionTypeEnum;
    values: ExtendedValuesType;
    nft?: PartialNftType | undefined;
    amountError?: boolean | undefined;
    receiverError?: string | undefined;
}) => string;
//# sourceMappingURL=computeDataField.d.ts.map