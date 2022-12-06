import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';

import { Overlay, Content, CloseButton } from './styles';

export function NewTransactionModal () {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <CloseButton>
          <X size={24}/>
        </CloseButton>

        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Price" required />
          <input type="text" placeholder="Category" required />

          <Dialog.Close asChild>
            <button type="submit">Save</button>
          </Dialog.Close>
        </form>


      </Content>
    </Dialog.Portal>
  );
}
