import { BATCH_TRANSACTIONS_SC } from 'config';
import { newTransaction } from 'helpers/sdkDappHelpers';
import { GAS_PRICE, VERSION } from 'localConstants/sdkDapConstants';
import { Transaction } from 'types/sdkCoreTypes';
import { TransactionProps } from 'types/transaction.types';

export const getSwapAndLockTransactions = ({
  address,
  chainID,
  nonce
}: TransactionProps): Transaction[] => {
  return [
    newTransaction({
      chainID,
      gasLimit: 4200000,
      gasPrice: GAS_PRICE,
      nonce,
      receiver: BATCH_TRANSACTIONS_SC.rewa_wREWA.contract,
      sender: address,
      value: '1000000000000000000',
      version: VERSION,
      data: BATCH_TRANSACTIONS_SC.rewa_wREWA.data
    }),
    newTransaction({
      chainID,
      gasLimit: 25500000,
      gasPrice: GAS_PRICE,
      nonce,
      receiver: BATCH_TRANSACTIONS_SC.wREWA_USDC.contract,
      sender: address,
      value: '0',
      version: VERSION,
      data: BATCH_TRANSACTIONS_SC.wREWA_USDC.data
    }),
    newTransaction({
      chainID,
      gasLimit: 25500000,
      gasPrice: GAS_PRICE,
      nonce,
      receiver: BATCH_TRANSACTIONS_SC.wREWA_MOA.contract,
      sender: address,
      value: '0',
      version: VERSION,
      data: BATCH_TRANSACTIONS_SC.wREWA_MOA.data
    }),
    newTransaction({
      chainID,
      gasLimit: 10000000,
      gasPrice: GAS_PRICE,
      nonce,
      receiver: BATCH_TRANSACTIONS_SC.lock_MOA.contract,
      sender: address,
      value: '0',
      version: VERSION,
      data: BATCH_TRANSACTIONS_SC.lock_MOA.data
    })
  ];
};
