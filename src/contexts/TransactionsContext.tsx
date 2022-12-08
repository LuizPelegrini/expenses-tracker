import { createContext, ReactNode, useEffect, useState } from 'react';
import { Transaction } from '../@types/transaction';

interface TransactionsContentType {
  transactions: Transaction[];
  // addTransaction: () => void;
}

export const TransactionsContext = createContext({} as TransactionsContentType);

interface TransactionProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions');
    const data = (await response.json()) as Transaction[];

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
