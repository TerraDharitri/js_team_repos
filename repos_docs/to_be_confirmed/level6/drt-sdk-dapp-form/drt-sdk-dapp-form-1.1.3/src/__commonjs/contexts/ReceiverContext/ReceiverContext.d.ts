import React from 'react';
export interface KnowAddressType {
    address: string;
    username?: string;
    rawUsername?: string;
}
export interface ReceiverContextPropsType {
    receiver: string;
    receiverInputValue: string;
    setReceiverInputValue: (value: string) => void;
    receiverError?: string;
    isReceiverInvalid: boolean;
    knownAddresses: KnowAddressType[] | null;
    scamError?: string;
    fetchingScamAddress: boolean;
    onChangeReceiver: (newReceiver: string, shouldValidate?: boolean) => void;
    onBlurReceiver: (event: Event) => void;
}
interface ReceiverContextProviderPropsType {
    children: any;
}
export declare const ReceiverContext: React.Context<ReceiverContextPropsType>;
export declare function ReceiverContextProvider({ children }: ReceiverContextProviderPropsType): React.JSX.Element;
export declare function useReceiverContext(): ReceiverContextPropsType;
export {};
//# sourceMappingURL=ReceiverContext.d.ts.map