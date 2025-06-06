import React, { useMemo } from 'react';

import { FailedTransactionStatusToast } from 'components/TransactionStatusToast/FailedTransactionStatusToast';
import { StatusIconType } from 'components/TransactionStatusToast/transactionStatusToast.types';
import { DEFAULT_TRANSACTION_STATUS_MESSAGE } from 'constants/index';

import { WithClassnameType } from '../../types';

// TODO: Rename to "TransactionStatusToastPropsType" when sdk-dapp@3.0.0
export interface TransactionStatusToastType extends WithClassnameType {
  signError: string | null;
  canceledTransactionsMessage: string | null;
  onDelete: () => void;
}

export const TransactionStatusToast = ({
  signError,
  canceledTransactionsMessage,
  onDelete,
  className
}: TransactionStatusToastType) => {
  const message = useMemo(() => {
    return (
      signError ||
      canceledTransactionsMessage ||
      DEFAULT_TRANSACTION_STATUS_MESSAGE
    );
  }, [signError, canceledTransactionsMessage]);

  const type = useMemo(() => {
    if (signError) {
      return StatusIconType.ERROR;
    } else if (canceledTransactionsMessage) {
      return StatusIconType.WARNING;
    }

    return StatusIconType.INFO;
  }, [signError, canceledTransactionsMessage]);

  return (
    <FailedTransactionStatusToast
      message={message}
      type={type}
      onDelete={onDelete}
      className={className}
    />
  );
};
