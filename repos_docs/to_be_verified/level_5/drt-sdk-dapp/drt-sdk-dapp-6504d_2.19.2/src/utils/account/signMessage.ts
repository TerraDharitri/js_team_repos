import { SignableMessage, Address } from '@terradharitri/sdk-core';
import { getAccountProvider } from 'providers';
import { getAddress } from 'utils/account/getAddress';
import { getWindowLocation } from 'utils/window/getWindowLocation';

export interface SignMessageType {
  message: string;
  callbackRoute?: string;
}

export const signMessage = async ({
  message,
  callbackRoute
}: SignMessageType) => {
  const address = await getAddress();
  const provider = getAccountProvider();

  const { origin } = getWindowLocation();
  const callbackUrl = window?.location
    ? `${origin}${callbackRoute}`
    : `${callbackRoute}`;
  const signableMessage = new SignableMessage({
    address: new Address(address),
    message: Buffer.from(message, 'ascii')
  });
  const signedMessage = await provider.signMessage(signableMessage, {
    callbackUrl: encodeURIComponent(callbackUrl)
  });

  return signedMessage;
};
