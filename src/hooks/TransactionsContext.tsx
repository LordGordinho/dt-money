import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { api } from "../services/api"

interface Transaction{
  id: number;
  amount: number;
  category: string;
  title: string;
  date: string;
  typeTransaction: string;
}

interface TransactionsContextProps {
  transactions: Transaction[];

  addTransaction: (e: Transaction) => void
}

const TransactionsContext = createContext<TransactionsContextProps>(
    {} as TransactionsContextProps
  )

interface TransactionsProviderProps {
  children: ReactNode;
}


export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({children}) =>{
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const addTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction])
  }

  useEffect(() => {
    api.get('/transactions')
      .then( res => setTransactions(res.data.transactions))
  },[])
  
  return (
    <TransactionsContext.Provider value={{transactions, addTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext);

  return context;
}

