import { ApiConfigType } from 'apiCalls';
export declare function getDataToken({ tokenId, parsedTokenAmount: parsedTokenAmount }: {
    tokenId: string;
    parsedTokenAmount: string;
}, apiConfig: ApiConfigType): Promise<{
    tokenData: null;
    tokenAmount: string;
    tokenFound: boolean;
} | {
    tokenData: import("../../..").PartialTokenType;
    tokenAmount: string;
    tokenFound: boolean;
}>;
export default getDataToken;
//# sourceMappingURL=getDataToken.d.ts.map