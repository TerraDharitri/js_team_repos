import { IAddress, ITransactionPayload } from "../interface";
import { ARGUMENTS_SEPARATOR } from "../constants";
import { TransactionPayload } from "../transactionPayload";
import { TransactionNext } from "../transaction";

interface Config {
    chainID: string;
    minGasLimit: bigint;
    gasLimitPerByte: bigint;
}

export class TransactionNextBuilder {
    private config: Config;
    private sender: IAddress;
    private receiver: IAddress;
    private dataParts: string[];
    private providedGasLimit: bigint;
    private addDataMovementGas: boolean;
    private amount?: bigint;

    constructor(options: {
        config: Config;
        sender: IAddress;
        receiver: IAddress;
        dataParts: string[];
        gasLimit: bigint;
        addDataMovementGas: boolean;
        amount?: bigint;
    }) {
        this.config = options.config;
        this.sender = options.sender;
        this.receiver = options.receiver;
        this.dataParts = options.dataParts;
        this.providedGasLimit = options.gasLimit;
        this.addDataMovementGas = options.addDataMovementGas;
        this.amount = options.amount;
    }

    private computeGasLimit(payload: ITransactionPayload): bigint {
        if (!this.addDataMovementGas) {
            return this.providedGasLimit;
        }

        const dataMovementGas = this.config.minGasLimit + this.config.gasLimitPerByte * BigInt(payload.length());
        const gasLimit = dataMovementGas + this.providedGasLimit;
        return gasLimit;
    }

    private buildTransactionPayload(): TransactionPayload {
        const data = this.dataParts.join(ARGUMENTS_SEPARATOR);
        return new TransactionPayload(data);
    }

    build(): TransactionNext {
        const data = this.buildTransactionPayload();
        const gasLimit = this.computeGasLimit(data);

        return new TransactionNext({
            sender: this.sender.bech32(),
            receiver: this.receiver.bech32(),
            gasLimit: gasLimit,
            value: this.amount || 0n,
            data: data.valueOf(),
            chainID: this.config.chainID,
        });
    }
}
