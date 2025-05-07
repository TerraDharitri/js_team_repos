import dynamic from 'next/dynamic';

export * from './providers';

export const TransactionsTable = dynamic(
  async () => {
    return (await import('@terradharitri/sdk-dapp/dist/UI/TransactionsTable'))
      .TransactionsTable;
  },
  { ssr: false }
);

export const Loader = dynamic(
  async () => {
    return (await import('@terradharitri/sdk-dapp/dist/UI/Loader')).Loader;
  },
  { ssr: false }
);

export const PageState = dynamic(
  async () => {
    return (await import('@terradharitri/sdk-dapp/dist/UI/PageState')).PageState;
  },
  { ssr: false }
);

export const SignTransactionsModals = dynamic(
  async () => {
    return (await import('@terradharitri/sdk-dapp/dist/UI/SignTransactionsModals'))
      .SignTransactionsModals;
  },
  { ssr: false }
);
export const NotificationModal = dynamic(
  async () => {
    return (await import('@terradharitri/sdk-dapp/dist/UI/NotificationModal'))
      .NotificationModal;
  },
  { ssr: false }
);
export const TransactionsToastList = dynamic(
  async () => {
    return (await import('@terradharitri/sdk-dapp/dist/UI/TransactionsToastList'))
      .TransactionsToastList;
  },
  { ssr: false }
);

export const ExtensionLoginButton = dynamic(
  async () => {
    return (
      await import('@terradharitri/sdk-dapp/dist/UI/extension/ExtensionLoginButton')
    ).ExtensionLoginButton;
  },
  { ssr: false }
);

export const WalletConnectLoginButton = dynamic(
  async () => {
    return (
      await import(
        '@terradharitri/sdk-dapp/dist/UI/walletConnect/WalletConnectLoginButton'
      )
    ).WalletConnectLoginButton;
  },
  { ssr: false }
);

export const LedgerLoginButton = dynamic(
  async () => {
    return (await import('@terradharitri/sdk-dapp/dist/UI/ledger/LedgerLoginButton'))
      .LedgerLoginButton;
  },
  { ssr: false }
);

export const WebWalletLoginButton = dynamic(
  async () => {
    return (
      await import('@terradharitri/sdk-dapp/dist/UI/webWallet/WebWalletLoginButton')
    ).WebWalletLoginButton;
  },
  { ssr: false }
);

export const FormatAmount = dynamic(
  async () => {
    return (await import('@terradharitri/sdk-dapp/dist/UI/FormatAmount')).FormatAmount;
  },
  { ssr: false }
);
