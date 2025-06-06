import { Account } from "../account";
import { Address } from "../address";
import { Compatibility } from "../compatibility";
import { DCDTNFT_TRANSFER_FUNCTION_NAME, DCDT_TRANSFER_FUNCTION_NAME, MULTI_DCDTNFT_TRANSFER_FUNCTION_NAME } from "../constants";
import { IAddress, IChainID, IGasLimit, IGasPrice, INonce, ITokenTransfer, ITransactionValue } from "../interface";
import { Transaction } from "../transaction";
import { ContractFunction } from "./function";
import { InteractionChecker } from "./interactionChecker";
import { CallArguments } from "./interface";
import { Query } from "./query";
import { AddressValue, BigUIntValue, BytesValue, EndpointDefinition, TypedValue, U64Value, U8Value } from "./typesystem";

/**
 * Internal interface: the smart contract, as seen from the perspective of an {@link Interaction}.
 */
interface ISmartContractWithinInteraction {
    call({ func, args, value, gasLimit, receiver }: CallArguments): Transaction;
    getAddress(): IAddress;
    getEndpoint(name: ContractFunction): EndpointDefinition;
}

/**
 * Interactions can be seen as mutable transaction & query builders.
 * 
 * Aside from building transactions and queries, the interactors are also responsible for interpreting
 * the execution outcome for the objects they've built.
 */
export class Interaction {
    private readonly contract: ISmartContractWithinInteraction;
    private readonly function: ContractFunction;
    private readonly args: TypedValue[];

    private nonce: INonce = 0;
    private value: ITransactionValue = "0";
    private gasLimit: IGasLimit = 0;
    private gasPrice: IGasPrice | undefined = undefined;
    private chainID: IChainID = "";
    private querent: IAddress = new Address();
    private explicitReceiver?: IAddress;
    private sender: IAddress = new Address();

    private isWithSingleDCDTTransfer: boolean = false;
    private isWithSingleDCDTNFTTransfer: boolean = false;
    private isWithMultiDCDTNFTTransfer: boolean = false;
    private tokenTransfers: TokenTransfersWithinInteraction;

    constructor(
        contract: ISmartContractWithinInteraction,
        func: ContractFunction,
        args: TypedValue[]
    ) {
        this.contract = contract;
        this.function = func;
        this.args = args;
        this.tokenTransfers = new TokenTransfersWithinInteraction([], this);
    }

    getContractAddress(): IAddress {
        return this.contract.getAddress();
    }

    getFunction(): ContractFunction {
        return this.function;
    }

    getEndpoint(): EndpointDefinition {
        return this.contract.getEndpoint(this.function);
    }

    getArguments(): TypedValue[] {
        return this.args;
    }

    getValue(): ITransactionValue {
        return this.value;
    }

    getTokenTransfers(): ITokenTransfer[] {
        return this.tokenTransfers.getTransfers();
    }

    getGasLimit(): IGasLimit {
        return this.gasLimit;
    }

    getExplicitReceiver(): IAddress | undefined {
        return this.explicitReceiver;
    }

    buildTransaction(): Transaction {
        Compatibility.guardAddressIsSetAndNonZero(this.sender, "'sender' of interaction", "use interaction.withSender()");

        let receiver = this.explicitReceiver || this.contract.getAddress();
        let func: ContractFunction = this.function;
        let args = this.args;

        if (this.isWithSingleDCDTTransfer) {
            func = new ContractFunction(DCDT_TRANSFER_FUNCTION_NAME);
            args = this.tokenTransfers.buildArgsForSingleDCDTTransfer();
        } else if (this.isWithSingleDCDTNFTTransfer) {
            // For NFT, SFT and MetaDCDT, transaction.sender == transaction.receiver.
            receiver = this.sender;
            func = new ContractFunction(DCDTNFT_TRANSFER_FUNCTION_NAME);
            args = this.tokenTransfers.buildArgsForSingleDCDTNFTTransfer();
        } else if (this.isWithMultiDCDTNFTTransfer) {
            // For NFT, SFT and MetaDCDT, transaction.sender == transaction.receiver.
            receiver = this.sender;
            func = new ContractFunction(MULTI_DCDTNFT_TRANSFER_FUNCTION_NAME);
            args = this.tokenTransfers.buildArgsForMultiDCDTNFTTransfer();
        }

        let transaction = this.contract.call({
            func: func,
            // GasLimit will be set using "withGasLimit()".
            gasLimit: this.gasLimit,
            gasPrice: this.gasPrice,
            args: args,
            // Value will be set using "withValue()".
            value: this.value,
            receiver: receiver,
            chainID: this.chainID,
            caller: this.sender
        });

        transaction.setNonce(this.nonce);

        return transaction;
    }

    buildQuery(): Query {
        return new Query({
            address: this.contract.getAddress(),
            func: this.function,
            args: this.args,
            // Value will be set using "withValue()".
            value: this.value,
            caller: this.querent
        });
    }

    withValue(value: ITransactionValue): Interaction {
        this.value = value;
        return this;
    }

    withSingleDCDTTransfer(transfer: ITokenTransfer): Interaction {
        this.isWithSingleDCDTTransfer = true;
        this.tokenTransfers = new TokenTransfersWithinInteraction([transfer], this);
        return this;
    }

