import { KnowAddressType } from 'contexts';
export interface IsAnyOptionFoundType {
    knownAddresses: KnowAddressType[] | null;
    inputValue: string;
}
export declare const isAnyOptionFound: ({ knownAddresses, inputValue }: IsAnyOptionFoundType) => boolean;
//# sourceMappingURL=isAnyOptionFound.d.ts.map