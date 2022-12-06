import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

import { PriceHighlight, TransactionsContainer, TransactionsTable } from './styles';

export function Transactions () {
  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Website Development</td>
              <td>
                <PriceHighlight variant="income">$3,000</PriceHighlight>
              </td>
              <td>Work</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburger</td>
              <td>
                <PriceHighlight variant="outcome">- $10</PriceHighlight>
              </td>
              <td>Food</td>
              <td>22/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}
