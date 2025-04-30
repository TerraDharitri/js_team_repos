import { ApiConfigType } from 'apiCalls';
interface VerifiedAddressesType {
    [address: string]: {
        type: string;
        info: string;
    };
}
export declare function useVerifyScamAddress(apiConfig?: ApiConfigType): {
    verifiedAddresses: VerifiedAddressesType;
    verifyScamAddress: ({ address, addressToVerify }: {
        address: string;
        addressToVerify?: string | undefined;
    }) => Promise<void>;
    fetchingScamAddress: boolean;
};
export {};
//# sourceMappingURL=useVerifyScamAddress.d.ts.map