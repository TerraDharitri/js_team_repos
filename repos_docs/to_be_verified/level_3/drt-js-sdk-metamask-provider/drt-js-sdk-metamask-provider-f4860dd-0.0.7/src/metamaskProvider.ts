import { MetaMaskInpageProvider } from '@metamask/providers';
import { SignableMessage, Transaction } from '@terradharitri/sdk-core/out';
import { Signature } from '@terradharitri/sdk-core/out/signature';
import { defaultSnapOrigin } from './config';
import { safeWindow } from './constants';
import {
  ErrAccountNotConnected,
  ErrCannotSignSingleTransaction,
  ErrTransactionCancelled
} from './errors';
import { connectSnap, getSnap } from './snap';

export interface IMetamaskWalletAccount {
  address: string;
  name?: string;
  signature?: string;
}

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider & {
      setProvider?: (provider: MetaMaskInpageProvider) => void;
      detected?: MetaMaskInpageProvider[];
      providers?: MetaMaskInpageProvider[];
    };
    isMetamask: boolean;
  }
}

export class MetamaskProvider {
  public account: IMetamaskWalletAccount = { address: '' };
  private initialized = false;
  private static _instance: MetamaskProvider = new MetamaskProvider();

  public static isMetamaskInstalled(): boolean {
    return Boolean(
      safeWindow && safeWindow.ethereum && safeWindow.ethereum.isMetaMask
    );
  }

  private constructor() {
    if (MetamaskProvider._instance) {
      throw new Error(
        'Error: Instantiation failed: Use MetamaskProvider.getInstance() instead of new.'
      );
    }
    MetamaskProvider._instance = this;
  }

  public static getInstance(): MetamaskProvider {
    return MetamaskProvider._instance;
  }

  public setAddress(address: string): MetamaskProvider {
    this.account.address = address;
    return MetamaskProvider._instance;
  }

  async init(): Promise<boolean> {
    const hasMetamask = MetamaskProvider.isMetamaskInstalled();

    if (hasMetamask && !this.initialized) {
      try {
        await connectSnap();
        const installedSnap = await getSnap();
        this.initialized = installedSnap !== undefined;
      } catch (error) {
        this.initialized = false;
      }
    }
    return this.initialized;
  }

  async login({
    token
  }: {
    callbackUrl?: string;
    token?: string;
  } = {}): Promise<string> {
    if (!this.initialized) {
      throw new Error(
        'Metamask provider is not initialised, call init() first' + token
      );
    }
    try {
      const address = (await safeWindow?.ethereum?.request({
        method: 'wallet_invokeSnap',
        params: {
          snapId: defaultSnapOrigin,
          request: {
            method: 'drt_getAddress',
            params: undefined
          }
        }
      })) as string;

      this.account.address = address;

      if (token) {
        const tokenSigned = (await safeWindow?.ethereum?.request({
          method: 'wallet_invokeSnap',
          params: {
            snapId: defaultSnapOrigin,
            request: {
              method: 'drt_signAuthToken',
              params: { token: token }
            }
          }
        })) as string;

        this.account.signature = tokenSigned;
      }
    } catch (error: any) {
      throw error;
    }
    return this.account.address;
  }

  async logout(): Promise<boolean> {
    if (!this.initialized) {
      throw new Error(
        'Metamask provider is not initialised, call init() first'
      );
    }

    this.account = { address: '' };

    return true;
  }

  async getAddress(): Promise<string> {
    if (!this.initialized) {
      throw new Error(
        'Metamask provider is not initialised, call init() first'
      );
    }
    return this.account ? this.account.address : '';
  }

  isInitialized(): boolean {
    return this.initialized;
  }

  isConnected(): boolean {
    return Boolean(this.account.address);
  }

  async signTransaction(transaction: Transaction): Promise<Transaction> {
    const signedTransactions = await this.signTransactions([transaction]);

    if (signedTransactions.length != 1) {
      throw new ErrCannotSignSingleTransaction();
    }

    return signedTransactions[0];
  }

  async signTransactions(transactions: Transaction[]): Promise<Transaction[]> {
    try {
      const transactionsPlain = transactions.map((transaction) =>
        transaction.toPlainObject()
      );

      const metamaskReponse = (await safeWindow?.ethereum?.request({
        method: 'wallet_invokeSnap',
        params: {
          snapId: defaultSnapOrigin,
          request: {
            method: 'drt_signTransactions',
            params: { transactions: transactionsPlain }
          }
        }
      })) as string[];

      const transactionsResponse = metamaskReponse.map((transaction: string) =>
        Transaction.fromPlainObject(JSON.parse(transaction))
      );

      return transactionsResponse;
    } catch (error) {
      throw new ErrTransactionCancelled();
    }
  }

  async signMessage(message: SignableMessage): Promise<SignableMessage> {
    try {
      this.ensureConnected();

      const metamaskReponse = (await safeWindow?.ethereum?.request({
        method: 'wallet_invokeSnap',
        params: {
          snapId: defaultSnapOrigin,
          request: {
            method: 'drt_signMessage',
            params: { message: message.message.toString('ascii') }
          }
        }
      })) as string;

      message.applySignature(new Signature(metamaskReponse));

      return message;
    } catch (error) {
      throw error;
    }
  }

  cancelAction() {
    return false;
  }

  private ensureConnected() {
    const hasMetamask = MetamaskProvider.isMetamaskInstalled();
    if (!this.account.address || !hasMetamask) {
      throw new ErrAccountNotConnected();
    }
  }
}
