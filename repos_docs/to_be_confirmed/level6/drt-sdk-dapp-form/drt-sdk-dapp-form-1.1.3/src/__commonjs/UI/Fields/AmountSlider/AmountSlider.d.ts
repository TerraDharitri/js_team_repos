import React from 'react';
import { WithClassnameType } from '@terradharitri/sdk-dapp/UI/types';
export interface AmountSliderPropsType extends WithClassnameType {
    disabled?: boolean;
    percentageValue: number;
    onPercentageChange: (percentage: number) => void;
}
export declare const AmountSlider: ({ disabled, percentageValue, onPercentageChange, className }: AmountSliderPropsType) => React.JSX.Element;
//# sourceMappingURL=AmountSlider.d.ts.map