import axios from 'axios';
import { ApiConfigType } from 'apiCalls/apiConfig';
import { PartialMetaDcdtType, PartialTokenType } from 'types';
export interface GetTokensType {
    address: string;
    search?: string;
}
export declare function getTokens({ address, size, from, search }: GetTokensType & {
    from?: number;
    size?: number;
}): Promise<axios.AxiosResponse<(PartialTokenType | PartialMetaDcdtType)[], any>>;
export declare function getTokensCount({ address, search }: GetTokensType): Promise<axios.AxiosResponse<number, any>>;
export declare function getAccountToken(props: {
    address: string;
    token: string;
}, apiConfig?: ApiConfigType): Promise<axios.AxiosResponse<PartialTokenType, any>>;
export declare function getToken(token: string, apiConfig?: ApiConfigType): Promise<PartialTokenType>;
export interface FetchTokensArgumentsType {
    address: string;
    page?: number;
    search?: string;
    size?: number;
}
export declare function fetchTokens({ address, page, search, size }: FetchTokensArgumentsType): Promise<(PartialTokenType | PartialMetaDcdtType)[]>;
export declare function fetchAllTokens(address: string): Promise<PartialTokenType[]>;
//# sourceMappingURL=tokens.d.ts.map