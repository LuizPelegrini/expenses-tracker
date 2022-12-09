import { createContext, ReactNode, useEffect, useState } from 'react';
import { Transaction } from '../@types/transaction';
import { api } from '../lib/axios';

interface TransactionsContentType {
  transactions: Transaction[];
  // addTransaction: () => void;
  fetchTransactions: (query?: string) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionsContentType);

interface TransactionProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const { data } = await api.get<Transaction[]>('/transactions', {
      params: {
        q: query,
      },
    });

    setTransactions(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
