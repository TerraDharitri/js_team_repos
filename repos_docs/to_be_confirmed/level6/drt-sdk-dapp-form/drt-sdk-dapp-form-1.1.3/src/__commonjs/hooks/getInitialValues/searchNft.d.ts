import { ApiConfigType } from 'apiCalls';
import { ComputedNftType } from './types';
interface ExistingNftType {
    collection: string;
    nonce: string;
    quantity: string;
    receiver: string;
}
export interface SearchNFTPropsType {
    data: string;
    address: string;
    nft?: ExistingNftType;
}
export declare const searchNft: (props: SearchNFTPropsType, apiConfig?: ApiConfigType) => Promise<ComputedNftType | null>;
export {};
//# sourceMappingURL=searchNft.d.ts.map