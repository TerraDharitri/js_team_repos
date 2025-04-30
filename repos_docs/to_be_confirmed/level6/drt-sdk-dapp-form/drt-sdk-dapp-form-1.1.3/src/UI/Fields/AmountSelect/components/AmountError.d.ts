import React, { PropsWithChildren } from 'react';
import { WithClassnameType } from '@terradharitri/sdk-dapp/UI/types';
export interface AmountErrorPropsType extends WithClassnameType, PropsWithChildren {
    hasErrors?: boolean;
    error?: string;
}
export declare const AmountError: ({ hasErrors, className, error, "data-testid": dataTestId }: AmountErrorPropsType) => React.JSX.Element | null;
//# sourceMappingURL=AmountError.d.ts.map