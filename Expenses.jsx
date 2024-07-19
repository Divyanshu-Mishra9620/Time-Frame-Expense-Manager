import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2024");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  /**
   * Filtering Logic:
  * filteredExpenses is defined by filtering props.items. 
  
  * The filtering logic checks if the year of each 
   expense's date matches the filteredYear state.
  
  * Initially, this will filter for the year "2024".
  
  if matches, returns the corresponding expense to filteredExpenses array
  */

  /* Filter Change Handling:

When a user selects a different year in the ExpensesFilter component,
filterChangeHandler is called with the new year as an argument.

filterChangeHandler updates the filteredYear state using setFilteredYear.

The component re-renders due to the state change.

During re-rendering, filteredExpenses is recalculated based on the new filteredYear.

The updated filteredExpenses is then used to render the appropriate 
ExpenseItem components in the ExpensesList component. 

ExpensesFilter is rendered, allowing the user to select 
a different year. It passes the filteredYear and filterChangeHandler 
to ExpensesFilter.*/
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
