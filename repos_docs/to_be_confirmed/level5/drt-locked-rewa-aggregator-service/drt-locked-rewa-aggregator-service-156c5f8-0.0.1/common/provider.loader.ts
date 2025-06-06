import { BaseProvider } from '../providers/base.provider';
import { DummyProvider } from '../providers/dummy';
import { DummyProvider as TestnetDummyProvider } from '../providers/testnet/dummy';
import { DummyProvider as DevnetDummyProvider } from '../providers/devnet/dummy';
import { ExampleProvider } from '../providers/example';
import { HatomProvider } from '../providers/hatom';
import { SalsaProvider } from '../providers/salsa';
import { LockedRewaProvider } from '@libs/common';

export async function loadProvider(baseProvider: BaseProvider, network: string, providerName: string): Promise<LockedRewaProvider> {
  let provider: LockedRewaProvider | undefined = undefined;
  switch (network) {
    case 'mainnet':
      provider = loadMainnetProvider(baseProvider, providerName);
      break;
    case 'testnet':
      provider = loadTestnetProvider(baseProvider, providerName);
      break;
    case 'devnet':
      provider = loadDevnetProvider(baseProvider, providerName);
      break;
    default:
      throw new Error(`Invalid network: ${network}`);
  }

  if (!provider) {
    throw new Error(`Cannot load provider ${providerName} for network: ${network}. Maybe you forgot to add it to provider.loader.ts ?`);
  }
  await provider.init();
  return provider;

}

export function loadMainnetProvider(baseProvider: BaseProvider, providerName: string): LockedRewaProvider | undefined {
  switch (providerName) {
    case 'dummy':
      return new DummyProvider(baseProvider);
    case 'example':
      return new ExampleProvider(baseProvider);
    case 'hatom':
      return new HatomProvider(baseProvider);
    case 'salsa':
      return new SalsaProvider(baseProvider);
  }

  return;
}

export function loadTestnetProvider(baseProvider: BaseProvider, providerName: string): LockedRewaProvider | undefined {
  switch (providerName) {
    case 'dummy':
      return new TestnetDummyProvider(baseProvider);
  }

  return;
}

export function loadDevnetProvider(baseProvider: BaseProvider, providerName: string): LockedRewaProvider | undefined {
  switch (providerName) {
    case 'dummy':
      return new DevnetDummyProvider(baseProvider);
  }

  return;
}
