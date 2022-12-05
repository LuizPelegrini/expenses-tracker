import styled from "styled-components";

export const Container = styled.header`
  background-color: ${props => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionButton = styled.button`
  padding: 0.75rem 1.25rem;
  background-color: ${props => props.theme["green-500"]};
  color: ${props => props.theme["gray-100"]};
  border-radius: 6px;
  line-height: 1.6;
  font-weight: 700;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${props => props.theme["green-300"]};
  }
`;
