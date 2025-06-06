import { Message, Transaction } from '@terradharitri/sdk-core';
import { IDAppProviderAccount } from '@terradharitri/sdk-dapp-utils/out';
import { ExtensionProvider } from '@terradharitri/sdk-extension-provider';
import { HWProvider } from '@terradharitri/sdk-hw-provider';
import { IHWWalletApp } from '@terradharitri/sdk-hw-provider/out/interface';
import { MetamaskProvider } from '@terradharitri/sdk-metamask-provider/out/metamaskProvider';
import { OperaProvider } from '@terradharitri/sdk-opera-provider';
import { PasskeyProvider } from '@terradharitri/sdk-passkey-provider/out';
import { WalletProvider } from '@terradharitri/sdk-web-wallet-provider';
import { LEDGER_CONTRACT_DATA_ENABLED_VALUE } from 'constants/index';
import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';
import { IframeProvider } from 'lib/sdkWebWalletIframeProvider';
import { IDappProvider } from 'types';
import { LoginMethodsEnum } from 'types/enums.types';
import {
  WalletConnectV2Provider,
  EngineTypes
} from 'utils/walletconnect/__sdkWalletconnectProvider';

export const DAPP_INIT_ROUTE = '/dapp/init';

export const getProviderType = <TProvider extends object>(
  provider?: TProvider | null
): LoginMethodsEnum => {
  switch (provider?.constructor) {
    case WalletProvider:
      return LoginMethodsEnum.wallet;
    case WalletConnectV2Provider:
      return LoginMethodsEnum.walletconnectv2;
    case HWProvider:
      return LoginMethodsEnum.ledger;
    case ExtensionProvider:
      return LoginMethodsEnum.extension;
    case PasskeyProvider:
      return LoginMethodsEnum.passkey;
    case MetamaskProvider:
      return LoginMethodsEnum.metamask;
    case OperaProvider:
      return LoginMethodsEnum.opera;
    case CrossWindowProvider:
      return LoginMethodsEnum.crossWindow;
    case IframeProvider:
      return LoginMethodsEnum.iframe;
    case EmptyProvider:
      return LoginMethodsEnum.none;
    default:
      return LoginMethodsEnum.extra;
  }
};

export const newWalletProvider = (walletAddress: string) =>
  new WalletProvider(`${walletAddress}${DAPP_INIT_ROUTE}`);

export const getLedgerConfiguration = async (
  initializedHwWalletP: HWProvider
) => {
  if (!initializedHwWalletP.isInitialized()) {
    throw new Error('Unable to get version. Provider not initialized');
  }
  const hwApp: IHWWalletApp = (initializedHwWalletP as any).hwApp;
  const { contractData, version } = await hwApp.getAppConfiguration();
  const dataEnabled = contractData === LEDGER_CONTRACT_DATA_ENABLED_VALUE;
  return { version, dataEnabled };
};

const notInitializedError = (caller: string) => {
  return `Unable to perform ${caller}, Provider not initialized`;
};

export class EmptyProvider implements IDappProvider {
  init(): Promise<boolean> {
    return Promise.resolve(false);
  }

  getAccount(): IDAppProviderAccount | null {
    throw new Error(notInitializedError('getAccount'));
  }

  setAccount(account: IDAppProviderAccount): void {
    throw new Error(notInitializedError(`setAccount: ${account}`));
  }

  login<TOptions = { callbackUrl?: string } | undefined, TResponse = string>(
    options?: TOptions
  ): Promise<TResponse> {
    throw new Error(notInitializedError(`login with options: ${options}`));
  }

  logout<TOptions = { callbackUrl?: string }, TResponse = boolean>(
    options?: TOptions
  ): Promise<TResponse> {
    throw new Error(notInitializedError(`logout with options: ${options}`));
  }

  getAddress(): Promise<string> {
    throw new Error(notInitializedError('getAddress'));
  }

  isInitialized(): boolean {
    return false;
  }

  isConnected(): boolean {
    return false;
  }

  sendTransaction?<
    TOptions = { callbackUrl?: string },
    TResponse = Transaction
  >(transaction: Transaction, options?: TOptions): Promise<TResponse> {
    throw new Error(
      notInitializedError(
        `sendTransaction with transactions: ${transaction} options: ${options}`
      )
    );
  }

  signTransaction<TOptions = { callbackUrl?: string }, TResponse = Transaction>(
    transaction: Transaction,
    options?: TOptions
  ): Promise<TResponse> {
    throw new Error(
      notInitializedError(
        `signTransaction with transactions: ${transaction} options: ${options}`
      )
    );
  }

  signTransactions<TOptions = { callbackUrl?: string }, TResponse = []>(
    transactions: [],
    options?: TOptions
  ): Promise<TResponse> {
    throw new Error(
      notInitializedError(
        `signTransactions with transactions: ${transactions} options: ${options}`
      )
    );
  }

  signMessage<T extends Message, TOptions = { callbackUrl?: string }>(
    message: T,
    options: TOptions
  ): Promise<T> {
    throw new Error(
      notInitializedError(
        `signTransactions with ${message} and options ${options}`
      )
    );
  }

  sendCustomMessage?({
    method,
    params
  }: {
    method: string;
    params: any;
  }): Promise<any> {
    throw new Error(
      notInitializedError(
        `sendCustomMessage with method: ${method} params: ${params}`
      )
    );
  }

  sendCustomRequest?(options?: {
    request: EngineTypes.RequestParams['request'];
  }): Promise<any> {
    throw new Error(
      notInitializedError(`sendSessionEvent with options: ${options}`)
    );
  }

  ping?(): Promise<boolean> {
    return Promise.resolve(false);
  }
}

export const emptyProvider = new EmptyProvider();
