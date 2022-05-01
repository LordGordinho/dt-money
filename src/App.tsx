import { createServer } from 'miragejs'
import { useState } from 'react';

import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard';


createServer({
  routes() {
    this.urlPrefix = 'http://localhost:3000';
    this.namespace = 'api'

    this.get('/transactios', () =>  {
    return [
        { id: '1', category: "Food", title: "Comida Chinesa", amount: "50.00", date: new Date("2021-02-15"), typeTransaction: "deposit" },
        { id: '2', category: "Food", title: "Comida Japonesa", amount: "50.00", date: new Date("2021-02-15"), typeTransaction: "deposit" },
        { id: '3', category: "Food", title: "Comida Tailandesa", amount: "50.00", date: new Date("2021-02-15"), typeTransaction: "deposit" }
      ]
    })
  }
})

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <div className="App">
      <GlobalStyle />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      <Header onHandleNewTransaction={handleOpenNewTransactionModal} />
      <Dashboard />
    </div>
  );
}

export default App;
