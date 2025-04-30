import { ValidationErrorMessagesType } from '../types/validation';
export declare const getValidationSchema: (errorMessages: ValidationErrorMessagesType) => import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    receiver: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    receiverUsername: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    tokenId: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    gasPrice: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    data: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    amount: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    gasLimit: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    receiver: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    receiverUsername: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    tokenId: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    gasPrice: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    data: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    amount: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    gasLimit: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    receiver: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    receiverUsername: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    tokenId: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    gasPrice: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    data: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    amount: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    gasLimit: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>>;
//# sourceMappingURL=index.d.ts.map