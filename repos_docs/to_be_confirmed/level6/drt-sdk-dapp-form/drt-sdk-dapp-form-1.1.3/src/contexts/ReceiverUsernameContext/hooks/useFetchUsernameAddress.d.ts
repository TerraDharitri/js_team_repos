import { ApiConfigType } from 'apiCalls';
export interface UsernameAccountsType {
    [username: string]: {
        address: string;
        /**
         * **username**: Might differ from the original username search string.
         */
        username: string;
        rawUsername: string;
    } | null;
}
export declare function useFetchUsernameAddress(apiConfig?: ApiConfigType): {
    usernameAccounts: UsernameAccountsType;
    fetchUsernameAccount: (username: string) => Promise<void>;
    fetchUsernameByAddress: (address: string) => Promise<void>;
    fetchingUsernameAccount: boolean;
};
//# sourceMappingURL=useFetchUsernameAddress.d.ts.map