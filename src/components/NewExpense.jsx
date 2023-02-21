import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import '../Style/newExpense.css'
import { v4 as uuidv4 } from 'uuid';

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseHandler = (onSaveExpenseData) => {
    onSaveExpenseData = {
      ...onSaveExpenseData,
      id: uuidv4()
    }

    props.addNewExpenseHandler(onSaveExpenseData)
    setIsEditing(false);
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm onSaveExpenseHandler={onSaveExpenseHandler} onCancel={stopEditingHandler} />
      )}
    </div>
  )
}

export default NewExpense