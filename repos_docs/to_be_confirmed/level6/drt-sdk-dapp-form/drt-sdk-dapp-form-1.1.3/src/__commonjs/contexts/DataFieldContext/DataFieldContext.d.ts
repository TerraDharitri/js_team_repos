import React, { ChangeEvent, ReactNode } from 'react';
export interface DataContextPropsType {
    data: string;
    dataError?: string;
    isDataInvalid: boolean;
    isAdvancedModeEnabled?: boolean;
    onChange: (newValue: string | ChangeEvent<any>, shouldValidate?: boolean) => void;
    onBlur: () => void;
    onReset: () => void;
}
interface DataContextProviderPropsType {
    children: ReactNode;
}
export declare const DataFieldContext: React.Context<DataContextPropsType>;
export declare function DataContextProvider({ children }: DataContextProviderPropsType): React.JSX.Element;
export declare function useDataContext(): DataContextPropsType;
export {};
//# sourceMappingURL=DataFieldContext.d.ts.map