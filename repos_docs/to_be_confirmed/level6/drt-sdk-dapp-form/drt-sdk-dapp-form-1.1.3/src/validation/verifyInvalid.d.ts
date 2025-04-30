import { FormikErrors, FormikTouched } from 'formik';
import { ExtendedValuesType } from 'types';
export declare const verifyInvalid: ({ shouldValidateForm, errors, touched }: {
    shouldValidateForm: boolean;
    errors: FormikErrors<ExtendedValuesType>;
    touched: FormikTouched<ExtendedValuesType>;
}) => (key: keyof ExtendedValuesType) => boolean;
export default verifyInvalid;
//# sourceMappingURL=verifyInvalid.d.ts.map