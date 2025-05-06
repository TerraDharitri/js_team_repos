import { nativeAuth } from '@terradharitri/sdk-dapp/dist/services/nativeAuth/nativeAuth';
import { replyToDapp as originalReplyToDapp } from '@terradharitri/sdk-js-web-wallet-io/out/replyToDapp/replyToDapp';
import { ExtendedReplyWithPostMessageType, ReplyWithRedirectType } from 'types';

export { getRewaLabel } from '@terradharitri/sdk-dapp/dist/utils/network/getRewaLabel';
export { getTransactions } from '@terradharitri/sdk-dapp/dist/apiCalls/transactions/getTransactions';
export { sendTransactions } from '@terradharitri/sdk-dapp/dist/services/transactions/sendTransactions';
export { sendBatchTransactions as sendBatchTransactionsSdkDapp } from '@terradharitri/sdk-dapp/dist/services/transactions/sendBatchTransactions';
export { refreshAccount } from '@terradharitri/sdk-dapp/dist/utils/account/refreshAccount';
export { logout } from '@terradharitri/sdk-dapp/dist/utils/logout';
export { signTransactions } from '@terradharitri/sdk-dapp/dist/services/transactions/signTransactions';
export { trimUsernameDomain } from '@terradharitri/sdk-dapp/dist/hooks/account/helpers';
export { getAccount } from '@terradharitri/sdk-dapp/dist/utils/account/getAccount';
export { getAddress } from '@terradharitri/sdk-dapp/dist/utils/account/getAddress';
export { newTransaction } from '@terradharitri/sdk-dapp/dist/models';
export { useLoginService } from '@terradharitri/sdk-dapp/dist/hooks/login/useLoginService';
export { decodeNativeAuthToken } from '@terradharitri/sdk-dapp/dist/services/nativeAuth/helpers/decodeNativeAuthToken';
export { getIsNativeAuthSingingForbidden } from '@terradharitri/sdk-dapp/dist/services/nativeAuth/helpers/getIsNativeAuthSingingForbidden';
export { decodeLoginToken } from '@terradharitri/sdk-dapp/dist/services/nativeAuth/helpers/decodeLoginToken';
export { getWebviewToken } from '@terradharitri/sdk-dapp/dist/utils/account/getWebviewToken';
export { getAccountProviderType } from '@terradharitri/sdk-dapp/dist/utils/account/getAccountProviderType';

