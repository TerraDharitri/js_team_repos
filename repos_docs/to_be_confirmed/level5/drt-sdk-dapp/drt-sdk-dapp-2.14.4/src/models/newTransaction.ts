import {
  Address,
  Transaction,
  TransactionOptions,
  TransactionVersion
} from '@terradharitri/sdk-core';
import { Signature } from '@terradharitri/sdk-core/out/signature';
import { GAS_LIMIT, GAS_PRICE, VERSION } from 'constants/index';
import { RawTransactionType } from 'types';
import { getDataPayloadForTransaction } from 'utils/transactions/getDataPayloadForTransaction';

export function newTransaction(rawTransaction: RawTransactionType) {
  const transaction = new Transaction({
    value: rawTransaction.value.valueOf(),
    data: getDataPayloadForTransaction(rawTransaction.data),
    nonce: rawTransaction.nonce.valueOf(),
    receiver: new Address(rawTransaction.receiver),
    sender: new Address(rawTransaction.sender),
    gasLimit: rawTransaction.gasLimit.valueOf() ?? GAS_LIMIT,
    gasPrice: rawTransaction.gasPrice.valueOf() ?? GAS_PRICE,
    chainID: rawTransaction.chainID.valueOf(),
    version: new TransactionVersion(rawTransaction.version ?? VERSION),
    ...(rawTransaction.options
      ? { options: new TransactionOptions(rawTransaction.options) }
      : {}),
    ...(rawTransaction.guardian
      ? { guardian: new Address(rawTransaction.guardian) }
      : {})
  });

  if (rawTransaction.guardianSignature) {
    transaction.applyGuardianSignature({
      hex: () => rawTransaction.guardianSignature || ''
    });
  }

  if (rawTransaction.signature) {
    transaction.applySignature(new Signature(rawTransaction.signature));
  }

  return transaction;
}
