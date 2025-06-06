import type { Transaction, SignableMessage } from "@terradharitri/sdk-core";
import { Nullable } from "../types/nullable";

export interface IDAppProviderOptions {
  callbackUrl?: string;
  [key: string]: any;
}

export interface IDAppProviderBase {
  login?(options?: IDAppProviderOptions): Promise<string | boolean>;
  logout(options?: IDAppProviderOptions): Promise<boolean>;
  signTransaction(
    transaction: Transaction,
    options?: IDAppProviderOptions
  ): Promise<Nullable<Transaction | undefined>>;
  signTransactions(
    transactions: Transaction[],
    options?: IDAppProviderOptions
  ): Promise<Nullable<Transaction[]>>;
  signMessage(
    message: SignableMessage,
    options?: IDAppProviderOptions
  ): Promise<Nullable<SignableMessage>>;
}
