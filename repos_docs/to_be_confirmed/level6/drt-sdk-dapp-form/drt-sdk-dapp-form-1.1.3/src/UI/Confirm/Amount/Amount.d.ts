import React from 'react';
import { PartialNftType, TransactionTypeEnum } from 'types';
export interface AmountPropsType {
    amount: string;
    tokenId: string;
    tokenIdError?: string;
    label?: string;
    rewaLabel: string;
    tokenLabel: string;
    tokenAvatar: string;
    rewaPriceInUsd: number;
    tokenDecimals: number;
    txType: TransactionTypeEnum;
    nft?: PartialNftType;
}
export declare const Amount: ({ label, amount, txType, tokenDecimals, tokenId, rewaLabel, rewaPriceInUsd, nft, tokenAvatar }: AmountPropsType) => React.JSX.Element | null;
//# sourceMappingURL=Amount.d.ts.map