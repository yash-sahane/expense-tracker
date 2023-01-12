import React, { useState } from 'react'
import '../Style/expenseForm.css'

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const inputHandler = (e) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: e.target.value }
        })
    }

    const amountHandler = (e) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: e.target.value }
        })
    }

    const dateHandler = (e) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: e.target.value }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }

        props.onSaveExpenseHandler(expenseData)

        setUserInput({ enteredTitle: '', enteredAmount: '', enteredDate: '' })
    }

    return (
        <form action="" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    {/* below value attribute has assigned a value of enteredTitle bcs if we want to change the value to something else, we have assign values for state variables to empty string so when submitHandler called the values of this inputs gets change as per enteredValues in here case the values will change to empty string ie. '' */}
                    <input type="text" value={userInput.enteredTitle} onChange={inputHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min='0.01' step='0.01' value={userInput.enteredAmount} onChange={amountHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min='2019-01-01' max='2022-12-31' value={userInput.enteredDate} onChange={dateHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm