import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); //passing expensesdata in app component
  };

  return (
    <div className="new-expense">
      {/* // through onSaveExpenseData prop we are pointing
    // at the func saveExpenseDataHandler and passing it to ExpenseForm component */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
