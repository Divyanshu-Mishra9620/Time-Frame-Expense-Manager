import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  // ...........................METHOD -2 clean code so better
  //   let expensesContent = <p>No expenses found</p>;

  //items as props
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

export default ExpensesList;
