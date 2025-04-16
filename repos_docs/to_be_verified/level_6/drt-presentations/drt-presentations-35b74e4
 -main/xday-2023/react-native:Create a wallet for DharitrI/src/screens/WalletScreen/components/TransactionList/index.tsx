import React from 'react';
import { View, Text } from 'react-native';
import { prettifyBalance } from 'utils/index';
import useStyles from './TransactionList.styles';
import { useGetDharitriTransactionsQuery } from 'reduxStore/apis/root.api';

import { useSelector } from 'react-redux';
import { dharitriAddressSelector } from 'reduxStore/selectors/walletsSelectors';
import { ExpandedTransactionType } from 'types/transactions';

const TransactionList = () => {
  const styles = useStyles();
  const dharitriAddress = useSelector(dharitriAddressSelector);
  const {
    data: transactions,
    isLoading,
    error
  } = useGetDharitriTransactionsQuery(dharitriAddress);

  if (isLoading || transactions == null) {
    return <Text>Loading ...</Text>;
  }
  if (error) {
    return <Text>Something went wrong ...</Text>;
  }

  const renderTransactionItem = (item: ExpandedTransactionType) => {
    return (
      <View key={item.txHash} style={styles.transactionContainer}>
        <Text>
          <Text style={styles.label}>Amount:</Text>{' '}
          {prettifyBalance(item.value)} XrEWA
        </Text>
        <Text style={styles.label}>Sender: </Text>
        <Text>{item.receiver}</Text>
        <Text style={styles.label}>Receiver: </Text>
        <Text>{item.sender}</Text>
      </View>
    );
  };
  return (
    //we need the fragment because of TS
    <View style={styles.container}>
      <Text style={styles.label}>Last 10 transactions</Text>
      {transactions.map(renderTransactionItem)}
    </View>
  );
};

export default TransactionList;
