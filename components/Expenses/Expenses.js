import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  //All expenses of filtered year
  /*.......................array of expenses......each expense in props.items */
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        
{/* passing filter in expensesList through items props */}
        <ExpensesList items={filteredExpenses}/> 
        {/**
............................* METHOD 1 ternary operator
LOGIC.....
          * Checking Filtered Expenses:
This line of code checks if the filteredExpenses array is empty. 
The filteredExpenses array contains expenses that match the selected year 
(filteredYear).
----> If filteredExpenses has no items (i.e., its length is 0), it means 
there are no expenses for the selected year. In this case, it displays a 
message <p>No expenses found</p>.
         */}
        {/* ==============>{filteredExpenses.length === 0 && <p>No expenses found</p>} <====================*/}
        {/*
* If filteredExpenses contains items (i.e., its length is greater 
  than 0), it means there are expenses for the selected year.
* The code then uses the map function to loop through each expense 
 (expense) in the filteredExpenses array.
* For each expense, it creates an ExpenseItem component.
    * key={expense.id}: This is a unique identifier for React to 
    efficiently manage the list of ExpenseItem components.
    * title={expense.title}, amount={expense.amount}, date={expense.date}: 
    These are properties passed to each ExpenseItem component, containing 
    details of each expense such as title, amount, and date.
* Each ExpenseItem component is rendered based on the details 
(title, amount, date) of the corresponding expense in filteredExpenses.
         */}
        {/* ==================>{filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount} 
              date={expense.date}
            />
          ))}<================= */}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
