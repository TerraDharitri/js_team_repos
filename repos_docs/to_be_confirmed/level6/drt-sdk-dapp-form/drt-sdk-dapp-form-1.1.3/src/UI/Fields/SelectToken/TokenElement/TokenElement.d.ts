import React, { JSXElementConstructor } from 'react';
import { NftEnumType, PartialNftType, PartialTokenType } from 'types';
export interface TokenElementPropsType {
    RewaIcon?: JSXElementConstructor<any>;
    inDropdown?: boolean;
    isRewa?: boolean;
    nftTokenDetails?: PartialNftType;
    nftType?: NftEnumType;
    token: PartialTokenType;
}
export declare const TokenElement: ({ RewaIcon, inDropdown, isRewa, nftTokenDetails, nftType, token }: TokenElementPropsType) => React.JSX.Element;
//# sourceMappingURL=TokenElement.d.ts.map