import React from 'react';
import { PartialTokenType } from 'types/tokens';
export interface MaxButtonPropsType {
    token?: PartialTokenType;
    rewaLabel?: string;
    inputAmount: string;
    isMaxClicked?: boolean;
    isMaxButtonVisible?: boolean;
    onMaxClick?: (maxAmount: string) => void;
    className?: string;
    wrapperClassName?: string;
}
export declare const MaxButton: ({ token, rewaLabel, inputAmount, className, onMaxClick }: MaxButtonPropsType) => React.JSX.Element | null;
//# sourceMappingURL=MaxButton.d.ts.map