const { getToken } = nativeAuth();
export { getToken };
export { loginWithExternalProvider } from '@terradharitri/sdk-dapp/dist/utils/account/loginWithExternalProvider';
export { addressIsValid } from '@terradharitri/sdk-dapp/dist/utils/account/addressIsValid';
export { getInterpretedTransaction } from '@terradharitri/sdk-dapp/dist/utils/transactions/getInterpretedTransaction';
export { formatAmount } from '@terradharitri/sdk-dapp/dist/utils/operations/formatAmount';
export { parseAmount } from '@terradharitri/sdk-dapp/dist/utils/operations/parseAmount';
export { getIsProviderEqualTo } from '@terradharitri/sdk-dapp/dist/utils/account/getIsProviderEqualTo';
export { removeTransactionsToSign } from '@terradharitri/sdk-dapp/dist/services/transactions/clearTransactions';
export { extractSessionId } from '@terradharitri/sdk-dapp/dist/hooks/transactions/helpers/extractSessionId';
export { checkIsValidSender } from '@terradharitri/sdk-dapp/dist/hooks/transactions/helpers/checkIsValidSender';
export { useAddressScreens } from '@terradharitri/sdk-dapp/dist/hooks/login/useAddressScreens';
export { useBatchTransactionsTracker } from '@terradharitri/sdk-dapp/dist/hooks/transactions/batch/tracker/useBatchTransactionsTracker';
export { useCheckBatch } from '@terradharitri/sdk-dapp/dist/hooks/transactions/batch/tracker/useCheckBatch';
export { useGetAccount } from '@terradharitri/sdk-dapp/dist/hooks/account/useGetAccount';
export { useGetAccountInfo } from '@terradharitri/sdk-dapp/dist/hooks/account/useGetAccountInfo';
export { useGetAccountProvider } from '@terradharitri/sdk-dapp/dist/hooks/account/useGetAccountProvider';
export { useGetActiveTransactionsStatus } from '@terradharitri/sdk-dapp/dist/hooks/transactions/useGetActiveTransactionsStatus';
export { useGetIsLoggedIn } from '@terradharitri/sdk-dapp/dist/hooks/account/useGetIsLoggedIn';
export { useGetIsWalletConnectV2Initialized } from '@terradharitri/sdk-dapp/dist/hooks/account/useGetIsWalletConnectV2Initialized';
export { useGetLastPendingTransactionHash } from '@terradharitri/sdk-dapp/dist/hooks/transactions/useGetLastPendingTransactionHash';
export { useGetLastSignedMessageSession } from '@terradharitri/sdk-dapp/dist/hooks/signMessage/useGetLastSignedMessageSession';
export { useGetSignMessageSession } from '@terradharitri/sdk-dapp/dist/hooks/signMessage/useGetSignMessageSession';
export { useGetLoginInfo } from '@terradharitri/sdk-dapp/dist/hooks/account/useGetLoginInfo';
export { useGetNetworkConfig } from '@terradharitri/sdk-dapp/dist/hooks/useGetNetworkConfig';
export { useGetPendingTransactions } from '@terradharitri/sdk-dapp/dist/hooks/transactions/useGetPendingTransactions';
export { useGetSignMessageInfoStatus } from '@terradharitri/sdk-dapp/dist/hooks/signMessage/useGetSignedMessageStatus';
export { useGetSignTransactionsError } from '@terradharitri/sdk-dapp/dist/hooks/transactions/useGetSignTransactionsError';
export { useGetSignedTransactions } from '@terradharitri/sdk-dapp/dist/hooks/transactions/useGetSignedTransactions';
export { useSendBatchTransactions } from '@terradharitri/sdk-dapp/dist/hooks/transactions/batch/useSendBatchTransactions';
export { useSignMessage } from '@terradharitri/sdk-dapp/dist/hooks/signMessage/useSignMessage';
export { useSignTransactions } from '@terradharitri/sdk-dapp/dist/hooks/transactions/useSignTransactions';
export { useSignTransactionsCommonData } from '@terradharitri/sdk-dapp/dist/hooks/transactions/useSignTransactionsCommonData';
export { useSignTransactionsWithDevice } from '@terradharitri/sdk-dapp/dist/hooks/transactions/useSignTransactionsWithDevice';
export { useSignTransactionsWithLedger } from '@terradharitri/sdk-dapp/dist/hooks/transactions/useSignTransactionsWithLedger';
export { useTrackTransactionStatus } from '@terradharitri/sdk-dapp/dist/hooks/transactions/useTrackTransactionStatus';
export { verifyMessage } from '@terradharitri/sdk-dapp/dist/hooks/signMessage/verifyMessage';
export { useTransactionsTracker } from '@terradharitri/sdk-dapp/dist/hooks/transactions/useTransactionsTracker';
export { useGetAccountFromApi } from '@terradharitri/sdk-dapp/dist/apiCalls/accounts/useGetAccountFromApi';
export {
  deleteTransactionToast,
  removeAllSignedTransactions,
  removeAllTransactionsToSign
} from '@terradharitri/sdk-dapp/dist/services/transactions/clearTransactions';
export {
  setTransactionsDisplayInfoState,
  setTransactionsToSignedState
} from '@terradharitri/sdk-dapp/dist/services/transactions/updateSignedTransactions';
export { sendBatchTransactions } from '@terradharitri/sdk-dapp/dist/services/transactions/sendBatchTransactions';
export { useAxiosInterceptorContext } from '@terradharitri/sdk-dapp/dist/wrappers/AxiosInterceptorContext';
export { storage } from '@terradharitri/sdk-dapp/dist/utils/storage';
export { addNewCustomToast } from '@terradharitri/sdk-dapp/dist/utils/toasts';
export {
  maxDecimals,
  stringIsFloat
} from '@terradharitri/sdk-dapp/dist/utils/validation';

export const replyToDapp: (
  props: {
    callbackUrl: string;
    webwiewApp?: HTMLIFrameElement | null;
    postMessageData?: ExtendedReplyWithPostMessageType;
    transactionData?: ReplyWithRedirectType['transactionData'];
  },
  extensionReplyToDapp?: (props: ExtendedReplyWithPostMessageType) => void
) => void = originalReplyToDapp as any; // use as any to allow extending input params
