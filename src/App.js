import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

import React from "react";

function App() {

const getDataHandler = (data) => {
  console.log(data)
};

  const expenses = [{
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

  return (
    <div>
      <NewExpense onDataPassed={getDataHandler} />
      {expenses.map(expense => 
      <ExpenseItem title={expense.title} 
      amount={expense.amount} 
      date={expense.date}/>)}
    </div>

  );
}

export default App;