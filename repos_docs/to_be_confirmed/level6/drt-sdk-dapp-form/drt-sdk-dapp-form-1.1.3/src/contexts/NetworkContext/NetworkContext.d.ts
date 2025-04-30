import React, { ReactNode } from 'react';
import { NetworkType } from '@terradharitri/sdk-dapp/types/network.types';
import { DelegationContractDataType } from 'types';
export interface NetworkContextPropsType {
    networkConfig: NetworkType;
    delegationContractData: DelegationContractDataType | null;
}
interface NetworkContextProviderValueType {
    networkConfig: NetworkType;
}
interface NetworkContextProviderPropsType {
    children: ReactNode;
    value: NetworkContextProviderValueType;
}
export declare const NetworkContext: React.Context<NetworkContextPropsType>;
export declare function NetworkContextProvider({ children, value: { networkConfig } }: NetworkContextProviderPropsType): React.JSX.Element;
export declare function useNetworkConfigContext(): NetworkContextPropsType;
export {};
//# sourceMappingURL=NetworkContext.d.ts.map