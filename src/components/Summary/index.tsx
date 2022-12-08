import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { currencyFormatter } from '../../utils/formatter';
import { Container, SummaryCard } from './styles';

export function Summary() {
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

  return (
    <Container>
      <SummaryCard>
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{currencyFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Outcome</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{currencyFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#ffffff" />
        </header>
        <strong>{currencyFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </Container>
  );
}
