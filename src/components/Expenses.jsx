import React, { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const { expenses } = props

  const onChangeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = expenses.filter(expense => {
    return (
      expense.date.getFullYear().toString() === filteredYear
    )
  })

  return (
    <div className='expenses'>
      <ExpenseFilter onChangeFilter={onChangeFilterHandler} selected={filteredYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList filteredExpenses={filteredExpenses} />
    </div>
  )
}

export default Expenses