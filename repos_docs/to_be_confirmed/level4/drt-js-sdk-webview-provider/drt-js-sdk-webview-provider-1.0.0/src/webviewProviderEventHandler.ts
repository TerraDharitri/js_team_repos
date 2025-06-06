import { getTargetOrigin } from './helpers/getTargetOrigin';
import { WindowProviderResponseEnums } from '@terradharitri/sdk-dapp-utils/out/enums/windowProviderEnums';
import { ReplyWithPostMessagePayloadType } from '@terradharitri/sdk-dapp-utils/out/types/windowProviderTypes';
import { isMobileWebview } from './helpers/isMobileWebview';
import { getSafeWindow } from './helpers/getSafeWindow';
import { getSafeDocument } from './helpers/getSafeDocument';

export type WebviewProviderEventDataType<
  T extends WindowProviderResponseEnums
> = {
  type: T;
  payload: ReplyWithPostMessagePayloadType<T>;
};

export const webviewProviderEventHandler = <
  T extends WindowProviderResponseEnums
>(
  action: T,
  resolve: (value: WebviewProviderEventDataType<T>) => void
) => {
  return (event: MessageEvent<WebviewProviderEventDataType<T> | string>) => {
    let eventData = event.data;

    try {
      eventData =
        isMobileWebview() && typeof eventData === 'string'
          ? JSON.parse(eventData)
          : eventData;
    } catch (err) {
      console.error('error parsing eventData', eventData);
    }

    const { type, payload } = eventData as {
      type: T;
      payload: ReplyWithPostMessagePayloadType<T>;
    };

    if (!isMobileWebview() && event.origin != getTargetOrigin()) {
      return;
    }

    const isCurrentAction =
      action === type || type === WindowProviderResponseEnums.cancelResponse;

    if (!isCurrentAction) {
      return;
    }

    getSafeWindow().removeEventListener?.(
      'message',
      webviewProviderEventHandler(action, resolve)
    );
    getSafeDocument().removeEventListener?.(
      'message',
      webviewProviderEventHandler(action, resolve)
    );

    resolve({ type, payload });
  };
};
