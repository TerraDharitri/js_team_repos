import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { PartialTokenType } from '@terradharitri/sdk-dapp-form/src/types';
import { faucetSettingEndpoint, faucetEndpoint } from 'config/config.devnet';
import { getAxiosConfig, getExtrasApi } from 'helpers';
import { formatAmount, getRewaLabel, stringIsInteger } from 'lib';
import { DECIMALS, DIGITS, TOKENS_ENDPOINT, ZERO } from 'localConstants';
import { RootApi } from 'redux/rootApi';

interface FaucetSettingsType {
  address: string;
  amount: string;
  recaptchaBypass?: boolean;
  token?: string;
  tokenAmount?: string;
}

export interface FaucetSettingsReturnType {
  recaptchaBypass?: boolean;
  token: string;
}

const faucetEndpoints = RootApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getFaucetSettings: builder.query<FaucetSettingsReturnType, void>({
      async queryFn(_, _queryApi, _extraOptions, fetchWithBQ) {
        const rewaLabel = getRewaLabel();

        const settingsData = await fetchWithBQ({
          ...getAxiosConfig(faucetSettingEndpoint),
          baseURL: getExtrasApi()
        });

        if (settingsData.error) {
          return { error: settingsData.error as FetchBaseQueryError };
        }

        const { token, tokenAmount, amount, recaptchaBypass } =
          settingsData.data as FaucetSettingsType;

        const rewaAmount = formatAmount({
          input: stringIsInteger(amount) ? amount : ZERO,
          digits: DIGITS,
          decimals: DECIMALS,
          showLastNonZeroDecimal: false,
          addCommas: true
        });

        const faucetTokenList = `${rewaAmount} ${rewaLabel}`;

        if (!token || !tokenAmount) {
          return { data: { token: faucetTokenList, recaptchaBypass } };
        }

        const tokenData = await fetchWithBQ({
          ...getAxiosConfig(`/${TOKENS_ENDPOINT}/${token}`)
        });

        if (tokenData.error) {
          return { error: tokenData.error as FetchBaseQueryError };
        }

        const { decimals } = tokenData.data as PartialTokenType;

        const denominatedTokenAmount = formatAmount({
          input: tokenAmount,
          decimals,
          digits: DIGITS,
          showLastNonZeroDecimal: true,
          addCommas: true
        });

        return {
          data: {
            token: `${faucetTokenList} & ${denominatedTokenAmount} ${token}`,
            recaptchaBypass
          }
        };
      }
    }),
    requestFunds: builder.mutation<void, string>({
      query: (captcha: string) => ({
        baseURL: getExtrasApi(),
        url: faucetEndpoint,
        method: 'POST',
        data: { captcha },
        validateStatus: (status) => status >= 200 && status < 300
      })
    })
  })
});

export const { useGetFaucetSettingsQuery, useRequestFundsMutation } =
  faucetEndpoints;
