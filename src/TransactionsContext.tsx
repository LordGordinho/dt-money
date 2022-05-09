import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "./services/api"

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

  setTransactions: (e: Transaction[]) => void
}

export const TransactionsContext = createContext<TransactionsContextProps>(
    {} as TransactionsContextProps
  )

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({children}) =>{
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions')
      .then( res => setTransactions(res.data.transactions))
  },[])
  
  return (
    <TransactionsContext.Provider value={{transactions, setTransactions}}>
      {children}
    </TransactionsContext.Provider>
  )
}