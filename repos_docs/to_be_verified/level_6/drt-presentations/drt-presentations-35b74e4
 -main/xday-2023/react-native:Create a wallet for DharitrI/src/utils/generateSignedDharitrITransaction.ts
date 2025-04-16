import { IPlainTransactionObject } from '@terradharitri/sdk-core';
import { parseAmount } from '@terradharitri/sdk-dapp/utils/operations/parseAmount';
import {GAS_LIMIT, GAS_PER_DATA_BYTE, GAS_PRICE} from '@terradharitri/sdk-dapp/constants';
import WalletManager from '../nativeModules/WalletManager';
import { chainIds } from 'constants/network';

interface GenerateSignedDharitriTransactionPropsType {
  amount: string | number;
  receiver: string ;
  data?: string;
  sender: string;
  nonce: number;
}

export async function generateSignedDharitriTransactions({
  amount,
  receiver,
  sender,
  nonce,
  data = '',
}: GenerateSignedDharitriTransactionPropsType): Promise<IPlainTransactionObject> {
  const dataGasLimit = data?.length * GAS_PER_DATA_BYTE;

  const totalGasLimit = Number(GAS_LIMIT) + dataGasLimit;
  const transactionsToSign = {
    amount: parseAmount(String(amount)),
    receiver,
    gasPrice: String(GAS_PRICE),
    gasLimit: String(totalGasLimit),
    sender,
    nonce,
    data,
    chainId: chainIds.devnet
  };

  const signedTransactionJSON = await WalletManager.signTransaction(
    transactionsToSign
  );
  return JSON.parse(signedTransactionJSON);
}
