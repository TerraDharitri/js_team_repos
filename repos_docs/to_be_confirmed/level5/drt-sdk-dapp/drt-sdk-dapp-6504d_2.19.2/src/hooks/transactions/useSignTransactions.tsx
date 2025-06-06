import { useEffect, useRef } from 'react';
import {
  Transaction,
  TransactionOptions,
  TransactionVersion
} from '@terradharitri/sdk-core';

import { ExtensionProvider } from '@terradharitri/sdk-extension-provider';
import {
  ERROR_SIGNING,
  ERROR_SIGNING_TX,
  MISSING_PROVIDER_MESSAGE,
  PROVIDER_NOT_INITIALIZED,
  TRANSACTION_CANCELLED,
  WALLET_SIGN_SESSION
} from 'constants/index';
import { useGetAccount } from 'hooks/account';
import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { useParseSignedTransactions } from 'hooks/transactions/useParseSignedTransactions';
import { getProviderType } from 'providers/utils';

import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  networkSelector,
  signTransactionsCancelMessageSelector
} from 'reduxStore/selectors';
import {
  clearAllTransactionsToSign,
  clearTransactionsInfoForSessionId,
  moveTransactionsToSignedState,
  MoveTransactionsToSignedStatePayloadType,
  setSignTransactionsCancelMessage
} from 'reduxStore/slices';
import {
  LoginMethodsEnum,
  TransactionBatchStatusesEnum
} from 'types/enums.types';

import { builtCallbackUrl } from 'utils/transactions/builtCallbackUrl';
import { parseTransactionAfterSigning } from 'utils/transactions/parseTransactionAfterSigning';
import { getWindowLocation } from 'utils/window/getWindowLocation';

import {
  useSetTransactionNonces,
  getShouldMoveTransactionsToSignedState,
  checkNeedsGuardianSigning
} from './helpers';
import { useSignTransactionsCommonData } from './useSignTransactionsCommonData';

