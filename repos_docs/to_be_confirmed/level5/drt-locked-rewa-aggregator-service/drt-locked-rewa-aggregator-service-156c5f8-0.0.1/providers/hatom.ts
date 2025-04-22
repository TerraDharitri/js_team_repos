import { Injectable } from '@nestjs/common';
import { LockedRewaProvider } from '@libs/common';
import BigNumber from 'bignumber.js';

@Injectable()
export class HatomProvider extends LockedRewaProvider {
  private readonly tokenIdentifier = 'SREWA-3ad2d0';
  private readonly contracts = [
    'drt1qqqqqqqqqqqqqpgq4gzfcw7kmkjy8zsf04ce6dl0auhtzjx078sszs52k8',
  ];

  init(): Promise<void> {
    return Promise.resolve();
  }

  getLockedRewaContracts(): Promise<string[]> {
    // Return hardcoded contracts. A provider also can return the contracts from an API.
    return Promise.resolve(this.contracts);
  }

  async getAddressLockedRewa(address: string): Promise<{ lockedRewa: string }> {
    const tokenBalance = await this.baseProvider.getTokenBalance(address, this.tokenIdentifier);
    const tokenPrice = 1; // TODO get SREWA-3ad2d0 price in REWA

    const addressStake = new BigNumber(tokenBalance).multipliedBy(tokenPrice).toFixed();

    return {
      lockedRewa: addressStake,
    };
  }

  async getLockedRewaAddresses(): Promise<string[]> {
    return await this.baseProvider.getTokenHolders(this.tokenIdentifier);
  }
}
