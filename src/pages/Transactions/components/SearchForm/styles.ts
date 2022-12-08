import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  gap: 1rem;

  fieldset {
    border: 0;
    flex: 1;
    height: 3.5rem;
  }

  input[type='text'] {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme['gray-900']};
    border-radius: 6px;
    border: 0;
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

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
  box-shadow: 0 0 0 1px ${(props) => props.theme['green-300']};
  border-radius: 6px;
  padding: 1rem;
  color: ${(props) => props.theme['green-300']};
  transition: background-color 0.15s, color 0.15s, box-shadow 0.15s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-500']};
    box-shadow: 0 0 0 1px ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
  }

  span {
    font-weight: bold;
  }
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme['red-300']};
  margin-top: 0.5rem;
  font-size: 0.875rem;
`;
