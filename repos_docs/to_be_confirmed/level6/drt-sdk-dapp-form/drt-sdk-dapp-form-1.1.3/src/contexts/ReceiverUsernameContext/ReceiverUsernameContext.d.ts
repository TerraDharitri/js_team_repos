import React, { ReactNode } from 'react';
import { UsernameAccountsType } from './hooks/useFetchUsernameAddress';
export interface ReceiverUsernameContextPropsType {
    receiverUsername?: string;
    receiverUsernameError?: string;
    isReceiverUsernameInvalid: boolean;
    showUsernameError: boolean;
    searchQueryIsAddress: boolean;
    isUsernameLoading: boolean;
    isUsernameDebouncing: boolean;
    usernameIsAmongKnown: boolean;
    usernameAccounts: UsernameAccountsType;
}
interface ReceiverUsernameContextProviderPropsType {
    children: ReactNode;
}
export declare const ReceiverUsernameContext: React.Context<ReceiverUsernameContextPropsType>;
export declare function ReceiverUsernameContextProvider({ children }: ReceiverUsernameContextProviderPropsType): React.JSX.Element;
export declare function useReceiverUsernameContext(): ReceiverUsernameContextPropsType;
export {};
//# sourceMappingURL=ReceiverUsernameContext.d.ts.map