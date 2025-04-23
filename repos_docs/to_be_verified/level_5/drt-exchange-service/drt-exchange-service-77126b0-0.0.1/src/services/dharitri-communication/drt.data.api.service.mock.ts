import { DRTDataApiService } from './drt.data.api.service';

export class DRTDataApiServiceMock {
    async getTokenPrice(tokenTicker: string): Promise<number> {
        return 1;
    }
}

export const DRTDataApiServiceProvider = {
    provide: DRTDataApiService,
    useClass: DRTDataApiServiceMock,
};
