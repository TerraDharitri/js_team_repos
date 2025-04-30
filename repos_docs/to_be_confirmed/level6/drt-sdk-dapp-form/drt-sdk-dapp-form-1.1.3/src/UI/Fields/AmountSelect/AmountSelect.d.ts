import React from 'react';
import { WithClassnameType } from '@terradharitri/sdk-dapp/UI/types';
import { ExtendedValuesType } from 'types';
import { AmountErrorPropsType, AmountInputPropsType, MaxButtonPropsType, TokenBalancePropsType, TokenSelectPropsType } from './components';
export interface AmountSelectPropsType extends WithClassnameType {
    label?: string;
    name: string;
    readonly?: ExtendedValuesType['readonly'];
    wrapperControlsClassName?: string;
    amountErrorProps: AmountErrorPropsType;
    tokenBalanceProps: TokenBalancePropsType;
    tokenSelectProps: TokenSelectPropsType;
    amountInputProps: AmountInputPropsType;
    maxButtonProps: MaxButtonPropsType;
}
export declare const AmountSelect: ({ className, label, name, wrapperControlsClassName, tokenSelectProps, tokenBalanceProps, amountInputProps, amountErrorProps, maxButtonProps, readonly }: AmountSelectPropsType) => React.JSX.Element;
//# sourceMappingURL=AmountSelect.d.ts.map