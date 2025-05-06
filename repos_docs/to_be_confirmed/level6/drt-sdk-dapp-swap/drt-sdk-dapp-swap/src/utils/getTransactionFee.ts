import {
  IPlainTransactionObject,
  NetworkConfig,
  TransactionComputer
} from '@terradharitri/sdk-core';
import {
  GAS_LIMIT,
  GAS_PER_DATA_BYTE,
  GAS_PRICE_MODIFIER
} from '@terradharitri/sdk-dapp/dist/constants';
import { createTransactionFromRaw } from './createTransactionFromRaw';

export const getTransactionFee = (rawTransaction: IPlainTransactionObject) => {
  const transaction = createTransactionFromRaw(rawTransaction);

  const networkConfig = new NetworkConfig();
  networkConfig.minGasLimit = BigInt(GAS_LIMIT);
  networkConfig.gasPerDataByte = BigInt(GAS_PER_DATA_BYTE);
  networkConfig.gasPriceModifier = GAS_PRICE_MODIFIER;

  try {
    const transactionComputer = new TransactionComputer();
    const fee = transactionComputer.computeTransactionFee(
      transaction,
      networkConfig
    );
    return fee.toString(10);
  } catch (err) {
    return 0;
  }
};
