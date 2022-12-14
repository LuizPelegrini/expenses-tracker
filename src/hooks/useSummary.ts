import { useContextSelector } from 'use-context-selector';
import { TransactionsContext } from '../contexts/TransactionsContext';

export const useSummary = () => {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

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
