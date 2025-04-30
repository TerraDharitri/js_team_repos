import React, { Dispatch, SetStateAction, MouseEvent } from 'react';
import { Transaction } from '@terradharitri/sdk-core/out';
import { ExtendedValuesType, PartialNftType, TransactionTypeEnum } from 'types';
export interface FormContextBasePropsType {
    hasGuardianScreen: boolean;
    hiddenFields?: ExtendedValuesType['hiddenFields'];
    isBurn?: boolean;
    isFormSubmitted: boolean;
    onCloseForm: () => void;
    prefilledForm: boolean;
    readonly?: ExtendedValuesType['readonly'];
    setGuardedTransaction: (transaction: Transaction) => void;
    setHasGuardianScreen: Dispatch<SetStateAction<boolean>>;
    setIsFormSubmitted: Dispatch<SetStateAction<boolean>>;
    skipToConfirm?: boolean;
    uiOptions?: ExtendedValuesType['uiOptions'];
}
export interface FormContextPropsType extends FormContextBasePropsType {
    isRewaTransaction: boolean;
    isDcdtTransaction: boolean;
    isNftTransaction: boolean;
    areValidatedValuesReady: boolean;
    shouldValidateForm: boolean;
    isFormValid: boolean;
    renderKey: number;
    txType: TransactionTypeEnum;
    checkInvalid: (value: keyof ExtendedValuesType) => boolean;
    onValidateForm: () => void;
    onInvalidateForm: () => void;
    onPreviewClick?: (event: MouseEvent, data: PartialNftType) => void;
    onSubmitForm: () => void;
    isGuardianScreenVisible: boolean;
    setIsGuardianScreenVisible: Dispatch<SetStateAction<boolean>>;
}
interface FormContextProviderPropsType {
    children: any;
    value: FormContextBasePropsType;
}
export declare const FormContext: React.Context<FormContextPropsType>;
export declare function FormContextProvider({ children, value }: FormContextProviderPropsType): React.JSX.Element;
export declare function useFormContext(): FormContextPropsType;
export {};
//# sourceMappingURL=FormContext.d.ts.map