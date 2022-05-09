import { Container } from "./styles"
import { Transaction } from '../../types/Transaction';

interface TransactionRowProps {
  transaction: Transaction
}

export const TransactionRow: React.FC<TransactionRowProps> = ({transaction}) => {
  return (
    <Container>
      <td>
        {transaction.title}
      </td>
      <td className={transaction.typeTransaction}>
        {
          new Intl.NumberFormat('pt-BR', { 
            style: 'currency', currency: 'BRL'
            }
          ).format(transaction.amount)
        }
      </td>
      <td>
        {transaction.category}
      </td>
      <td>
      {
        new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.date))
      }
      </td>
   </Container>
  )
}