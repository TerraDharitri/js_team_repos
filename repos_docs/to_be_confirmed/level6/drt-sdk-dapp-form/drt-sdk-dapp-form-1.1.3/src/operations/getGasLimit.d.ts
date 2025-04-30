import { TransactionTypeEnum } from 'types/enums';
export interface GetGasLimitType {
    txType: TransactionTypeEnum;
    data?: string;
    isGuarded?: boolean;
}
export declare function getGasLimit({ txType, data, isGuarded }: GetGasLimitType): string;
//# sourceMappingURL=getGasLimit.d.ts.map