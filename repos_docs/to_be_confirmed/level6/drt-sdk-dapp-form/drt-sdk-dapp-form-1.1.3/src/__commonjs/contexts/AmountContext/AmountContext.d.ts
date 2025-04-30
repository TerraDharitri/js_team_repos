import React, { ChangeEvent, ReactNode } from 'react';
export interface AmountContextPropsType {
    amount: string;
    error?: string;
    isInvalid: boolean;
    maxAmountAvailable: string;
    maxAmountMinusDust: string;
    isMaxButtonVisible: boolean;
    amountRange: number;
    isMaxClicked: boolean;
    onFocus: () => void;
    onBlur: () => void;
    onChange: (newValue: string | ChangeEvent<HTMLInputElement>, shouldValidate?: boolean) => void;
    onMaxClicked: () => void;
    onSetAmountPercentage: (percentage: number) => void;
}
interface AmountContextProviderPropsType {
    children: ReactNode;
}
export declare const AmountContext: React.Context<AmountContextPropsType>;
export declare function AmountContextProvider({ children }: AmountContextProviderPropsType): React.JSX.Element;
export declare function useAmountContext(): AmountContextPropsType;
export {};
//# sourceMappingURL=AmountContext.d.ts.map