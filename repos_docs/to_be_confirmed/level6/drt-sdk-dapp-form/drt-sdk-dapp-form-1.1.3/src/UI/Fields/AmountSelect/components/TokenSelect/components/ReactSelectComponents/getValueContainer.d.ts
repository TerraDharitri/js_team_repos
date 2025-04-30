import React, { JSXElementConstructor } from 'react';
import { components } from 'react-select';
interface ValueComponentPropsType {
    RewaIcon?: JSXElementConstructor<any>;
    rewaLabel: string;
    icon?: string | null;
    isDisabled?: boolean;
    tokenId?: string;
}
export declare const ValueComponent: ({ RewaIcon, tokenId, icon }: ValueComponentPropsType) => React.JSX.Element;
export declare const getValueContainer: (rewaLabel: string, selectedTokenIconClassName?: string, RewaIcon?: JSXElementConstructor<any>) => typeof components.ValueContainer;
export {};
//# sourceMappingURL=getValueContainer.d.ts.map