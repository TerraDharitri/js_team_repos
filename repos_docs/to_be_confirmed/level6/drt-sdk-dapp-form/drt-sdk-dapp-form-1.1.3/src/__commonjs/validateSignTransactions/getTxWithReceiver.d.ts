import { IPlainTransactionObject } from '@terradharitri/sdk-core/out';
export declare function getTxWithReceiver({ address, tx }: {
    address: string;
    tx: IPlainTransactionObject;
}): {
    receiver: string;
    nonce: number;
    value: string;
    sender: string;
    receiverUsername?: string | undefined;
    senderUsername?: string | undefined;
    guardian?: string | undefined;
    gasPrice: number;
    gasLimit: number;
    data?: string | undefined;
    chainID: string;
    version: number;
    options?: number | undefined;
    signature?: string | undefined;
    guardianSignature?: string | undefined;
};
export default getTxWithReceiver;
//# sourceMappingURL=getTxWithReceiver.d.ts.map