// src/store/slices/financeSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Transaction } from '../../types/Transaction';

interface FinanceState {
  transactions: Transaction[];
}

const loadTransactions = (): Transaction[] => {
  const data = localStorage.getItem('@MyFinance:transactions');
  return data ? JSON.parse(data) : [];
};

const initialState: FinanceState = {
  transactions: loadTransactions(),
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
      localStorage.setItem('@MyFinance:transactions', JSON.stringify(state.transactions));
    },
    deleteTransaction: (state, action: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(t => t.id !== action.payload);
      localStorage.setItem('@MyFinance:transactions', JSON.stringify(state.transactions));
    },
    updateTransaction: (state, action: PayloadAction<Transaction>) => {
      const index = state.transactions.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.transactions[index] = action.payload;
        localStorage.setItem('@MyFinance:transactions', JSON.stringify(state.transactions));
      }
    }
  },
});

export const { addTransaction, deleteTransaction, updateTransaction } = financeSlice.actions;
export default financeSlice.reducer;