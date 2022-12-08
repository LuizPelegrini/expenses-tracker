import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useSummary } from '../../hooks/useSummary';
import { currencyFormatter } from '../../utils/formatter';
import { Container, SummaryCard } from './styles';

export function Summary() {
  // create custom hook to calculate the summary
  const summary = useSummary();

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
