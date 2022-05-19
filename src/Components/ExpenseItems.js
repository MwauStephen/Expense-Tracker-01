import "./ExpenseItems.css";
function ExpenseItem(props) {
  const expenseDate = new Date(2022, 3, 18);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 12.99;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
