import { TokenTransfer } from '@terradharitri/sdk-core';
import { WALLET_PROVIDER_SEND_TRANSACTION_URL } from '@terradharitri/sdk-dapp/constants';

/**
 * For documentation, check out {@link https://docs.dharitri.org/wallet/webhooks#send-transaction-hook send transaciton hook}
 */
export const getTransactionUrl = (walletAddress: string) => {
  const walletBaseUrl = `${walletAddress}/${WALLET_PROVIDER_SEND_TRANSACTION_URL}`;

  const receiver =
    'drt1deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaqksct7k'; // add your receiver address here
  const data = 'Hello_world';
  const value = TokenTransfer.rewaFromAmount('0.01').toString();
  const callbackUrl = encodeURIComponent(window.location.origin);
  const gasLimit = '116500'; // Minimum gasLimit for guarded wallets

  const searchParams = {
    receiver,
    value,
    data,
    callbackUrl,
    gasLimit
  };

  const search = new URLSearchParams(searchParams).toString();

  const walletUrl = `${walletBaseUrl}?${search}`;
  return walletUrl;
};
