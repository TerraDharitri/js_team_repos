import React, { ChangeEvent, ReactNode } from 'react';
import { SendFormContainerPropsType } from 'containers/SendFormContainer';
export interface GasContextPropsType {
    gasPrice: string;
    gasLimit: string;
    gasCostLoading: boolean;
    gasCostError?: string | null;
    hasErrors: boolean;
    isGasLimitInvalid: boolean;
    isGasPriceInvalid: boolean;
    gasPriceError?: string;
    gasLimitError?: string;
    defaultGasLimit: string;
    feeLimit: string;
    onChangeGasPrice: (newValue: string | ChangeEvent<any>, shouldValidate?: boolean) => void;
    onChangeGasLimit: (newValue: string | ChangeEvent<any>, shouldValidate?: boolean) => void;
    onBlurGasPrice: () => void;
    onBlurGasLimit: () => void;
    onResetGasPrice: () => void;
    onResetGasLimit: () => void;
}
interface GasContextProviderPropsType {
    children: ReactNode;
    initGasLimitError?: SendFormContainerPropsType['initGasLimitError'];
}
export declare const GasContext: React.Context<GasContextPropsType>;
/**
 * **initGasLimitError**: Value coming from an intial compute of gasLimit in case the form is configured for a smart contract transaction
 */
/**
 * **initGasLimitError**: Value coming from an intial compute of gasLimit in case the form is configured for a smart contract transaction
 */
export declare function GasContextProvider({ children, initGasLimitError }: GasContextProviderPropsType): React.JSX.Element;
export declare function useGasContext(): GasContextPropsType;
export {};
//# sourceMappingURL=GasContext.d.ts.map