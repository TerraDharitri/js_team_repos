import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { LoginMethodsEnum } from 'types';
import { DappCoreWCV2CustomMethodsEnum } from 'types/enums.types';
import { getIsProviderEqualTo } from 'utils/account/getIsProviderEqualTo';

export function useCancelWalletConnectAction(action?: string) {
  const { provider } = useGetAccountProvider();

  async function cancelWalletConnectAction() {
    if (!provider) {
      return;
    }

    if (getIsProviderEqualTo(LoginMethodsEnum.walletconnect)) {
      await cancelAction();
    }

    if (getIsProviderEqualTo(LoginMethodsEnum.walletconnectv2)) {
      await cancelActionV2();
    }

    return;
  }

  async function cancelAction() {
    try {
      if (!provider || !getIsProviderEqualTo(LoginMethodsEnum.walletconnect)) {
        return;
      }

      const isProviderConnected = await provider.isConnected();
      if (!isProviderConnected) {
        return;
      }

      const customMessage = {
        method: 'drt_cancelAction',
        params: { action }
      };

      await provider?.sendCustomMessage?.(customMessage);
    } catch (error) {
      console.warn('WalletConnect: Unable to send cancelAction event', error);
    }
  }

  async function cancelActionV2() {
    try {
      if (
        !provider ||
        !getIsProviderEqualTo(LoginMethodsEnum.walletconnectv2)
      ) {
        return;
      }

      await provider?.sendCustomRequest?.({
        request: {
          method: DappCoreWCV2CustomMethodsEnum.drt_cancelAction,
          params: { action }
        }
      });
    } catch (error) {
      console.warn('WalletConnectV2: Unable to send cancelAction event', error);
    }
  }

  return { cancelAction, cancelActionV2, cancelWalletConnectAction };
}
