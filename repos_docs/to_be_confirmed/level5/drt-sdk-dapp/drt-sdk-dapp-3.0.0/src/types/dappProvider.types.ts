import { Transaction } from '@terradharitri/sdk-core';
import type { IDAppProviderBase } from '@terradharitri/sdk-dapp-utils/out/models/dappProviderBase';
import { EngineTypes } from 'utils/walletconnect/__sdkWalletconnectProvider';
import { Nullable } from './transactions.types';

export interface DappOptions {
  callbackUrl?: string;
}

export interface IDappProvider extends IDAppProviderBase {
  init?(): Promise<boolean>;
  getAddress(): Promise<string>;
  isInitialized(): boolean;
  isConnected(): Promise<boolean>;
  sendTransaction?(
    transaction: Transaction,
    options?: DappOptions
  ): Promise<Transaction | void>;
  sendCustomMessage?({
    method,
    params
  }: {
    method: string;
    params: any;
  }): Promise<any>;
  sendCustomRequest?(options?: {
    request: EngineTypes.RequestParams['request'];
  }): Promise<any>;
  ping?(): Promise<boolean>;
  relogin?: () => Promise<Nullable<string | void>>;
  setShouldShowConsentPopup?: (shouldShow: boolean) => void;
}
