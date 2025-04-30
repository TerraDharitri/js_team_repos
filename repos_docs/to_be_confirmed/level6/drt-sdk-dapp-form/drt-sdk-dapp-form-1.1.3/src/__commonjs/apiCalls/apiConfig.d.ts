import { NetworkType } from '@terradharitri/sdk-dapp/types/network.types';
export interface ApiConfigType {
    baseURL: string;
    timeout: number;
}
export declare function setApiConfig(networkConfiguration: NetworkType): ApiConfigType;
export declare function getApiConfig(chainId?: string): Promise<ApiConfigType>;
//# sourceMappingURL=apiConfig.d.ts.map