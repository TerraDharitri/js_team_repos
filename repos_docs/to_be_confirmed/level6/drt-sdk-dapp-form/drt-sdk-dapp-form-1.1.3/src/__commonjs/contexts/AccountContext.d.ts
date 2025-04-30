import React, { ReactNode } from 'react';
import { AssetType } from '@terradharitri/sdk-dapp/types/account.types';
import { LoginMethodsEnum } from '@terradharitri/sdk-dapp/types/enums.types';
export interface AccountContextPropsType {
    address: string;
    assets?: AssetType;
    nonce: number;
    balance: string;
    username?: string;
    isGuarded?: boolean;
    providerType: LoginMethodsEnum;
}
interface AccountContextProviderPropsType {
    children: ReactNode;
    value: AccountContextPropsType;
}
export declare const AccountContext: React.Context<AccountContextPropsType>;
export declare function AccountContextProvider({ children, value }: AccountContextProviderPropsType): React.JSX.Element;
export declare function useAccountContext(): AccountContextPropsType;
export {};
//# sourceMappingURL=AccountContext.d.ts.map