import { DRTGatewayService } from './drt.gateway.service';

export class DRTGatewayServiceMock {
    async getSCStorageKey(address: string, key: string): Promise<any> {
        throw new Error('Method not implemented.');
    }

    async getSCStorageKeys(address: string, keys: any[]): Promise<any> {
        throw new Error('Method not implemented.');
    }
}

export const DRTGatewayServiceProvider = {
    provide: DRTGatewayService,
    useClass: DRTGatewayServiceMock,
};
