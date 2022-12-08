import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input[type='text'] {
    background-color: ${(props) => props.theme['gray-900']};
    border-radius: 6px;
    border: 0;
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;
    flex: 1;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme['green-300']};
  border-radius: 6px;
  padding: 1rem;
  color: ${(props) => props.theme['green-300']};
  transition: background-color 0.15s, color 0.15s, border-color 0.15s;

  &:hover {
    background-color: ${(props) => props.theme['green-500']};
    border-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
  }

  span {
    font-weight: bold;
  }
`;
