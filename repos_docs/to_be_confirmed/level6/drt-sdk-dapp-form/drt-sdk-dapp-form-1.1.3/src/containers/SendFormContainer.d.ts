import React, { Dispatch, JSXElementConstructor, ReactNode, SetStateAction } from 'react';
import { Transaction } from '@terradharitri/sdk-core';
import { AccountContextPropsType, FormContextBasePropsType, TokensContextInitializationPropsType } from 'contexts';
import { ExtendedValuesType, ValuesType } from 'types';
import { FormNetworkConfigType } from 'types/network';
import { ValidationErrorMessagesType } from 'types/validation';
export interface SendFormContainerPropsType {
    initialValues?: ExtendedValuesType;
    enableReinitialize?: boolean;
    initGasLimitError?: string;
    onFormSubmit: (values: ValuesType, transaction: Transaction | null, 
    /**
     * control isFormSubmitted from outside
     */
    setIsFormSubmitted?: Dispatch<SetStateAction<boolean>>) => void;
    accountInfo: AccountContextPropsType;
    formInfo: Omit<FormContextBasePropsType, 'txType' | 'setTxType'>;
    tokensInfo?: TokensContextInitializationPropsType;
    networkConfig: FormNetworkConfigType;
    Loader?: JSXElementConstructor<any> | null;
    shouldGenerateTransactionOnSubmit?: boolean;
    children: ReactNode | JSX.Element;
    errorMessageTranslations?: Partial<ValidationErrorMessagesType>;
}
export declare function SendFormContainer(props: SendFormContainerPropsType): React.JSX.Element;
//# sourceMappingURL=SendFormContainer.d.ts.map