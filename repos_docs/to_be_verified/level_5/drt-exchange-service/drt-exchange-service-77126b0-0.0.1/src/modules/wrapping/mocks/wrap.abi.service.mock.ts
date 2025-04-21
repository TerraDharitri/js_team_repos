import { IWrapAbiService } from '../services/interfaces';
import { WrapAbiService } from '../services/wrap.abi.service';

export class WrapAbiServiceMock implements IWrapAbiService {
    async wrappedrewaTokenID(): Promise<string> {
        return 'Wrewa-123456';
    }
}

export const WrapAbiServiceProvider = {
    provide: WrapAbiService,
    useClass: WrapAbiServiceMock,
};
