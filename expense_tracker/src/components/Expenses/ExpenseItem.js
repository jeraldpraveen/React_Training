import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  console.log("ExpenseItem Evaluvation");
  // useState() returns a Array
  // First Element in Array {useState()[0]} ---> Value itself
  // Second Element in Array {useState()[1]} ---> Update Function
  // ==================================================================
  // const expenseTitle = useState(props.title)[0];
  const [expenseTitle, setExpenseTitle] = useState(props.title);

  // const expenseTitle = props.title;
  const expenseAmount = props.amount;

  const clickHandler = () => {
    setExpenseTitle("Updated!!!!!!");
    console.log(expenseTitle);
  };

  // You can update states for whatever reason you may have.(Not only in click Event)
  // You can update states in HTTP responses also]
  setTimeout(function () {
    setExpenseTitle("Done");
  }, 3000);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">₹{expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
