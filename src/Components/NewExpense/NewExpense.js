import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // lifiting state up
    props.onAddExpense(expenseData);
    // console.log(expenseData);
  };

  const showFormHandler = () => {
    setShowExpenseForm(true);
  };

  const hideFormHandler = () => {
    setShowExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!showExpenseForm && (
        <button onClick={showFormHandler}>Add new expense</button>
      )}
      {showExpenseForm && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  />
      )}
    </div>
  );
};

export default NewExpense;
