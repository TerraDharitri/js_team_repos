import { BigNumber } from 'bignumber.js';

export class ProviderLockedRewaInfo {
  constructor(init?: Partial<ProviderLockedRewaInfo>) {
    Object.assign(this, init);
  }

  providerName: string = '';
  lockedRewa: BigNumber = new BigNumber(0);
}
