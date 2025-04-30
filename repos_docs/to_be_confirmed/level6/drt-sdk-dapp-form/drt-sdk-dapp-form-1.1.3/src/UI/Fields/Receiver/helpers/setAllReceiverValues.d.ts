import { Dispatch, SetStateAction } from 'react';
import { FormikHelpers } from 'formik';
import { KnowAddressType } from 'contexts/ReceiverContext/ReceiverContext';
import { UsernameAccountsType } from 'contexts/ReceiverUsernameContext/hooks/useFetchUsernameAddress';
import { ExtendedValuesType } from 'types';
import { GenericOptionType } from '../Receiver.types';
export interface SetAllReceiverValuesType {
    setFieldValue: FormikHelpers<ExtendedValuesType>['setFieldValue'];
    setInputValue: (value: string) => void;
    setOption: Dispatch<SetStateAction<GenericOptionType | null>>;
    options: GenericOptionType[];
    usernameAccounts: UsernameAccountsType;
    knownAddresses: KnowAddressType[];
}
export declare const setAllReceiverValues: ({ options, usernameAccounts, knownAddresses, setFieldValue, setInputValue, setOption }: SetAllReceiverValuesType) => (value: string) => void;
//# sourceMappingURL=setAllReceiverValues.d.ts.map