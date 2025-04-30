import React, { ChangeEvent, FocusEvent, KeyboardEvent } from 'react';
import { WithClassnameType } from '@terradharitri/sdk-dapp/UI/types';
export interface AmountInputPropsType extends WithClassnameType {
    'data-testid'?: string;
    InfoDustComponent?: JSX.Element;
    disabled?: boolean;
    error?: string;
    handleBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    isInvalid?: boolean;
    name: string;
    onDebounceChange?: (amount: string) => void;
    onFocus?: () => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
    readonly?: boolean;
    required: boolean;
    usdPrice?: number;
    value: string;
    usdValue?: string;
    autoFocus?: boolean;
    suffix?: string;
}
export declare const AmountInput: React.MemoExoticComponent<({ "data-testid": dataTestId, InfoDustComponent, disabled, handleBlur, handleChange, name, onDebounceChange, onFocus, onKeyDown, placeholder, required, usdPrice, value, usdValue, className, autoFocus, suffix }: AmountInputPropsType) => React.JSX.Element>;
//# sourceMappingURL=AmountInput.d.ts.map