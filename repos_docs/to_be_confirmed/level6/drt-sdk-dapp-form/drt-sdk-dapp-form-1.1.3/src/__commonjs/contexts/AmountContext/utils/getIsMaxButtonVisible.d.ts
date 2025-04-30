import { ExtendedValuesType, PartialNftType, TransactionTypeEnum } from 'types';
interface GetIsMaxButtonVisiblePropsType {
    nft?: PartialNftType;
    amount: string;
    readonly?: ExtendedValuesType['readonly'];
    maxAmountAvailable: string;
    maxAmountMinusDust: string;
    txType: TransactionTypeEnum;
}
export declare function getIsMaxButtonVisible({ nft, amount, readonly, maxAmountAvailable, maxAmountMinusDust, txType }: GetIsMaxButtonVisiblePropsType): boolean;
export {};
//# sourceMappingURL=getIsMaxButtonVisible.d.ts.map