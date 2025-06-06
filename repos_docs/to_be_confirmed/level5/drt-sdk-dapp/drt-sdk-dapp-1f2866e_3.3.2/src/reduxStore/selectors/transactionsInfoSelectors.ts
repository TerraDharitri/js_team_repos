import { createDeepEqualSelector } from 'reduxStore/selectors/helpers';
import {
  defaultTransactionErrorMessage,
  defaultTransactionProcessingMessage,
  defaultTransactionSuccessMessage
} from 'reduxStore/slices';
import { RootState } from 'reduxStore/store';
import { TransactionsDisplayInfoType } from 'types';

const defaultTransactionInfo: TransactionsDisplayInfoType = {
  errorMessage: defaultTransactionErrorMessage,
  successMessage: defaultTransactionSuccessMessage,
  processingMessage: defaultTransactionProcessingMessage
};

export const transactionsInfoSelectors = (state: RootState) =>
  state.transactionsInfo;

export const transactionDisplayInfoSelector = createDeepEqualSelector(
  transactionsInfoSelectors,
  (_: RootState, transactionSessionId: string | null) => transactionSessionId,
  (
    transactionsDisplayInfo: TransactionsDisplayInfoType,
    transactionSessionId: string | null
  ) =>
    transactionSessionId != null
    ? (transactionsDisplayInfo as Record<number, TransactionsDisplayInfoType>)?.[Number(transactionSessionId)] ||
    defaultTransactionInfo
      : defaultTransactionInfo
);
