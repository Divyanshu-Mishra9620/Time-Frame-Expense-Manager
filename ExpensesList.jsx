import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

/* 
* Rendering:
The component returns a JSX structure.

filteredExpenses is mapped to an array of ExpenseItem components, 
each representing an individual expense that matches the selected year.

  */
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;