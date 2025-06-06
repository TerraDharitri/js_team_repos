import { useEffect } from 'react';
import { useGetAccountInfo } from '@terradharitri/sdk-dapp/dist/hooks/account/useGetAccountInfo';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const { address } = useGetAccountInfo();
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(address ? '/dashboard' : '/unlock');
  };

  useEffect(handleRedirect, [address]);

  return null;
};
