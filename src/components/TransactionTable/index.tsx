import { useEffect, useState } from 'react'
import { Container } from './styles'
import { api } from '../../services/api'

interface Transaction{
  id: number;
  amount: number;
  category: string;
  title: string;
  date: string;
  typeTransaction: string;
}

export const TransactionTable = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions')
      .then( res => setTransactions(res.data.transactions))
  },[])

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
              <tr key={transaction.id}>
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
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}