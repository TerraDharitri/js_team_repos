import { ApiConfigType } from 'apiCalls/apiConfig';
export type ScamInfoType = {
    scamInfo?: {
        type: string;
        info: string;
    };
    code: string;
};
export declare function getScamAddressData(addressToVerify: string, apiConfig?: ApiConfigType): Promise<ScamInfoType>;
//# sourceMappingURL=getScamAddressData.d.ts.map