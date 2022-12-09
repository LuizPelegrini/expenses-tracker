import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { Controller, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Overlay,
  Content,
  CloseButton,
  TransactionType,
  TransactionTypeButton,
} from './styles';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

const createTransactionForm = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
});

type TransactionFormData = zod.infer<typeof createTransactionForm>;

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<TransactionFormData>({
    resolver: zodResolver(createTransactionForm),
    defaultValues: {
      type: 'income',
    },
  });

  async function handleCreateTransaction(data: TransactionFormData) {
    await createTransaction(data);
    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateTransaction)}>
          <input
            type="text"
            placeholder="Description"
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Price"
            {...register('price', { valueAsNumber: true })}
          />
          <input type="text" placeholder="Category" {...register('category')} />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              // notify React Hook Form that the field has changed by using onValueChange={field.onChange}
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Income
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Outcome
                  </TransactionTypeButton>
                </TransactionType>
              );
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Save
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
