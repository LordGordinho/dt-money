import { Container } from './styles';
import { useTransactions } from '../../hooks/TransactionsContext';
import { TransactionRow } from '../TransactionRow';

export const TransactionTable = () => {
  const { transactions } = useTransactions()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {
            transactions.map( transaction => (
              <TransactionRow key={transaction.id} transaction={transaction} />
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}