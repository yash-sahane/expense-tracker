import React from 'react'
import '../Style/expense-filter.css'

const ExpenseFilter = (props) => {

    const onChangeHandler = (e) => {
        props.onChangeFilter(e.target.value)
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label htmlFor="">Filter by year</label>
                <select onChange={onChangeHandler} value={props.selected}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter