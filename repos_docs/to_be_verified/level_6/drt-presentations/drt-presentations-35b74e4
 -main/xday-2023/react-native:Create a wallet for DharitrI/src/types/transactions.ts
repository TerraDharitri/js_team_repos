import { IPlainTransactionObject } from '@terradharitri/sdk-core/out';

export interface ExpandedTransactionType extends IPlainTransactionObject {
  txHash: string;
}
