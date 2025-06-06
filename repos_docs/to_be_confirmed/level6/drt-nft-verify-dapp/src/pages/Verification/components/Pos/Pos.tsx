import React, { useEffect, useState } from 'react';

import { useGetIsLoggedIn } from '@terradharitri/sdk-dapp/hooks';
import { nativeAuth } from '@terradharitri/sdk-dapp/services/nativeAuth';
import {
  WalletConnectLoginButton,
  WalletConnectLoginButtonPropsType
} from '@terradharitri/sdk-dapp/UI/walletConnect/WalletConnectLoginButton';
import { useLocation } from 'react-router-dom';
import { walletConnectV2ProjectId } from 'config';
import { routeNames } from 'routes';

export const Pos = () => {
  const { search } = useLocation();
  const isLoggedIn = useGetIsLoggedIn();

  const [token, setToken] = useState('');

  const getRef = async (e: HTMLDivElement) => {
    if (!e) {
      return;
    }

    const buttonRef = e.querySelector('button');

    if (buttonRef) {
      setTimeout(() => {
        buttonRef.click();
      }, 0.01);
    }

    return e;
  };

  const getToken = async () => {
    const client = nativeAuth();
    const loginToken = await client.initialize();

    setToken(loginToken);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      const interval = setInterval(() => getToken(), 6000);

      return () => clearInterval(interval);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    getToken();
  }, []);

  const loginProps: WalletConnectLoginButtonPropsType = {
    callbackRoute: `${routeNames.result}${search}`,
    logoutRoute: `${routeNames.verify}${search}`,
    token,
    nativeAuth: true,
    hideButtonWhenModalOpens: true,
    wrapContentInsideModal: false,
    ...(walletConnectV2ProjectId && {
      isWalletConnectV2: true
    })
  };

  if (!token) {
    return null;
  }

  return (
    <div className='pos-container'>
      <div className='verify-ownership card'>
        <h1>Scan with xPortal</h1>
        <div ref={getRef}>
          <WalletConnectLoginButton {...loginProps} />
        </div>
      </div>
    </div>
  );
};
