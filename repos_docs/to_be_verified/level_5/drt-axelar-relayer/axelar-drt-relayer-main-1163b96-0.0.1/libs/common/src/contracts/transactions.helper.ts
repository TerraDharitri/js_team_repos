import { Injectable, Logger } from '@nestjs/common';
import { ProxyNetworkProvider } from '@terradharitri/sdk-network-providers/out';
import { Transaction, TransactionHash, TransactionWatcher } from '@terradharitri/sdk-core/out';
import { UserAddress } from '@terradharitri/sdk-wallet/out/userAddress';
import { UserSigner } from '@terradharitri/sdk-wallet/out';
import { ApiConfigService } from '@drt-monorepo/common/config';
import { GasError } from '@drt-monorepo/common/contracts/entities/gas.error';
import { SlackApi } from '@drt-monorepo/common/api/slack.api';

@Injectable()
export class TransactionsHelper {
  private readonly logger: Logger;

  private readonly chainId: string;

  constructor(
    private readonly proxy: ProxyNetworkProvider,
    private readonly transactionWatcher: TransactionWatcher,
    private readonly slackApi: SlackApi,
    apiConfigService: ApiConfigService,
  ) {
    this.logger = new Logger(TransactionsHelper.name);

    this.chainId = apiConfigService.getChainId();
  }

  async getAccountNonce(address: UserAddress): Promise<number> {
    const accountOnNetwork = await this.proxy.getAccount(address);

    return accountOnNetwork.nonce;
  }

  async getTransactionGas(transaction: Transaction, retry: number): Promise<number> {
    const result = await this.proxy.doPostGeneric('transaction/cost', transaction.toSendable());

    if (!result?.txGasUnits) {
      throw new GasError(`Could not get gas for transaction ${transaction.getHash()} ${JSON.stringify(result)}`);
    }

    return Math.ceil((result.txGasUnits * (11 + retry * 2)) / 10); // add 10% extra gas initially, and more gas with each retry
  }

  async signAndSendTransactionAndGetNonce(transaction: Transaction, signer: UserSigner) {
    let accountNonce = null;
    try {
      accountNonce = await this.getAccountNonce(signer.getAddress());
    } catch (e) {
      this.logger.error(`Can not get nonce for transaction...`, e);
      await this.slackApi.sendError('Wallet nonce error', `Can not get nonce for transaction...`);

      throw e;
    }

    transaction.setNonce(accountNonce);

    return this.signAndSendTransaction(transaction, signer);
  }

  async signAndSendTransaction(transaction: Transaction, signer: UserSigner) {
    try {
      transaction.setSender(signer.getAddress());
      transaction.setChainID(this.chainId);

      const signature = await signer.sign(transaction.serializeForSigning());
      transaction.applySignature(signature);

      const hash = await this.proxy.sendTransaction(transaction);

      this.logger.log(`Sent transaction to proxy: ${transaction.getHash()}`);

      return hash;
    } catch (e) {
      this.logger.error(`Can not sign or send transaction to proxy...`, e);
      await this.slackApi.sendError('Transaction error', 'Can not sign or send transaction to proxy');

      throw e;
    }
  }

  async sendTransactions(transactions: Transaction[]) {
    if (!transactions.length) {
      return [];
    }

    try {
      const hashes = await this.proxy.sendTransactions(transactions);

      this.logger.log(`Sent ${transactions.length} transactions to proxy: ${hashes}`);

      return hashes;
    } catch (e) {
      this.logger.error(`Can not send transactions to proxy...`, e);
      await this.slackApi.sendError('Transactions error', 'Can not send transactions to proxy...');

      return null;
    }
  }

  async awaitSuccess(txHash: string) {
    try {
      const result = await this.transactionWatcher.awaitCompleted({ getHash: () => new TransactionHash(txHash) });

      return !result.status.isFailed() && !result.status.isInvalid();
    } catch (e) {
      this.logger.error(`Can not await transaction success`, e);
      await this.slackApi.sendError('Transaction await success error', `Can not await transaction success ${txHash}`);

      return false;
    }
  }


}
