import Modal from 'react-modal'

import { Container } from './styles'
interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = ({ isOpen, onRequestClose}: NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Nova Transação</h2>

        <input type="text" name="title" placeholder='Titulo' />
        <input type="number" name="value" placeholder='Valor' />
        <input type="text" name="category" placeholder='Categoria' />
        
        <button type="submit">
          Cadastrar
        </button>
      </Container>
  </Modal>
  )
}