import { AccountOnNetwork } from "./accounts";
import { ContractQueryResponse } from "./contractQueryResponse";
import { NetworkConfig } from "./networkConfig";
import { NetworkGeneralStatistics } from "./networkGeneralStatistics";
import { NetworkStake } from "./networkStake";
import { NetworkStatus } from "./networkStatus";
import { DefinitionOfFungibleTokenOnNetwork, DefinitionOfTokenCollectionOnNetwork } from "./tokenDefinitions";
import { FungibleTokenOfAccountOnNetwork, NonFungibleTokenOfAccountOnNetwork } from "./tokens";
import { TransactionOnNetwork } from "./transactions";
import { TransactionStatus } from "./transactionStatus";

/**
 * An interface that defines the endpoints of an HTTP API Provider.
 */
export interface INetworkProvider {
    /**
     * Fetches the Network configuration.
     */
    getNetworkConfig(): Promise<NetworkConfig>;

    /**
     * Fetches the Network status.
     */
    getNetworkStatus(): Promise<NetworkStatus>;

    /**
     * Fetches stake statistics.
     */
    getNetworkStakeStatistics(): Promise<NetworkStake>;

    /**
     * Fetches general statistics.
     */
    getNetworkGeneralStatistics(): Promise<NetworkGeneralStatistics>;

    /**
     * Fetches the state of an account.
     */
    getAccount(address: IAddress): Promise<AccountOnNetwork>;

    /**
     * Fetches data about the fungible tokens held by an account.
     */
    getFungibleTokensOfAccount(address: IAddress, pagination?: IPagination): Promise<FungibleTokenOfAccountOnNetwork[]>;

    /**
     * Fetches data about the non-fungible tokens held by account.
     */
    getNonFungibleTokensOfAccount(address: IAddress, pagination?: IPagination): Promise<NonFungibleTokenOfAccountOnNetwork[]>;

    /**
     * Fetches data about a specific fungible token held by an account.
     */
    getFungibleTokenOfAccount(address: IAddress, tokenIdentifier: string): Promise<FungibleTokenOfAccountOnNetwork>;

    /**
     * Fetches data about a specific non-fungible token (instance) held by an account.
     */
    getNonFungibleTokenOfAccount(address: IAddress, collection: string, nonce: number): Promise<NonFungibleTokenOfAccountOnNetwork>;

    /**
     * Fetches the state of a transaction.
     */
    getTransaction(txHash: string, withProcessStatus?: boolean): Promise<TransactionOnNetwork>;

    /**
     * Queries the status of a transaction.
     */
    getTransactionStatus(txHash: string): Promise<TransactionStatus>;

    /**
     * Broadcasts an already-signed transaction.
     */
    sendTransaction(tx: ITransaction | ITransactionNext): Promise<string>;

    /**
     * Broadcasts a list of already-signed transactions.
     */
    sendTransactions(txs: (ITransaction | ITransactionNext)[]): Promise<string[]>;

    /**
     * Simulates the processing of an already-signed transaction.
     * 
     */
    simulateTransaction(tx: ITransaction): Promise<any>;

    /**
     * Queries a Smart Contract - runs a pure function defined by the contract and returns its results.
     */
    queryContract(query: IContractQuery): Promise<ContractQueryResponse>;

    /**
     * Fetches the definition of a fungible token.
     */
    getDefinitionOfFungibleToken(tokenIdentifier: string): Promise<DefinitionOfFungibleTokenOnNetwork>;

    /**
     * Fetches the definition of a SFT (including Meta DCDT) or NFT.
     */
    getDefinitionOfTokenCollection(collection: string): Promise<DefinitionOfTokenCollectionOnNetwork>;

    /**
     * Fetches data about a specific non-fungible token (instance).
     */
    getNonFungibleToken(collection: string, nonce: number): Promise<NonFungibleTokenOfAccountOnNetwork>;

    /**
     * Performs a generic GET action against the provider (useful for new HTTP endpoints).
     */
    doGetGeneric(resourceUrl: string): Promise<any>;

    /**
     * Performs a generic POST action against the provider (useful for new HTTP endpoints).
     */
    doPostGeneric(resourceUrl: string, payload: any): Promise<any>;
}

export interface IContractQuery {
    address: IAddress;
    caller?: IAddress;
    func: { toString(): string; };
    value?: { toString(): string; };
    getEncodedArguments(): string[];
}

export interface IPagination {
    from: number;
    size: number;
}

export interface ITransaction {
    toSendable(): any;
}

export interface IAddress { bech32(): string; }

export interface ITransactionNext {
    sender: string;
    receiver: string;
    gasLimit: bigint;
    chainID: string;
    nonce: bigint;
    value: bigint;
    senderUsername: string;
    receiverUsername: string;
    gasPrice: bigint;
    data: Uint8Array;
    version: number;
    options: number;
    guardian: string;
    signature: Uint8Array;
    guardianSignature: Uint8Array;
    relayer?: string;
    innerTransactions?: ITransactionNext[];
  }
