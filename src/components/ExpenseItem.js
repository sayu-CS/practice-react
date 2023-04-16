
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';

import React ,{useState} from "react";
import ExpensesChart from "./ExpensesChart";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    
    function clickedHandler (){
        setTitle('Updated!');
        console.log(title)
    }

    return ((<div className="expense-item">
        <div>
            <ExpensesChart data={props}/>
        </div>
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={clickedHandler}>Change Title</button>
    </div>),console.log(props));
};

export default ExpenseItem;