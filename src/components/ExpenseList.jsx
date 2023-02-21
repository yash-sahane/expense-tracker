import React from 'react'
import ExpenseItem from './ExpenseItem';
import '../Style/expensesList.css'

const ExpenseList = (props) => {
  const { filteredExpenses } = props

  if (filteredExpenses.length === 0) {
    return <h2 className='expenses-list__fallback'>No Expenses Found.</h2>;
  }

  return (
    filteredExpenses.map(expenseItemData => {
      const { title, amount, date, id } = expenseItemData;
      return (
        <>
          <ExpenseItem title={title} date={date} amount={amount} id={id} key={id} expense={expenseItemData} />
        </>
      )
    })
  )
}

export default ExpenseList