import { RenderResult, queries } from '@testing-library/react';
export { queries };
export declare const beforAllTokens: (balance?: string) => RenderResult<typeof queries, HTMLElement, HTMLElement>;
export declare const twoToken: {
    identifier: string;
    name: string;
    ticker: string;
    decimals: number;
    balance: string;
};
export declare const useAmountInput: (methods: RenderResult) => (value: string) => Promise<HTMLInputElement>;
export declare const useGasLimitInput: (methods: RenderResult) => (value: string) => Promise<HTMLInputElement>;
export declare const setupDcdtServer: () => void;
//# sourceMappingURL=helpers.d.ts.map