    withSingleDCDTNFTTransfer(transfer: ITokenTransfer): Interaction;
    /**
     * @deprecated do not pass the "sender" parameter. Make sure to call "withSender()", instead.
     */
    withSingleDCDTNFTTransfer(transfer: ITokenTransfer, sender?: IAddress): Interaction;
    withSingleDCDTNFTTransfer(transfer: ITokenTransfer, sender?: IAddress): Interaction {
        this.isWithSingleDCDTNFTTransfer = true;
        this.tokenTransfers = new TokenTransfersWithinInteraction([transfer], this);

        if (sender) {
            this.sender = sender;
        }

        return this;
    }

    withMultiDCDTNFTTransfer(transfers: ITokenTransfer[]): Interaction;
    /**
     * @deprecated do not pass the "sender" parameter. Make sure to call "withSender()", instead.
     */
    withMultiDCDTNFTTransfer(transfers: ITokenTransfer[], sender?: IAddress): Interaction;
    withMultiDCDTNFTTransfer(transfers: ITokenTransfer[], sender?: IAddress): Interaction {
        this.isWithMultiDCDTNFTTransfer = true;
        this.tokenTransfers = new TokenTransfersWithinInteraction(transfers, this);

        if (sender) {
            this.sender = sender;
        }

        return this;
    }

    withGasLimit(gasLimit: IGasLimit): Interaction {
        this.gasLimit = gasLimit;
        return this;
    }

    withGasPrice(gasPrice: IGasPrice): Interaction {
        this.gasPrice = gasPrice;
        return this;
    }

    withNonce(nonce: INonce): Interaction {
        this.nonce = nonce;
        return this;
    }

    useThenIncrementNonceOf(account: Account): Interaction {
        return this.withNonce(account.getNonceThenIncrement());
    }

    withChainID(chainID: IChainID): Interaction {
        this.chainID = chainID;
        return this;
    }

    withSender(sender: IAddress): Interaction {
        this.sender = sender;
        return this;
    }

    /**
     * Sets the "caller" field on contract queries.
     */
    withQuerent(querent: IAddress): Interaction {
        this.querent = querent;
        return this;
    }

    withExplicitReceiver(receiver: IAddress): Interaction {
        this.explicitReceiver = receiver;
        return this;
    }

    /**
     * To perform custom checking, extend {@link Interaction} and override this method.
     */
    check(): Interaction {
        new InteractionChecker().checkInteraction(this, this.getEndpoint());
        return this;
    }
}

class TokenTransfersWithinInteraction {
    private readonly transfers: ITokenTransfer[];
    private readonly interaction: Interaction;

    constructor(transfers: ITokenTransfer[], interaction: Interaction) {
        this.transfers = transfers;
        this.interaction = interaction;
    }

    getTransfers() {
        return this.transfers;
    }

    buildArgsForSingleDCDTTransfer(): TypedValue[] {
        let singleTransfer = this.transfers[0];

        return [
            this.getTypedTokenIdentifier(singleTransfer),
            this.getTypedTokenQuantity(singleTransfer),
            this.getTypedInteractionFunction(),
            ...this.getInteractionArguments()
        ];
    }

    buildArgsForSingleDCDTNFTTransfer(): TypedValue[] {
        let singleTransfer = this.transfers[0];

        return [
            this.getTypedTokenIdentifier(singleTransfer),
            this.getTypedTokenNonce(singleTransfer),
            this.getTypedTokenQuantity(singleTransfer),
            this.getTypedTokensReceiver(),
            this.getTypedInteractionFunction(),
            ...this.getInteractionArguments()
        ];
    }

    buildArgsForMultiDCDTNFTTransfer(): TypedValue[] {
        let result: TypedValue[] = [];

        result.push(this.getTypedTokensReceiver());
        result.push(this.getTypedNumberOfTransfers());

        for (const transfer of this.transfers) {
            result.push(this.getTypedTokenIdentifier(transfer));
            result.push(this.getTypedTokenNonce(transfer));
            result.push(this.getTypedTokenQuantity(transfer));
        }

        result.push(this.getTypedInteractionFunction());
        result.push(...this.getInteractionArguments());

        return result;
    }

    private getTypedNumberOfTransfers(): TypedValue {
        return new U8Value(this.transfers.length);
    }

    private getTypedTokenIdentifier(transfer: ITokenTransfer): TypedValue {
        // Important: for NFTs, this has to be the "collection" name, actually.
        // We will reconsider adding the field "collection" on "Token" upon merging "ApiProvider" and "ProxyProvider".
        return BytesValue.fromUTF8(transfer.tokenIdentifier);
    }

    private getTypedTokenNonce(transfer: ITokenTransfer): TypedValue {
        // The token nonce (creation nonce)
        return new U64Value(transfer.nonce);
    }

    private getTypedTokenQuantity(transfer: ITokenTransfer): TypedValue {
        // For NFTs, this will be 1.
        return new BigUIntValue(transfer.amountAsBigInteger);
    }

    private getTypedTokensReceiver(): TypedValue {
        // The actual receiver of the token(s): the contract
        return new AddressValue(this.interaction.getContractAddress());
    }

    private getTypedInteractionFunction(): TypedValue {
        return BytesValue.fromUTF8(this.interaction.getFunction().valueOf())
    }

    private getInteractionArguments(): TypedValue[] {
        return this.interaction.getArguments();
    }
}
