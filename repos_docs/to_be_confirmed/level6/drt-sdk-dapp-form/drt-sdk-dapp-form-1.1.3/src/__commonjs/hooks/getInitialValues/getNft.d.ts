import { ComputedNftType } from './types';
interface GetNftParamsType {
    data?: string;
    address: string;
    identifier?: string;
}
export declare const getNft: ({ data, address, identifier }: GetNftParamsType) => Promise<ComputedNftType | null>;
export {};
//# sourceMappingURL=getNft.d.ts.map