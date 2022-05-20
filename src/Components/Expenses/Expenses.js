import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // filter the expenses according to years
  const filteredYearExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // conditional content
  let expenseContent = <p>No expenses found</p>;
  if (filteredYearExpense > 0) {
    return (expenseContent = filteredYearExpense.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    }));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      {expenseContent}
    </Card>
  );
};
export default Expenses;
