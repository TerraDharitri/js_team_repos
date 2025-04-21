import { AbiRegistry, Address, SmartContract } from '@terradharitri/sdk-core';
import { promises } from 'fs';
import { DRTProxyService } from './drt.proxy.service';

export class DRTProxyServiceMock extends DRTProxyService {
    async getAddressShardID(address: string): Promise<number> {
        return 0;
    }

    async getSmartContract(
        contractAddress: string,
        contractAbiPath: string,
        contractInterface: string,
    ): Promise<SmartContract> {
        const jsonContent: string = await promises.readFile(contractAbiPath, {
            encoding: 'utf8',
        });
        const json = JSON.parse(jsonContent);

        return new SmartContract({
            address: Address.fromString(contractAddress),
            abi: AbiRegistry.create(json),
        });
    }
}

export const DRTProxyServiceProvider = {
    provide: DRTProxyService,
    useClass: DRTProxyServiceMock,
};
