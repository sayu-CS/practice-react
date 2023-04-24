import Movie from "./Movie";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

import React, {useState} from "react";


const DUMMY_EXPENSES = [{
  id: '1',
  title: 'Toilet Paper',
  amount: 94.12,
  date: new Date(2021, 7, 14),
},
{
  id: '2',
  title: 'Car Insurance',
  amount: 99.99,
  date: new Date(2021, 9, 12),
}];


function App() {

const [expense,setExpenses] = useState(DUMMY_EXPENSES);

  
const getDataHandler = (data) => {
 setExpenses((prev)=>{
return [data, ...prev]
 });
};

  return (
    <div>
      <NewExpense onDataPassed={getDataHandler} />
      {expense.map(expense => 
      <ExpenseItem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}/>)}
      <Movie />
    </div>

  );
}

export default App;