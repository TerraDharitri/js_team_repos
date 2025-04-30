import { Transaction } from '@terradharitri/sdk-core';
interface PrepareTransactionType {
    balance: string;
    amount: string;
    receiver: string;
    sender: string;
    senderUsername?: string;
    receiverUsername?: string;
    data: string;
    gasPrice: string;
    gasLimit: string;
    nonce: number;
    chainId: string;
}
export declare function prepareTransaction({ amount, data, nonce, receiver, receiverUsername, sender, senderUsername, gasPrice, gasLimit, chainId }: PrepareTransactionType): Transaction;
export {};
//# sourceMappingURL=prepareTransaction.d.ts.map