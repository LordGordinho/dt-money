import Modal from 'react-modal'

import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';
import closeImg from '../../assets/close.svg';

import { Container, TransactionTypeContainer, RadioButton } from './styles';
import { useState, FormEvent } from 'react';
import { api } from '../../services/api';
import { useTransactions } from '../../hooks/TransactionsContext';
import { Transaction } from '../../types/Transaction';
interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

interface TransactionResponseCreate {
  transaction: Transaction;
}

export const NewTransactionModal = ({ isOpen, onRequestClose}: NewTransactionModalProps) => {
  const [transactionType, setTransactionType] = useState<'deposit'|'withdraw'>('deposit')
  const [transactionTitle, setTransactionTitle] = useState('')
  const [transactionPrice, setTransactionPrice] = useState(0)
  const [transactionCategory, setTransactionCategory] = useState('')
  const { addTransaction } = useTransactions();

  const handleSubmitForm = ( event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault()

    const data = { 
      category: transactionCategory, 
      title: transactionTitle, 
      amount: transactionPrice, 
      date: "2021-02-13", 
      typeTransaction: transactionType
    }

    api.post<TransactionResponseCreate>('transactions', data).then(res => addTransaction(res.data.transaction))

    handleRequestClose()
  }

  const handleRequestClose = () => {
    setTransactionType('deposit')
    setTransactionTitle('')
    setTransactionPrice(0)
    setTransactionCategory('')

    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <img className='close-button-modal' src={closeImg} alt="Fechar" onClick={handleRequestClose}/>

      <Container onSubmit={(e) => handleSubmitForm(e)}>
        <h2>Nova Transação</h2>

        <input 
          type="text" 
          name="title" 
          placeholder='Titulo' 
          value={transactionTitle}
          onChange={ event => setTransactionTitle(event.target.value)}
          required
        />

        <input 
          type="number" 
          name="value" 
          placeholder='Valor' 
          value={transactionPrice}
          onChange={ event => setTransactionPrice(Number(event.target.value))}
          required
        />

        <TransactionTypeContainer>
          <RadioButton 
            type="button"
            onClick={() => setTransactionType('deposit')}
            isActive={transactionType === 'deposit'}
            colorRadioButton='green'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioButton>

          <RadioButton 
            type="button"
            onClick={() => setTransactionType('withdraw')}
            isActive={transactionType === 'withdraw'}
            colorRadioButton='red'
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioButton>
        </TransactionTypeContainer>

        <input 
          type="text" 
          name="category" 
          placeholder='Categoria' 
          value={transactionCategory}
          onChange={ event => setTransactionCategory(event.target.value)}
          required
        />
        
        <button type="submit">
          Cadastrar
        </button>
      </Container>
  </Modal>
  )
}