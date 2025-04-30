import { ValuesType } from 'types';
import { ValidationErrorMessagesType } from '../types/validation';
interface GetInitialErrorsType {
    prefilledForm: boolean;
    initialValues?: ValuesType;
    errorMessages: ValidationErrorMessagesType;
}
export declare const getInitialErrors: ({ prefilledForm, initialValues, errorMessages }: GetInitialErrorsType) => {
    [x: string]: string;
};
export default getInitialErrors;
//# sourceMappingURL=getInitialErrors.d.ts.map