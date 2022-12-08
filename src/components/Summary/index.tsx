import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { Container, SummaryCard } from './styles';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  console.log(transactions);

  return (
    <Container>
      <SummaryCard>
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>$ 5,000.00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Outcome</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>$ 5,000.00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#ffffff" />
        </header>
        <strong>$ 5,000.00</strong>
      </SummaryCard>
    </Container>
  );
}
