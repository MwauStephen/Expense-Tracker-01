import "./ExpenseItems.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28th 2022</div>
      <div className="expense-item__description">
        <h2>Car Insuarance</h2>
        <div className="expense-item__price">$12.99</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
