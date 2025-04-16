import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'reduxStore/store';
import { WalletChainsEnum } from 'types/wallet';

const walletsInfoSelector = (state: RootState) => state.wallets;

export const activeWalletSelector = createSelector(
  walletsInfoSelector,
  (state) => state.activeWallet
);

export const dharitriAccountSelector = createSelector(
  activeWalletSelector,
  (activeWallet) => {
    return activeWallet?.accounts.find(
      (account) => account?.coin === WalletChainsEnum.dharitri
    );
  }
);

export const dharitriAddressSelector = createSelector(
  dharitriAccountSelector,
  (wallet) => {
    return wallet?.address ?? '';
  }
);
