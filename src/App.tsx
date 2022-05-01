import { GlobalStyle } from './styles/global';
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard';
import { createServer } from 'miragejs'

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
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
