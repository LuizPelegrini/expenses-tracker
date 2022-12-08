import { MagnifyingGlass } from 'phosphor-react';
import { FormContainer, SubmitButton } from './styles';

export function SearchForm() {
  return (
    <FormContainer>
      <input type="text" placeholder="Search for transactions" />
      <SubmitButton type="submit">
        <MagnifyingGlass size={24} />
        <span>Search</span>
      </SubmitButton>
    </FormContainer>
  );
}
