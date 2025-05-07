'use client';

import React, { PropsWithChildren } from 'react';
import { useGetIsLoggedIn } from '@terradharitri/sdk-dapp/dist/hooks';
import { useRouter } from 'next/navigation';
import { routeNames } from '@/routes';

export const AuthRedirectWrapper = ({ children }: PropsWithChildren) => {
  const isLoggedIn = useGetIsLoggedIn();
  const router = useRouter();

  if (isLoggedIn) {
    router.push(routeNames.dashboard);
    return null;
  }

  return <>{children}</>;
};
