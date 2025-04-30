import React from 'react';
import { GuardianScreenType } from '@terradharitri/sdk-dapp/types/transactions.types';
import { ExtendedValuesType, FormConfigType } from 'types/form';
export interface TestWrapperType {
    formConfigValues?: FormConfigType;
    balance?: string;
    address?: string;
    chainId?: string;
    GuardianScreen?: (props: GuardianScreenType) => JSX.Element;
    isGuarded?: boolean;
    ledger?: ExtendedValuesType['ledger'];
}
export declare const TestWrapper: ({ formConfigValues, balance, address, chainId, ledger, isGuarded, GuardianScreen }: TestWrapperType) => React.JSX.Element;
//# sourceMappingURL=TestWrapper.d.ts.map