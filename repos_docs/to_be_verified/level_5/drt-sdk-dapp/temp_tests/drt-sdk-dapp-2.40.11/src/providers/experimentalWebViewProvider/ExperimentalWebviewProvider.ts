import { SignableMessage, Transaction } from '@terradharitri/sdk-core';
import { providerNotInitializedError } from '@terradharitri/sdk-dapp-utils/out/helpers/providerNotInitializedError';
import { WebviewProvider } from '@terradharitri/sdk-webview-provider/out/WebviewProvider';
import { logoutAction } from 'reduxStore/commonActions';
import { store } from 'reduxStore/store';
import { loginWithNativeAuthToken } from 'services/nativeAuth/helpers/loginWithNativeAuthToken';
import { removeAllTransactionsToSign } from 'services/transactions';
import { IDappProvider } from 'types/dappProvider.types';
import { setExternalProviderAsAccountProvider } from '../accountProvider';

/**
 * This is an experimental provider that uses @terradharitri/webview-provider to handle the communication between .
 * Please do not use this provider or use it with caution.
 * It will be renamed to WebviewProvider once it is stable.
 * */
export class ExperimentalWebviewProvider implements IDappProvider {
  private static _instance: ExperimentalWebviewProvider;
  private readonly _provider: WebviewProvider;

  static getInstance() {
    if (!ExperimentalWebviewProvider._instance) {
      ExperimentalWebviewProvider._instance = new ExperimentalWebviewProvider();
    }
    return ExperimentalWebviewProvider._instance;
  }

  constructor() {
    this._provider = WebviewProvider.getInstance({
      resetStateCallback: () => store.dispatch(logoutAction())
    });
  }

  init = async () => {
    return await this._provider.init();
  };

  login = async () => {
    return await this._provider.login();
  };

  logout = async () => {
    store.dispatch(logoutAction());
    return await this._provider.logout();
  };

  relogin = async () => {
    const accessToken = await this._provider.relogin();

    if (!accessToken) {
      console.error('Unable to re-login. Missing accessToken.');
      return null;
    }

    loginWithNativeAuthToken(accessToken);
    setExternalProviderAsAccountProvider();
    return accessToken;
  };

  signTransactions = async (
    transactionsToSign: Transaction[]
  ): Promise<Transaction[] | null> => {
    const response = await this._provider.signTransactions(transactionsToSign);

    if (!response) {
      removeAllTransactionsToSign();
      this._provider.cancelAction();
      return null;
    }

    return response;
  };

  signTransaction = async (transaction: Transaction) => {
    return await this._provider.signTransaction(transaction);
  };

  signMessage = async (
    message: SignableMessage
  ): Promise<SignableMessage | null> => {
    return await this._provider.signMessage(message);
  };

  cancelAction = async () => {
    return await this._provider.cancelAction();
  };

  isInitialized = () => {
    return this._provider.isInitialized();
  };

  isConnected = async () => {
    return await this._provider.isConnected();
  };

  sendCustomRequest = async (payload: {
    request: { method: string; params: any };
  }) => {
    this._provider.sendPostMessage({
      type: payload.request.method as any,
      payload: payload.request.params
    });
  };

  getAddress = providerNotInitializedError('getAddress');
}