export const useSignTransactions = () => {
  const dispatch = useDispatch();
  const savedCallback = useRef('/');
  const { provider } = useGetAccountProvider();
  const network = useSelector(networkSelector);

  const providerType = getProviderType(provider);
  const isSigningRef = useRef(false);
  const setTransactionNonces = useSetTransactionNonces();
  const { isGuarded } = useGetAccount();

  const signTransactionsCancelMessage = useSelector(
    signTransactionsCancelMessageSelector
  );

  const {
    transactionsToSign,
    error,
    setError,
    hasTransactions,
    onAbort,
    clearTransactionStatusMessage
  } = useSignTransactionsCommonData();

  useParseSignedTransactions(onAbort);

  function clearSignInfo(sessionId?: string) {
    const isExtensionProvider = provider instanceof ExtensionProvider;

    dispatch(clearAllTransactionsToSign());
    dispatch(clearTransactionsInfoForSessionId(sessionId));

    isSigningRef.current = false;

    if (!isExtensionProvider) {
      return;
    }

    clearTransactionStatusMessage();
    ExtensionProvider.getInstance()?.cancelAction?.();
  }

  const onCancel = (errorMessage: string, sessionId?: string) => {
    const isSigningWithWalletConnectV2 =
      providerType === LoginMethodsEnum.walletconnectv2;

    if (isSigningWithWalletConnectV2) {
      errorMessage = TRANSACTION_CANCELLED;
    }

    const isTxCancelled = errorMessage.includes(TRANSACTION_CANCELLED);
    clearSignInfo(sessionId);

    /*
     * this is triggered by abort action,
     * so no need to show error
     */
    if (isTxCancelled) {
      dispatch(setSignTransactionsCancelMessage(TRANSACTION_CANCELLED));
      return;
    }

    setError(errorMessage);
  };

  const signWithWallet = (
    transactions: Array<Transaction>,
    sessionId: string,
    callbackRoute = ''
  ) => {
    const urlParams = { [WALLET_SIGN_SESSION]: sessionId };
    let callbackUrl = callbackRoute;

    if (window?.location) {
      const { search, origin } = getWindowLocation();
      const searchParams = new URLSearchParams(search);
      callbackUrl = `${origin}${callbackRoute}`;

      searchParams.forEach((value, key) => {
        urlParams[key] = value;
      });
    }

    const buildedCallbackUrl = builtCallbackUrl({ callbackUrl, urlParams });

    provider.signTransactions(transactions, {
      callbackUrl: encodeURIComponent(buildedCallbackUrl)
    });
  };

  const signTransactionsWithProvider = async () => {
    if (isSigningRef.current || !transactionsToSign) {
      return;
    }

    const {
      sessionId,
      transactions,
      callbackRoute,
      customTransactionInformation
    } = transactionsToSign;
    const { redirectAfterSign } = customTransactionInformation;
    const { pathname } = getWindowLocation();
    const redirectRoute = callbackRoute || pathname;
    const isCurrentRoute = pathname.includes(redirectRoute);
    const shouldRedirectAfterSign = redirectAfterSign && !isCurrentRoute;

    try {
      const isProviderInitialized = await provider?.init?.();
      if (!isProviderInitialized) {
        return;
      }
    } catch (error) {
      const errorMessage =
        (error as Error)?.message ||
        (error as string) ||
        PROVIDER_NOT_INITIALIZED;
      console.error(errorMessage);

      onCancel(errorMessage);
      return;
    }

    const allowGuardian = !customTransactionInformation.skipGuardian;

    try {
      isSigningRef.current = true;
      const signedTransactions: Transaction[] = await provider.signTransactions(
        isGuarded && allowGuardian
          ? transactions.map((transaction) => {
              transaction.setVersion(TransactionVersion.withTxOptions());
              transaction.setOptions(
                TransactionOptions.withOptions({ guarded: true })
              );
              return transaction;
            })
          : transactions
      );
      isSigningRef.current = false;

      const shouldMoveTransactionsToSignedState =
        getShouldMoveTransactionsToSignedState(signedTransactions);

      if (!shouldMoveTransactionsToSignedState) {
        return;
      }

      const signedTransactionsArray = Object.values(signedTransactions).map(
        (tx) => parseTransactionAfterSigning(tx)
      );

      const { needs2FaSigning, sendTransactionsToGuardian } =
        checkNeedsGuardianSigning({
          transactions: signedTransactions,
          sessionId,
          callbackRoute,
          isGuarded: isGuarded && allowGuardian,
          walletAddress: network.walletAddress
        });

      if (needs2FaSigning) {
        return sendTransactionsToGuardian();
      }

      const payload: MoveTransactionsToSignedStatePayloadType = {
        sessionId,
        transactions: signedTransactionsArray,
        status: TransactionBatchStatusesEnum.signed
      };

      // redirect is delegated to optionalRedirect in TransactionSender
      if (shouldRedirectAfterSign) {
        payload.redirectRoute = redirectRoute;
      }

      dispatch(moveTransactionsToSignedState(payload));
    } catch (error) {
      isSigningRef.current = false;

      const errorMessage =
        (error as Error)?.message || (error as string) || ERROR_SIGNING_TX;
      console.error(errorMessage);

      dispatch(
        moveTransactionsToSignedState({
          sessionId,
          status: TransactionBatchStatusesEnum.cancelled
        })
      );
      onCancel(
        errorMessage.includes('cancel') ? TRANSACTION_CANCELLED : errorMessage,
        sessionId
      );
    }
  };

  const signTransactions = async () => {
    if (!transactionsToSign) {
      return;
    }

    clearTransactionStatusMessage();

    const { sessionId, transactions, callbackRoute } = transactionsToSign;

    if (!provider) {
      console.error(MISSING_PROVIDER_MESSAGE);
      return;
    }

    /*
     * if the transaction is cancelled
     * the callback will go to undefined,
     * we save the most recent one for a valid transaction
     */
    savedCallback.current = callbackRoute || getWindowLocation().pathname;

    try {
      const isSigningWithWebWallet = providerType === LoginMethodsEnum.wallet;

      const transactionsWithIncrementalNonces = await setTransactionNonces(
        transactions
      );

      if (isSigningWithWebWallet) {
        return signWithWallet(
          transactionsWithIncrementalNonces,
          sessionId,
          callbackRoute
        );
      }

      signTransactionsWithProvider();
    } catch (err) {
      const defaultErrorMessage = (err as Error)?.message;
      const errorMessage = defaultErrorMessage || ERROR_SIGNING;
      console.error(errorMessage);

      onCancel(errorMessage, sessionId);

      dispatch(
        moveTransactionsToSignedState({
          sessionId,
          status: TransactionBatchStatusesEnum.cancelled
        })
      );

      console.error(errorMessage, err);
    }
  };
  useEffect(() => {
    if (hasTransactions) {
      signTransactions();
    } else {
      isSigningRef.current = false;
    }
  }, [transactionsToSign, hasTransactions]);

  return {
    error,
    canceledTransactionsMessage: signTransactionsCancelMessage,
    onAbort,
    hasTransactions,
    callbackRoute: savedCallback.current,
    sessionId: transactionsToSign?.sessionId,
    transactions: transactionsToSign?.transactions
  };
};
