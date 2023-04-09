import React, { useState } from "react";
import './ExpenseForm.css'




const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [buttonState,setButtonState] = useState(false)

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log(enteredTitle)
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        console.log(expenseData);
        props.onSavedExpenseData(expenseData);
    };

    const buttonToggler = () =>{
        setButtonState(!buttonState);
    };

    let showExpense = <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type='date' value={enteredDate} min="2019-01-01" max='2029-12-31' onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__actions">
            <button type="submit" onClick={buttonToggler}>Add Expense</button>
        </div>
    </div>
</form>

let hideExpense = <form onSubmit={submitHandler}>
<div className="new-expense__controls">
<div className="new-expense__actions">
            <button type="submit" onClick={buttonToggler}>Add New Expense</button>
        </div>
    </div>
    </form>   
    
    return buttonState ? showExpense:hideExpense;
};

export default ExpenseForm;