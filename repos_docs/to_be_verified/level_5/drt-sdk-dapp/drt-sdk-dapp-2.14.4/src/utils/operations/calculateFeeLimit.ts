import {
  Transaction,
  TransactionPayload,
  TransactionVersion,
  Address,
  TokenPayment
} from '@terradharitri/sdk-core';
import { NetworkConfig } from '@terradharitri/sdk-network-providers';
import { GAS_LIMIT, GAS_PRICE, ZERO } from 'constants/index';
import { stringIsFloat, stringIsInteger } from 'utils/validation';

export interface CalculateFeeLimitType {
  gasLimit: string;
  gasPrice: string;
  data: string;
  gasPerDataByte: string;
  gasPriceModifier: string;
  chainId: string;
  minGasLimit?: string;
  defaultGasPrice?: string;
}
const placeholderData = {
  from: 'drt12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqm22unr',
  to: 'drt12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqm22unr'
};
export function calculateFeeLimit({
  minGasLimit = String(GAS_LIMIT),
  gasLimit,
  gasPrice,
  data: inputData,
  gasPerDataByte,
  gasPriceModifier,
  defaultGasPrice = String(GAS_PRICE),
  chainId
}: CalculateFeeLimitType) {
  const data = inputData || '';
  const validGasLimit = stringIsInteger(gasLimit) ? gasLimit : minGasLimit;
  const validGasPrice = stringIsFloat(gasPrice) ? gasPrice : defaultGasPrice;
  const transaction = new Transaction({
    nonce: 0,
    value: TokenPayment.rewaFromAmount('0'),
    receiver: new Address(placeholderData.to),
    sender: new Address(placeholderData.to),
    gasPrice: parseInt(validGasPrice),
    gasLimit: parseInt(validGasLimit),
    data: new TransactionPayload(data.trim()),
    chainID: chainId,
    version: new TransactionVersion(1)
  });

  const networkConfig = new NetworkConfig();
  networkConfig.MinGasLimit = parseInt(minGasLimit);
  networkConfig.GasPerDataByte = parseInt(gasPerDataByte);
  networkConfig.GasPriceModifier = parseFloat(gasPriceModifier);
  try {
    const bNfee = transaction.computeFee(networkConfig);
    const fee = bNfee.toString(10);
    return fee;
  } catch (err) {
    return ZERO;
  }
}
