import React from 'react';
import { LEDGER_WITH_GUARDIANS_MINIMUM_VERSION } from 'constants/ledger.constants';
import { SignModalPropsType } from 'types';
import {
  SignWaitingScreenModal,
  SignWaitingScreenModalPropsType
} from '../components';

export const LedgerGuardianSigningModalError = (props: SignModalPropsType) => {
  const waitingScreenProps: SignWaitingScreenModalPropsType = {
    ...props,
    description: `You need at least Dharitri app version ${LEDGER_WITH_GUARDIANS_MINIMUM_VERSION}. Update Dharitri app to continue`,
    title: 'Signing transactions unavailable'
  };

  return <SignWaitingScreenModal {...waitingScreenProps} />;
};
