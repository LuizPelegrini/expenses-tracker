import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { ErrorMessage, FormContainer, SubmitButton } from './styles';
import { TransactionsContext } from '../../../../contexts/TransactionsContext';
import { useContextSelector } from 'use-context-selector';

const searchFormSchema = zod.object({
  query: zod.string().min(3, 'At least 3 characters must be provided'),
});

type SearchFormData = zod.infer<typeof searchFormSchema>;

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions;
    },
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormData) {
    await fetchTransactions(data.query);
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <fieldset>
        <input
          type="text"
          placeholder="Search for transactions"
          {...register('query')}
        />
        {errors.query?.message && (
          <ErrorMessage>{errors.query?.message}</ErrorMessage>
        )}
      </fieldset>
      <SubmitButton type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={24} />
        <span>Search</span>
      </SubmitButton>
    </FormContainer>
  );
}
