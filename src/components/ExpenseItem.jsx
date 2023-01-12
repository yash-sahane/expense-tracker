import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate';
import '../Style/expenseItem.css';

const ExpenseItem = (props) => {
    // console.log(props.title);
    const { amount, date, title, id } = props
    console.log(id);
    // const [title, setTitle] = useState(props.title)
    // const clickHandler = () => {
    //     setTitle('updated title')
    // }

    return (
        <>
            <div className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">
                        {amount}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpenseItem