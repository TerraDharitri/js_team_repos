import { RenderResult } from '@testing-library/react';
interface ConfirmScreenType {
    methods: RenderResult;
}
interface ConfirmScreenPropsType {
    amount?: string;
    data?: string;
    fee: string;
}
export declare const sendAndConfirmTest: ({ methods }: ConfirmScreenType) => ({ amount, fee, data }: ConfirmScreenPropsType) => Promise<void>;
export {};
//# sourceMappingURL=sendAndConfirmTest.d.ts.map