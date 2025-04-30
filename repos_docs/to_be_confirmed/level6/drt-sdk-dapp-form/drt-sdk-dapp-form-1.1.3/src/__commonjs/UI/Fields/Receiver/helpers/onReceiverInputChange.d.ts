import { Dispatch, SetStateAction } from 'react';
import { InputActionMeta } from 'react-select';
import { GenericOptionType } from '../Receiver.types';
export interface OnReceiverInputChangeType {
    setOption: Dispatch<SetStateAction<GenericOptionType | null>>;
    setAllValues: (value: string) => void;
}
export declare const onReceiverInputChange: ({ setOption, setAllValues }: OnReceiverInputChangeType) => (inputValue: string, meta: InputActionMeta) => void;
//# sourceMappingURL=onReceiverInputChange.d.ts.map