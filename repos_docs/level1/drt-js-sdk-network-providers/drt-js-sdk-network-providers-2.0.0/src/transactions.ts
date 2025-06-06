import { TransactionStatus } from "./transactionStatus";
import { ContractResults } from "./contractResults";
import { Address } from "./primitives";
import { IAddress } from "./interface";
import { TransactionLogs } from "./transactionLogs";
import { TransactionReceipt } from "./transactionReceipt";

export class TransactionOnNetwork {
    isCompleted?: boolean;
    hash: string = "";
    type: string = "";
    nonce: number = 0;
    round: number = 0;
    epoch: number = 0;
    value: string = "";
    receiver: IAddress = new Address("");
    sender: IAddress = new Address("");
    gasLimit: number = 0;
    gasPrice: number = 0;
    data: Buffer = Buffer.from([]);
    signature: string = "";
    status: TransactionStatus = TransactionStatus.createUnknown();
    timestamp: number = 0;

    blockNonce: number = 0;
    hyperblockNonce: number = 0;
    hyperblockHash: string = "";

    receipt: TransactionReceipt = new TransactionReceipt();
    contractResults: ContractResults = new ContractResults([]);
    logs: TransactionLogs = new TransactionLogs();

    constructor(init?: Partial<TransactionOnNetwork>) {
        Object.assign(this, init);
    }

    static fromProxyHttpResponse(txHash: string, response: any, processStatus?: TransactionStatus | undefined): TransactionOnNetwork {
        let result = TransactionOnNetwork.fromHttpResponse(txHash, response);
        result.contractResults = ContractResults.fromProxyHttpResponse(response.smartContractResults || []);

        if (processStatus) {
            result.status = processStatus;
            result.isCompleted = result.status.isSuccessful() || result.status.isFailed()
        }

        return result;
    }

    static fromApiHttpResponse(txHash: string, response: any): TransactionOnNetwork {
        let result = TransactionOnNetwork.fromHttpResponse(txHash, response);
        result.contractResults = ContractResults.fromApiHttpResponse(response.results || []);
        result.isCompleted = !result.status.isPending();
        return result;
    }

    private static fromHttpResponse(txHash: string, response: any): TransactionOnNetwork {
        let result = new TransactionOnNetwork();

        result.hash = txHash;
        result.type = response.type || "";
        result.nonce = response.nonce || 0;
        result.round = response.round;
        result.epoch = response.epoch || 0;
        result.value = (response.value || 0).toString();
        result.sender = new Address(response.sender);
        result.receiver = new Address(response.receiver);
        result.gasPrice = response.gasPrice || 0;
        result.gasLimit = response.gasLimit || 0;
        result.data = Buffer.from(response.data || "", "base64");
        result.status = new TransactionStatus(response.status);
        result.timestamp = response.timestamp || 0;

        result.blockNonce = response.blockNonce || 0;
        result.hyperblockNonce = response.hyperblockNonce || 0;
        result.hyperblockHash = response.hyperblockHash || "";

        result.receipt = TransactionReceipt.fromHttpResponse(response.receipt || {});
        result.logs = TransactionLogs.fromHttpResponse(response.logs || {});

        return result;
    }

    getDateTime(): Date {
        return new Date(this.timestamp * 1000);
    }
}
