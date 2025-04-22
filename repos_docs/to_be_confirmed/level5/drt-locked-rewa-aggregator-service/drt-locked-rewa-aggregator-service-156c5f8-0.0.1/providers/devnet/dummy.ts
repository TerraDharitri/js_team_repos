import { LockedRewaProvider } from '@libs/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DummyProvider extends LockedRewaProvider {

  init(): Promise<void> {
    return Promise.resolve(undefined);
  }

  public getAddressLockedRewa(_address: string): Promise<{ lockedRewa: string }> {
    return Promise.resolve({ lockedRewa: '0' });
  }

  public getLockedRewaAddresses(): Promise<string[]> {
    return Promise.resolve(['drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf']);
  }

  public getLockedRewaContracts(): Promise<string[]> {
    return Promise.resolve(['drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf']);
  }
}
