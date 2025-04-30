import { ApiConfigType } from 'apiCalls/apiConfig';
import { PartialNftType } from 'types';
export interface GetNftByAddressAndIdentifierArgsType {
    address: string;
    identifier: string;
}
export declare function getNftByAddressAndIdentifier({ address, identifier }: GetNftByAddressAndIdentifierArgsType, apiConfig?: ApiConfigType): Promise<PartialNftType | null>;
export declare function getGlobalNftByIdentifier(identifier: string, apiConfig?: ApiConfigType): Promise<PartialNftType | null>;
//# sourceMappingURL=nfts.d.ts.map