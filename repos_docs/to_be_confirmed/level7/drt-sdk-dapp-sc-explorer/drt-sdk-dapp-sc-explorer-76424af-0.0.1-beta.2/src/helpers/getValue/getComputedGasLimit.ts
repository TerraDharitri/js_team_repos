import { Transaction } from '@terradharitri/sdk-core/out';
import { GAS_LIMIT, GAS_PER_DATA_BYTE } from '@terradharitri/sdk-dapp/dist/constants';
import BigNumber from 'bignumber.js';

export const getComputedGasLimit = ({
  transaction
}: {
  transaction: Transaction;
}) => {
  const data = transaction.getData().toString();
  const bNconfigGasLimit = new BigNumber(GAS_LIMIT);
  const bNgasPerDataByte = new BigNumber(GAS_PER_DATA_BYTE);
  const bNgasValue = data
    ? bNgasPerDataByte.times(Buffer.from(data).length)
    : 0;
  const bNgasLimit = bNconfigGasLimit.plus(bNgasValue);
  const gasLimit = bNgasLimit.toString(10);

  return gasLimit;
};
