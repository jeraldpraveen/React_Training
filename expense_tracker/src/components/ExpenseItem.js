import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = props.date.toString();
  const expenseTitle = props.title;
  const expenseAmount = props.amount;
  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">₹{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
