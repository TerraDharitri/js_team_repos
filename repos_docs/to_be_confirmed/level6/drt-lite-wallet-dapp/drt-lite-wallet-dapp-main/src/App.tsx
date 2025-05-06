import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import {
  AxiosInterceptor,
  AxiosInterceptorContext,
  DappProvider
} from 'components';

import { apiTimeout, walletConnectV2ProjectId } from 'config/config.devnet';
import { provider } from 'helpers/app';
import { getWebviewToken } from 'lib';
import { setIsWebview } from 'redux/slices';
import { routeNames } from 'routes';
import { BatchTransactionsContextProvider } from 'wrappers';
import { useSetupHrp } from './hooks';
import { networkSelector } from './redux/selectors';
import { persistor, store } from './redux/store';

const isWebview = Boolean(getWebviewToken());

const AppContent = () => {
  const { activeNetwork } = useSelector(networkSelector);
  useSetupHrp();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isWebview) {
      dispatch(setIsWebview(true));
    }
  }, [isWebview]);

  return (
    <DappProvider
      environment={activeNetwork.id}
      externalProvider={isWebview ? undefined : provider} // ✅ THIS is line 39
      customNetworkConfig={{
        name: 'customConfig',
        apiAddress: activeNetwork.apiAddress,
        apiTimeout,
        walletConnectV2ProjectId
      }}
      dappConfig={{
        logoutRoute: routeNames.unlock,
        shouldUseWebViewProvider: isWebview
      }}
      customComponents={{
        transactionTracker: {
          props: {
            onSuccess: (sessionId: string) => {
              console.log(`Session ${sessionId} successfully completed`);
            },
            onFail: (sessionId: string, errorMessage: string) => {
              console.log(`Session ${sessionId} failed. ${errorMessage ?? ''}`);
            }
          }
        }
      }}
      children={undefined}
    >
      {/* Add children if needed */}
    </DappProvider>
  );
};

export const MainApp = () => {
  const { activeNetwork } = useSelector(networkSelector);

  return (
    <AxiosInterceptorContext.Provider>
      <AxiosInterceptorContext.Interceptor
        authenticatedDomains={activeNetwork.sampleAuthenticatedDomains}
      >
        <AxiosInterceptor>
          <BatchTransactionsContextProvider>
            <AppContent />
          </BatchTransactionsContextProvider>
        </AxiosInterceptor>
      </AxiosInterceptorContext.Interceptor>
    </AxiosInterceptorContext.Provider>
  );
};

export const ProviderApp = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <MainApp />
    </PersistGate>
  </Provider>
);

export const App = () => (
  <Router>
    <ProviderApp />
  </Router>
);
