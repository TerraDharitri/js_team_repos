import { SearchNFTPropsType } from './searchNft';
interface ExistingNftType {
    collection: string;
    nonce: string;
    quantity: string;
    receiver: string;
}
export declare const extractNftFromData: ({ data, nft, address }: SearchNFTPropsType) => ExistingNftType | undefined;
export {};
//# sourceMappingURL=extractNftFromData.d.ts.map