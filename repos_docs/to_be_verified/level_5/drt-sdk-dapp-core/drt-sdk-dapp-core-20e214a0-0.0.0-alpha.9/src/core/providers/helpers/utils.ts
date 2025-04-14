import { ExtensionProvider } from '@terradharitri/sdk-extension-provider';
import { HWProvider } from '@terradharitri/sdk-hw-provider';
import { MetamaskProvider } from '@terradharitri/sdk-metamask-provider/out/metamaskProvider';
import { OperaProvider } from '@terradharitri/sdk-opera-provider';
import { WalletProvider } from '@terradharitri/sdk-web-wallet-provider';
import { WalletConnectV2Provider } from 'utils/walletconnect/__sdkWalletconnectProvider';
import { EmptyProvider } from './emptyProvider';
import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';
import { ProviderTypeEnum } from 'core/providers/types/providerFactory.types';

export function getProviderType<TProvider extends object>(
  provider?: TProvider | null
): ProviderTypeEnum {
  switch (provider?.constructor) {
    case WalletProvider:
      return ProviderTypeEnum.webhook;
    case WalletConnectV2Provider:
      return ProviderTypeEnum.walletConnect;
    case HWProvider:
      return ProviderTypeEnum.ledger;
    case ExtensionProvider:
      return ProviderTypeEnum.extension;
    case MetamaskProvider:
      return ProviderTypeEnum.metamask;
    case OperaProvider:
      return ProviderTypeEnum.opera;
    case CrossWindowProvider:
      return ProviderTypeEnum.crossWindow;
    case EmptyProvider:
    default:
      return ProviderTypeEnum.none;
  }
}
