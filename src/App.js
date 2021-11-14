import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import './App.css'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionLIst from './components/TransactionLIst'
import AddTransaction from './components/AddTransaction'
import {GlobalProvider} from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionLIst />
        <AddTransaction />
      </div>
    </GlobalProvider  >
  )
}

export default App
