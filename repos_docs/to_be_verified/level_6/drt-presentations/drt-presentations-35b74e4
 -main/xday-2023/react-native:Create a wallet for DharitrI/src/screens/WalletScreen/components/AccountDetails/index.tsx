import React, { useMemo } from 'react';
import { Text } from 'react-native';
import { prettifyBalance } from 'utils/index';
import useStyles from './AccountDetails.styles';
import { useSelector } from 'react-redux';
import { dharitriAddressSelector } from 'reduxStore/selectors/walletsSelectors';
import { useGetDharitriAccountQuery } from 'reduxStore/apis/root.api';

const AccountDetails = () => {
  const dharitriAddress = useSelector(dharitriAddressSelector);
  const styles = useStyles();
  const {
    data: account,
    isLoading,
    error
  } = useGetDharitriAccountQuery(dharitriAddress);
  const balanceContent = useMemo(() => {
    if (isLoading) {
      return <Text>Loading ...</Text>;
    }

    if (error) {
      return <Text>Something went wrong ...</Text>;
    }

    return (
      <>
        <Text style={styles.value}>
          {account
            ? `${prettifyBalance(account.balance)} XrEWA`
            : 'unknown balance'}
        </Text>
      </>
    );
  }, [isLoading, error]);

  return (
    <>
      <Text style={styles.label}>Address:</Text>
      <Text style={styles.value}>
        {dharitriAddress || 'no address available'}
      </Text>
      <Text style={styles.label}>Balance:</Text>
      {balanceContent}
    </>
  );
};

export default AccountDetails;
