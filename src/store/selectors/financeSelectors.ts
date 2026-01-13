// src/store/selectors/financeSelectors.ts
import type { RootState } from '../index';

export const selectAllTransactions = (state: RootState) => state.finance.transactions;

export const selectSummary = (state: RootState) => {
  return state.finance.transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposito') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );
};