import { Dispatch, SetStateAction } from 'react';
import { SingleValue } from 'react-select';
import { GenericOptionType } from '../Receiver.types';
export interface OnReceiverChangeType {
    setOption: Dispatch<SetStateAction<GenericOptionType | null>>;
    setInputValue: (value: string) => void;
    changeAndBlurInput: (value: string) => void;
}
export declare const onReceiverChange: ({ setInputValue, setOption, changeAndBlurInput }: OnReceiverChangeType) => (option: SingleValue<GenericOptionType>) => void;
//# sourceMappingURL=onReceiverChange.d.ts.map