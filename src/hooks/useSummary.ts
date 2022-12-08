import { useContext } from 'react';
import { TransactionsContext } from '../contexts/TransactionsContext';

export const useSummary = () => {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price;
      } else {
        acc.outcome += transaction.price;
      }

      return {
        ...acc,
        total: acc.income - acc.outcome,
      };
    },
    { income: 0, outcome: 0, total: 0 },
  );

  return summary;
};
