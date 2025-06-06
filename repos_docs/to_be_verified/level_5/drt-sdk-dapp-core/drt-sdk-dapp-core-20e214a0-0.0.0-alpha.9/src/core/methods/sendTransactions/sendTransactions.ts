import { Transaction } from '@terradharitri/sdk-core/out';
import { AxiosError } from 'axios';
import { sendSignedTransactions } from './helpers/sendSignedTransactions';
import { createTransactionsSession } from 'store/actions/transactions/transactionsActions';

export async function sendTransactions(
  transactions: Transaction[] = []
): Promise<string | null> {
  if (transactions.length === 0) {
    return null;
  }

  try {
    const sentTransactions = await sendSignedTransactions(transactions);
    const sessionId = createTransactionsSession({
      transactions: sentTransactions
    });

    return sessionId;
  } catch (error) {
    const responseData = <{ message: string }>(
      (error as AxiosError).response?.data
    );
    throw responseData?.message ?? (error as any).message;
  }
}
