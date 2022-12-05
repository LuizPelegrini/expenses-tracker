import styled, { css } from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`;

const COLORS_MAPPER = {
  green: 'green-700'
} as const;

interface SummaryCardProps {
  variant?: keyof typeof COLORS_MAPPER;
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${props => props.theme['gray-600']};
  padding: 1.5rem;
  border-radius: 6px;

  ${props => props.variant && css`
    background-color: ${props.theme[COLORS_MAPPER[props.variant]]};
  `}

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: ${props => props.theme['gray-300']};
      line-height: 1.6;
    }
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 1.4;
  }
`;
