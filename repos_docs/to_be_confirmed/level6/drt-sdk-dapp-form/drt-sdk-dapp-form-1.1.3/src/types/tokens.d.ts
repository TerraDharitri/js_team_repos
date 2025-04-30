import { TokenType, NftType as NftInterface } from '@terradharitri/sdk-dapp/types/tokens.types';
import { NftEnumType, TransactionTypeEnum } from 'types/enums';
export type PartialTokenType = {
    identifier: TokenType['identifier'];
    name: TokenType['name'];
    decimals: number;
    balance: string;
    ticker: TokenType['ticker'];
    assets?: TokenAssetsType;
};
export interface SelectedTokenType extends PartialTokenType {
    type: TransactionTypeEnum;
}
export type TokenAssetsType = TokenType['assets'];
interface SharedNftType {
    balance: NftInterface['balance'];
    identifier: NftInterface['identifier'];
    decimals: NftInterface['decimals'];
    name: NftInterface['name'];
    nonce: NftInterface['nonce'];
    creator: NftInterface['creator'];
    scamInfo?: NftInterface['scamInfo'];
    uris?: NftInterface['uris'];
    media?: NftInterface['media'];
    /**
     * Custom internal proprety based on collection roles.
     *
     * If set, warning is shown and `MetaDcdt` transfer is only allowed to listed accounts
     */
    allowedReceivers?: string[] | null;
}
type SharedTokenType = PartialTokenType & {
    owner: string;
};
export type PartialNftType = SharedTokenType & SharedNftType & {
    type: NftEnumType;
    collection: string;
    assets?: TokenAssetsType;
};
export type PartialMetaDcdtType = SharedTokenType & SharedNftType & {
    type: NftEnumType.MetaDCDT;
    collection: string;
    assets?: TokenAssetsType;
};
export {};
//# sourceMappingURL=tokens.d.ts.map