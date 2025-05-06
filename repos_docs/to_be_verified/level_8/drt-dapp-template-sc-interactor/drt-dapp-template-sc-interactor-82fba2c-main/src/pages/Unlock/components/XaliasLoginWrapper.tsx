import React from 'react';
import { useXaliasLogin } from '@terradharitri/sdk-dapp/hooks/login/useXaliasLogin';
import { WebWalletLoginButtonPropsType } from '@terradharitri/sdk-dapp/UI/webWallet/WebWalletLoginButton/WebWalletLoginButton';
import { XaliasCrossWindowLoginButton } from 'components/sdkDappComponents';
import { DualLoginButton } from './DualLoginButton';

export const XaliasLoginWrapper = ({
  ...commonProps
}: WebWalletLoginButtonPropsType) => {
  const [onInitiateLogin] = useXaliasLogin({
    ...commonProps
  });

  return (
    <DualLoginButton label='xAlias' onInitiateLogin={onInitiateLogin}>
      <XaliasCrossWindowLoginButton
        loginButtonText='xAlias'
        data-testid='xAliasLoginBtn'
        className='!mr-0 !rounded-none !rounded-l-md'
        {...commonProps}
      />
    </DualLoginButton>
  );
};
