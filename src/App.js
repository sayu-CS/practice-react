import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
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
      <NewExpense />
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
     <hr></hr>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
    </div>

  );
}

export default App;