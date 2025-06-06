import React from 'react';
import { faCopy, faBolt, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CopyButton } from '@terradharitri/sdk-dapp/dist/UI/CopyButton';
import { Trim } from '@terradharitri/sdk-dapp/dist/UI/Trim';
import { isWindowAvailable } from '@terradharitri/sdk-dapp/dist/utils/isWindowAvailable';
import { logout } from '@terradharitri/sdk-dapp/dist/utils/logout';
import classNames from 'classnames';

import { useSCExplorerContext, useUserActionDispatch } from 'contexts';
import { withStyles } from 'hocs/withStyles';
import { UserActionDispatchTypeEnum, LoginButtonUIType } from 'types';

export const LoginButtonComponent = (props: LoginButtonUIType) => {
  const { customClassNames, icons, accountInfo } = useSCExplorerContext();
  const { isLoggedIn, address } = accountInfo;
  const { className, globalStyles, styles } = props;
  const userActionDispatch = useUserActionDispatch();

  const {
    copyIcon = faCopy,
    connectIcon = faBolt,
    disconnectIcon = faPowerOff
  } = icons ?? {};

  const onOpenModalClick = () => {
    userActionDispatch({
      type: UserActionDispatchTypeEnum.setLoginModalState,
      loginModalState: { loginModalOpen: true }
    });
  };

  const onDisconnectClick = () => {
    logout(isWindowAvailable() ? window.location.href : '/');
  };

  return (
    <>
      {Boolean(address && isLoggedIn) ? (
        <div className={classNames(styles?.connectedWrapper)}>
          <Trim text={address} />
          <CopyButton text={address} copyIcon={copyIcon} />
          <button
            type='button'
            className={classNames(globalStyles?.button, styles?.buttonLogout)}
            onClick={onDisconnectClick}
          >
            <FontAwesomeIcon icon={disconnectIcon} />
          </button>
        </div>
      ) : (
        <div className={classNames(styles?.disconnectedWrapper)}>
          <div className={classNames(styles?.disconnectedWrapperText)}>
            Connect your wallet to interact with this smart contract
          </div>
          <button
            type='button'
            onClick={onOpenModalClick}
            className={classNames(
              className,
              globalStyles?.button,
              globalStyles?.buttonPrimary,
              customClassNames?.buttonClassName,
              customClassNames?.buttonPrimaryClassName,
              styles?.buttonLogin
            )}
          >
            <FontAwesomeIcon icon={connectIcon} />
            Connect Wallet
          </button>
        </div>
      )}
    </>
  );
};

export const LoginButton = withStyles(LoginButtonComponent, {
  ssrStyles: () => import('components/LoginButton/styles.module.scss'),
  clientStyles: () =>
    require('components/LoginButton/styles.module.scss').default
});
