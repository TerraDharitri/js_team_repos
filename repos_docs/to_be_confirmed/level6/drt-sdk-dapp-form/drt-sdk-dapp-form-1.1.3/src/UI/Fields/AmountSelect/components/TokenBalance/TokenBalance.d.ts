import React from 'react';
import { WithClassnameType } from '@terradharitri/sdk-dapp/UI/types';
import { OptionType } from '../TokenSelect';
export interface TokenBalancePropsType extends WithClassnameType {
    label?: string;
    value?: string;
    token?: OptionType['token'];
    'data-value'?: string;
}
export declare const TokenBalance: ({ label, value, className, token, "data-testid": dataTestId, "data-value": dataValue }: TokenBalancePropsType) => React.JSX.Element;
//# sourceMappingURL=TokenBalance.d.ts.map