import { BaseProvider } from "providers/base.provider";

export abstract class LockedRewaProvider {
  constructor(
    protected readonly baseProvider: BaseProvider
  ) { }

  /**
   * Handled the initialization of the providers (fetch configuration, parity and so on)
   */
  init(): Promise<void> {
    return Promise.resolve();
  }

  /**
   * Returns the list of the provider's locked REWA contracts
   */
  getLockedRewaContracts(): Promise<string[]> {
    return Promise.resolve([]);
  }

  /**
  * Returns the list of all addresses participating in the provider's REWA locking protocol
  */
  getLockedRewaAddresses(): Promise<string[]> {
    return Promise.resolve([]);
  }

  /**
   * Returns the amount in REWA of locked REWA by the given address
   * 
   * The returned value must be denominated. E.g.: 1 REWA = 10^18
   * @param address The address to check
   */
  getAddressLockedRewa(_address: string): Promise<{ lockedRewa: string }> {
    return Promise.resolve({ lockedRewa: '0' });
  }
}
