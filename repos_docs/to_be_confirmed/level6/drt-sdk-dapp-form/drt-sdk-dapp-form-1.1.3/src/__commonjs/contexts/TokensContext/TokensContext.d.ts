import React, { JSXElementConstructor } from 'react';
import { PartialNftType, PartialTokenType } from 'types';
export interface TokensContextInitializationPropsType {
    RewaIcon?: JSXElementConstructor<any>;
    initialNft?: PartialNftType;
    initialTokens?: PartialTokenType[] | null;
}
export interface TokensContextPropsType {
    tokenId: string;
    isTokenIdInvalid: boolean;
    digits: number;
    rewaLabel: string;
    RewaIcon?: JSXElementConstructor<any>;
    rewaPriceInUsd: number;
    tokenIdError?: string;
    areTokensLoading: boolean;
    tokenDetails: PartialTokenType;
    tokens: PartialTokenType[];
    allAvailableTokens: PartialTokenType[];
    nft?: PartialNftType;
    getTokens: (showLoading?: boolean) => void;
    onChangeTokenId: (value: string) => void;
}
interface TokensContextProviderPropsType {
    children: any;
    value?: TokensContextInitializationPropsType;
}
export declare const TokensContext: React.Context<TokensContextPropsType>;
export declare function TokensContextProvider({ children, value }: TokensContextProviderPropsType): React.JSX.Element;
export declare function useTokensContext(): TokensContextPropsType;
export {};
//# sourceMappingURL=TokensContext.d.ts.map