import { JSXElementConstructor } from 'react';
import { components } from 'react-select';
import type { TokenSelectPropsType } from '../../tokenSelect.types';
export declare const DharitrIIcon: any;
export interface GetOptionPropsType {
    RewaIcon?: JSXElementConstructor<any>;
    TokenTickerIcon?: TokenSelectPropsType['TokenTickerIcon'];
    rewaLabel: string;
    showBalanceUsdValue?: boolean;
    showTokenPrice?: boolean;
}
export declare const getOption: ({ RewaIcon, TokenTickerIcon, showBalanceUsdValue, showTokenPrice }: GetOptionPropsType) => typeof components.Option;
//# sourceMappingURL=getOption.d.ts.map