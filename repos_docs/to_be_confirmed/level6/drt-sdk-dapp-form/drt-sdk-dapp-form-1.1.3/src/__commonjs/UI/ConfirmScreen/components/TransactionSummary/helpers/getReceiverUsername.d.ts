import { KnowAddressType } from 'contexts';
export interface GetReceiverUsernameType {
    knownAddresses: KnowAddressType[] | null;
    receiverAddress: string;
    existingReceiverUsername?: string;
}
export declare const getReceiverUsername: ({ receiverAddress, knownAddresses, existingReceiverUsername }: GetReceiverUsernameType) => string | undefined;
//# sourceMappingURL=getReceiverUsername.d.ts.map