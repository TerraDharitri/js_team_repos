import React, { ReactNode } from 'react';
import { AccountContextPropsType } from './AccountContext';
import { AmountContextPropsType } from './AmountContext';
import { DataContextPropsType } from './DataFieldContext';
import { FormContextPropsType } from './FormContext';
import { GasContextPropsType } from './GasContext';
import { ReceiverContextPropsType } from './ReceiverContext';
import { ReceiverUsernameContextPropsType } from './ReceiverUsernameContext';
import { TokensContextPropsType } from './TokensContext';
export interface SendFormContextPropsType {
    amountInfo: AmountContextPropsType;
    accountInfo: AccountContextPropsType;
    formInfo: FormContextPropsType;
    tokensInfo: TokensContextPropsType;
    gasInfo: GasContextPropsType;
    dataFieldInfo: DataContextPropsType;
    receiverInfo: ReceiverContextPropsType;
    receiverUsernameInfo: ReceiverUsernameContextPropsType;
}
interface SendFormContextProviderPropsType {
    children: ReactNode;
}
export declare const SendFormContext: React.Context<SendFormContextPropsType>;
export declare function SendFormContextProvider({ children }: SendFormContextProviderPropsType): React.JSX.Element;
export declare function useSendFormContext(): SendFormContextPropsType;
export {};
//# sourceMappingURL=SendFormProviderContext.d.ts.map