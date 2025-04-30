import { ApiConfigType } from 'apiCalls';
interface FetchNftType {
    type: string;
    nonce: string;
    tokenId: string;
    amount: string;
    address: string;
    data: string;
    receiver: string;
}
export declare function fetchNft(props: FetchNftType, apiConfig: ApiConfigType): Promise<import("hooks").ComputedNftType | null>;
export {};
//# sourceMappingURL=fetchNft.d.ts.map