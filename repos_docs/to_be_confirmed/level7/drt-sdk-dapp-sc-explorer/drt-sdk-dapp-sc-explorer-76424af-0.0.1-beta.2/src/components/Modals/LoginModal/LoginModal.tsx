import React, { useState } from 'react';
import { faArrowRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ExtensionLoginButton,
  LedgerLoginButton,
  WalletConnectLoginButton,
  CrossWindowLoginButton
} from '@terradharitri/sdk-dapp/dist/UI';
import { isWindowAvailable } from '@terradharitri/sdk-dapp/dist/utils/isWindowAvailable';
import classNames from 'classnames';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { useUserActionDispatch, useSCExplorerContext } from 'contexts';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { UserActionDispatchTypeEnum } from 'types';

import DeFiWallet from './assets/extension-defi-wallet.svg';
import LedgerWallet from './assets/ledger-wallet.svg';
import MobileWallet from './assets/mobile-wallet.svg';
import WebWallet from './assets/web-wallet.svg';

import { Modal } from '../Modal';

enum LoginContainersTypesEnum {
  walletConnect = 'walletConnect',
  ledger = 'ledger',
  none = 'none'
}

export const UnlockTitle = ({ styles }: WithStylesImportType) => (
  <div className={classNames(styles?.unlockTitle)}>
    Connect to a wallet
    <OverlayTrigger
      placement='top'
      delay={{ show: 250, hide: 400 }}
      overlay={(props) => (
        <Tooltip id='connect-to-wallet-tooltip' {...props}>
          Connect securely using one of the provided options
        </Tooltip>
      )}
    >
      <FontAwesomeIcon icon={faInfoCircle} className='i-icon ' />
    </OverlayTrigger>
  </div>
);

export const LoginModalComponent = ({
  globalStyles,
  styles
}: WithStylesImportType) => {
  const userActionDispatch = useUserActionDispatch();
  const { userActionsState, config } = useSCExplorerContext();
  const { loginModalState } = userActionsState;
  const { loginModalOpen } = loginModalState ?? {};
  const [openedLoginContainerType, setOpenedContainerType] = useState(
    LoginContainersTypesEnum.none
  );

  const onClose = () => {
    userActionDispatch({
      type: UserActionDispatchTypeEnum.setLoginModalState,
      loginModalState: { loginModalOpen: false }
    });
    setOpenedContainerType(LoginContainersTypesEnum.none);
  };

  const loginParams = {
    callbackRoute: isWindowAvailable() ? window?.location?.pathname : '/',
    redirectAfterLogin: false,
    wrapContentInsideModal: false,
    hideButtonWhenModalOpens: true,
    shouldRenderDefaultCss: false,
    className: classNames(globalStyles?.button, styles?.buttonLoginProvider),
    nativeAuth: true,
    onLoginRedirect: () => {
      onClose();
    },
    ...config.loginParams
  };

  function handleOpenWalletConnect() {
    setOpenedContainerType(LoginContainersTypesEnum.walletConnect);
  }

  function handleOpenLedgerLogin() {
    setOpenedContainerType(LoginContainersTypesEnum.ledger);
  }

  function getLoginTitle() {
    switch (openedLoginContainerType) {
      case LoginContainersTypesEnum.walletConnect:
        return 'xPortal Login';
      case LoginContainersTypesEnum.ledger:
        return 'Login with Ledger';
      default:
        return <UnlockTitle styles={styles} />;
    }
  }

  function renderLoginButton(
    content: React.ReactNode,
    containerType = LoginContainersTypesEnum.none
  ) {
    const shouldRender =
      openedLoginContainerType == LoginContainersTypesEnum.none ||
      containerType === openedLoginContainerType;
    return shouldRender ? content : null;
  }

  return (
    <Modal
      show={loginModalOpen}
      onClose={onClose}
      className={styles?.loginModal}
      title={getLoginTitle()}
    >
      <div className={styles?.loginModal}>
        {renderLoginButton(
          <ExtensionLoginButton {...loginParams}>
            <div className={classNames(styles?.buttonLoginProviderMethod)}>
              <div className={classNames(styles?.buttonLoginProviderTitle)}>
                <DeFiWallet height='20' style={{ width: '1.8rem' }} />
                DharitrI DeFi Wallet
              </div>
            </div>

            <FontAwesomeIcon icon={faArrowRight} className='arrow' />
          </ExtensionLoginButton>
        )}

        {renderLoginButton(
          <WalletConnectLoginButton
            onContentShow={handleOpenWalletConnect}
            title=''
            {...loginParams}
          >
            <div className={classNames(styles?.buttonLoginProviderMethod)}>
              <div className={classNames(styles?.buttonLoginProviderTitle)}>
                <MobileWallet height='20' style={{ width: '1.8rem' }} />
                xPortal App
              </div>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className='arrow' />
          </WalletConnectLoginButton>,
          LoginContainersTypesEnum.walletConnect
        )}

        {renderLoginButton(
          <LedgerLoginButton
            loginButtonText={''}
            onContentShow={handleOpenLedgerLogin}
            innerLedgerComponentsClasses={{
              ledgerProgressBarClassNames: {
                ledgerProgressBarThumbClassName: 'ledger-progressbar-thumb',
                ledgerProgressBarTrackClassName: 'ledger-progressbar-track'
              },
              addressTableClassNames: {
                ledgerModalTableItemClassName: 'ledger-address-row',
                ledgerModalTableSelectedItemClassName:
                  'ledger-address-row-selected',
                ledgerModalTableHeadClassName: 'ledger-address-header',
                ledgerModalTableNavigationButtonClassName:
                  'ledger-address-navigation-button'
              },
              ledgerConnectClassNames: {
                ledgerModalButtonClassName: 'ledger-connect-button',
                ledgerModalIconClassName: 'ledger-connect-icon'
              },
              confirmAddressClassNames: {
                ledgerModalConfirmDescriptionClassName:
                  'ledger-confirm-address-description',
                ledgerModalConfirmFooterClassName:
                  'ledger-confirm-address-footer',
                ledgerModalConfirmDataClassName: 'ledger-confirm-address-data'
              }
            }}
            {...loginParams}
          >
            <div className={classNames(styles?.buttonLoginProviderMethod)}>
              <div className={classNames(styles?.buttonLoginProviderTitle)}>
                <LedgerWallet height='20' style={{ width: '1.8rem' }} />
                Ledger
              </div>
            </div>

            <FontAwesomeIcon icon={faArrowRight} className='arrow' />
          </LedgerLoginButton>,
          LoginContainersTypesEnum.ledger
        )}

        {renderLoginButton(
          <CrossWindowLoginButton {...loginParams}>
            <div className={classNames(styles?.buttonLoginProviderMethod)}>
              <div className={classNames(styles?.buttonLoginProviderTitle)}>
                <WebWallet height='20' style={{ width: '1.8rem' }} />
                DharitrI Web Wallet
              </div>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className='arrow' />
          </CrossWindowLoginButton>
        )}
      </div>
    </Modal>
  );
};

export const LoginModal = withStyles(LoginModalComponent, {
  ssrStyles: () => import('components/Modals/LoginModal/styles.module.scss'),
  clientStyles: () =>
    require('components/Modals/LoginModal/styles.module.scss').default
});
