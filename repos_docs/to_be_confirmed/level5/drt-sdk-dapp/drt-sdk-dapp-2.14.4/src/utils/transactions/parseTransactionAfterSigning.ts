import { Transaction } from '@terradharitri/sdk-core/out';
import { PlainSignedTransaction } from '@terradharitri/sdk-web-wallet-provider/out/plainSignedTransaction';
import { newTransaction } from 'models';
import { SignedTransactionType } from 'types';
import { TransactionServerStatusesEnum } from 'types/enums.types';

export function parseTransactionAfterSigning(
  signedTransaction: Transaction | PlainSignedTransaction
) {
  const isComplexTransaction =
    Object.getPrototypeOf(signedTransaction).toPlainObject != null;

  const transaction = isComplexTransaction
    ? (signedTransaction as Transaction)
    : newTransaction(signedTransaction as PlainSignedTransaction);

  const parsedTransaction: SignedTransactionType = {
    ...transaction.toPlainObject(),
    hash: transaction.getHash().hex(),
    status: TransactionServerStatusesEnum.pending
  };
  return parsedTransaction;
}
