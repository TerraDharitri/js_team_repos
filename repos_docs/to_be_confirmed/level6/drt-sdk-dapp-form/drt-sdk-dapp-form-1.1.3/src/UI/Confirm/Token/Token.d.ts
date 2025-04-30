import React, { JSXElementConstructor } from 'react';
import { WithClassnameType } from '@terradharitri/sdk-dapp/UI/types';
import { PartialNftType } from 'types';
export interface TokenPropsType extends WithClassnameType {
    RewaIcon?: JSXElementConstructor<any>;
    rewaLabel: string;
    isDcdtTransaction: boolean;
    nft?: PartialNftType;
    tokenAvatar?: string;
    tokenId: string;
    tokenIdError?: string;
}
export declare const Token: ({ RewaIcon, rewaLabel, isDcdtTransaction, nft, tokenAvatar, tokenId, tokenIdError }: TokenPropsType) => React.JSX.Element;
//# sourceMappingURL=Token.d.ts.map