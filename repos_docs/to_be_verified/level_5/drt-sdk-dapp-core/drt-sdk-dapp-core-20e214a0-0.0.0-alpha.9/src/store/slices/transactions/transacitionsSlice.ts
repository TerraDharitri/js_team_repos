import { StateCreator } from 'zustand/vanilla';
import { StoreType, MutatorsIn } from 'store/store.types';
import { TransactionsSliceType } from './transacitionsSlice.types';

const initialState: TransactionsSliceType = {};

function getTransactionsSlice(): StateCreator<
  StoreType,
  MutatorsIn,
  [],
  TransactionsSliceType
> {
  return () => initialState;
}

export const transactionsSlice = getTransactionsSlice();
