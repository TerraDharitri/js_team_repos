import React, { JSXElementConstructor, ReactNode } from 'react';
import { SendFormContainerPropsType } from 'containers/SendFormContainer';
import { FormNetworkConfigType } from 'types';
import { AccountContextPropsType } from './AccountContext';
import { FormContextBasePropsType } from './FormContext';
import { TokensContextInitializationPropsType } from './TokensContext';
interface AppInfoContextProviderPropsType {
    accountInfo: AccountContextPropsType;
    formInfo: FormContextBasePropsType;
    tokensInfo?: TokensContextInitializationPropsType;
    networkConfig: FormNetworkConfigType;
    children: ReactNode;
    Loader?: JSXElementConstructor<any> | null;
    initGasLimitError?: SendFormContainerPropsType['initGasLimitError'];
}
export declare function AppInfoContextProvider({ accountInfo, formInfo, tokensInfo, networkConfig: formNetworkConfig, children, Loader, initGasLimitError }: AppInfoContextProviderPropsType): React.JSX.Element | null;
export * from './FormContext';
export * from './AccountContext';
export * from './TokensContext';
export * from './ReceiverContext';
export * from './NetworkContext';
export * from './SendFormProviderContext';
//# sourceMappingURL=index.d.ts.map