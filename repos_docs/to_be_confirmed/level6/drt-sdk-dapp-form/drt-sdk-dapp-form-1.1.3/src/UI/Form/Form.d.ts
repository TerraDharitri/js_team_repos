import React from 'react';
import { GuardianScreenType } from '@terradharitri/sdk-dapp/types/transactions.types';
import { WithClassnameType } from '@terradharitri/sdk-dapp/UI/types';
interface FormPropsType extends WithClassnameType {
    GuardianScreen?: (props: GuardianScreenType) => JSX.Element;
}
export declare const Form: ({ className, GuardianScreen }: FormPropsType) => React.JSX.Element;
export {};
//# sourceMappingURL=Form.d.ts.map