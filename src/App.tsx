import { GlobalStyle } from './styles/global';
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard';

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
