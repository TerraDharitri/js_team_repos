import type { Transaction } from '@terradharitri/sdk-core';
import {
  MultiSignTransactionType,
  TransactionDataTokenType,
  TransactionsDataTokensType
} from 'types';
import { getTokenFromData } from './getTokenFromData';
import { parseMultiDcdtTransferData } from './parseMultiDcdtTransferData';

function addTransactionDataToParsedInfo({
  parsedTransactionsByDataField,
  data,
  txInfo
}: {
  parsedTransactionsByDataField?: TransactionsDataTokensType;
  data: string;
  txInfo: TransactionDataTokenType;
}) {
  if (!parsedTransactionsByDataField) {
    return;
  }

  parsedTransactionsByDataField[data] = txInfo;
}

export function parseMultiDcdtTransferDataForMultipleTransactions({
  transactions
}: {
  transactions?: Transaction[];
}) {
  const parsedTransactionsByDataField: TransactionsDataTokensType = {};
  const allTransactions: MultiSignTransactionType[] = [];

  if (!transactions || transactions.length === 0) {
    return {
      allTransactions,
      parsedTransactionsByDataField
    };
  }

  transactions.forEach((transaction, transactionIndex) => {
    const txData = transaction.getData().toString();
    const multiTxs = parseMultiDcdtTransferData(txData);

    if (multiTxs.length > 0) {
      multiTxs.forEach((trx, idx) => {
        const newTx: MultiSignTransactionType = {
          transaction,
          multiTxData: trx.data,
          transactionIndex: idx
        };

        addTransactionDataToParsedInfo({
          parsedTransactionsByDataField,
          data: trx.data,
          txInfo: {
            tokenId: trx.token ? trx.token : '',
            amount: trx.amount ? trx.amount : '',
            type: trx.type,
            nonce: trx.nonce ? trx.nonce : '',
            multiTxData: trx.data,
            receiver: trx.receiver
          }
        });

        allTransactions.push(newTx);
      });
    } else {
      const transactionData = transaction.getData().toString();

      const { tokenId, amount } = getTokenFromData(transactionData);

      if (tokenId) {
        addTransactionDataToParsedInfo({
          parsedTransactionsByDataField,
          data: transactionData,
          txInfo: {
            tokenId,
            amount,
            receiver: transaction.getReceiver().bech32()
          }
        });
      }
      allTransactions.push({
        transaction,
        transactionIndex,
        multiTxData: transactionData
      });
    }
  });

  return {
    allTransactions,
    parsedTransactionsByDataField
  };
}
