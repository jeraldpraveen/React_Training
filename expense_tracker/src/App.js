import "./App.css";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toll Gate",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Laptop",
    amount: 45000,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expensesList, setExpenseList] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("App.js");
    setExpenseList((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(expensesList);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesList} />
    </div>
  );
}

export default App;
