import { Injectable } from '@nestjs/common';
import { LockedRewaProvider } from '@libs/common';
import { BigNumber } from 'bignumber.js';

@Injectable()
export class ExampleProvider extends LockedRewaProvider {
  private readonly tokenIdentifier = 'LREWA-d74da9';
  private readonly contracts = [
    'drt1qqqqqqqqqqqqqpgqaqxztq0y764dnet95jwtse5u5zkg92sfacts8tjnl0',
  ];

  init(): Promise<void> {
    return Promise.resolve();
  }

  // eslint-disable-next-line require-await
  async getLockedRewaContracts(): Promise<string[]> {
    // Return hardcoded contracts. A provider also can return the contracts from an API.
    return this.contracts;
  }

  async getAddressLockedRewa(address: string): Promise<{ lockedRewa: string }> {
    const tokenBalance = await this.baseProvider.getTokenBalance(address, this.tokenIdentifier);
    const tokenPrice = 1; // TODO get LREWA-d74da9 price in REWA

    const addressStake = new BigNumber(tokenBalance).multipliedBy(tokenPrice).toFixed();

    return {
      lockedRewa: addressStake,
    };
  }

  async getLockedRewaAddresses(): Promise<string[]> {
    const holders = await this.baseProvider.getTokenHolders(this.tokenIdentifier);

    return holders;
  }
}
