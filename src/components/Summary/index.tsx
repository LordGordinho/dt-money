import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/TransactionsContext';
import { Container } from './styles'

export const Summary = () => {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.typeTransaction === 'withdraw'){
      acc.totalWithdraw += transaction.amount;
      acc.totalSummary -= transaction.amount;
    }
    else {
      acc.totalDeposit += transaction.amount;
      acc.totalSummary += transaction.amount;
    }

    return acc;
  }, {
    totalWithdraw: 0,
    totalDeposit: 0,
    totalSummary: 0
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="" />
        </header>
        <strong>{
          new Intl.NumberFormat('pt-BR', { 
            style: 'currency', currency: 'BRL'
            }
          ).format(summary.totalDeposit)
        }</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="" />
        </header>
        <strong>-{
          new Intl.NumberFormat('pt-BR', { 
            style: 'currency', currency: 'BRL'
            }
          ).format(summary.totalWithdraw)
        }</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" />
        </header>
        <strong>{
          new Intl.NumberFormat('pt-BR', { 
            style: 'currency', currency: 'BRL'
            }
          ).format(summary.totalSummary)
        }</strong>
      </div>
    </Container>
  )
}