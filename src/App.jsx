import React, { useState } from 'react';
import './App.css';
import expenses from './data'
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

function App() {

  const [stateExpenseData, setStateExpenseData] = useState(expenses);

  const addNewExpenseHandler = (expenseData) => {
    setStateExpenseData(prevExpenseData => {
      return [expenseData, ...prevExpenseData]
    })
  }

  return (
    <>
      <NewExpense addNewExpenseHandler={addNewExpenseHandler} />
      <Expenses expenses={stateExpenseData} />
    </>
  )
}

export default App;