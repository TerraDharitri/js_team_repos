import BigNumber from 'bignumber.js';

import { DECIMALS, DIGITS } from 'config';
import { formatAmount } from 'helpers';
import {
  TransactionType,
  TransactionTokenArgumentType,
  NftTypeEnum
} from 'types';

enum TransactionMessagesEnum {
  newNFTData = 'new nft data on sender',
  invalidLiquidity = 'invalid liquidity for dcdt',
  nilUserAccount = 'nil user account'
}

// Temporarily show more meaningful error messages
const getDisplayMessages = ({
  message,
  transaction
}: {
  message?: string;
  transaction: TransactionType;
}) => {
  const compareMessage = message?.toLowerCase();
  switch (true) {
    case compareMessage?.includes(TransactionMessagesEnum.newNFTData):
      const transactionActionTransfers =
        transaction?.action?.arguments?.transfers ?? [];
      if (transactionActionTransfers.length === 1) {
        const tokenIdentifier =
          transactionActionTransfers[0]?.identifier ||
          transactionActionTransfers[0]?.ticker;
        if (tokenIdentifier) {
          return `Not enough balance of ${getTokenDisplayType(
            transactionActionTransfers[0].type
          )} ${tokenIdentifier}`;
        }
      }
      return 'Not enough balance of transferred token';
    case compareMessage?.includes(TransactionMessagesEnum.invalidLiquidity):
      return 'One of the selected tokens was temporarily immovable due to a pending DCDT protocol upgrade. Protocol update has been successfully deployed at epoch 811.';
    case compareMessage?.includes(TransactionMessagesEnum.nilUserAccount):
      return 'Transfer role is active on token: Transaction sender or receiver is not whitelisted.';
    default:
      return message;
  }
};

const getReceiptValue = (transaction: TransactionType) => {
  if (transaction?.receipt?.value) {
    if (
      transaction?.receipt?.data &&
      transaction.receipt.data === 'refundedGas'
    ) {
      const formattedGas = formatAmount({
        input: transaction.receipt.value,
        decimals: DECIMALS,
        digits: DIGITS,
        showLastNonZeroDecimal: true
      });
      const gasRefunded = new BigNumber(formattedGas)
        .times(transaction.gasPrice)
        .times(100);

      return gasRefunded.toFixed();
    }

    return transaction.receipt.value;
  }

  return '';
};

const getTokenDisplayType = (type: TransactionTokenArgumentType['type']) => {
  switch (type) {
    case NftTypeEnum.NonFungibleDCDT:
      return 'NFT';
    case NftTypeEnum.SemiFungibleDCDT:
      return 'SFT';
    default:
      return 'token';
  }
};

export const getReceiptMessages = (transaction: TransactionType) => {
  if (transaction?.receipt?.data) {
    const message = transaction.receipt.data;
    const receiptValue = getReceiptValue(transaction);
    const value = receiptValue ? `: ${receiptValue}` : '';

    return [`${message}${value}`];
  } else {
    return [];
  }
};

export const getOperationsMessages = (transaction: TransactionType) => {
  const messages =
    transaction?.operations
      ?.map((operation) =>
        getDisplayMessages({ message: operation.message, transaction })
      )
      .filter((messages): messages is string => Boolean(messages)) ?? [];

  return messages;
};

export const getScResultsMessages = (transaction: TransactionType) => {
  const messages =
    transaction?.results
      ?.map((result) =>
        getDisplayMessages({ message: result.returnMessage, transaction })
      )
      .filter((messages): messages is string => Boolean(messages)) ?? [];

  return messages;
};

export const getTransactionMessages = (transaction: TransactionType) => {
  const transactionMessages = Array.from(
    new Set([
      ...getScResultsMessages(transaction),
      ...getOperationsMessages(transaction),
      ...getReceiptMessages(transaction)
    ])
  );

  return transactionMessages;
};
