import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Transaction } from '../@types/transaction';
import { api } from '../lib/axios';
import { createContext } from 'use-context-selector';

interface TransactionsContentType {
  transactions: Transaction[];
  createTransaction: (
    transaction: Omit<Transaction, 'id' | 'createdAt'>,
  ) => Promise<void>;
  fetchTransactions: (query?: string) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionsContentType);

interface TransactionProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const { data } = await api.get<Transaction[]>('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    });

    setTransactions(data);
  }, []);

  const createTransaction = useCallback(
    async (transaction: Omit<Transaction, 'id' | 'createdAt'>) => {
      const { description, category, type, price } = transaction;
      const { data } = await api.post<Transaction>('/transactions', {
        description,
        category,
        type,
        price,
        createdAt: new Date(),
      });

      setTransactions((state) => [data, ...state]);
    },
    [],
  );

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
