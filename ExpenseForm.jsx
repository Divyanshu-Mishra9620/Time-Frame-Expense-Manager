import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //using one useState insted of multiple
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    //If using multiple state
    setEnteredTitle(event.target.value);

    //M-1 of using one useState
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //M-2 of using one useState => better than M-1
    /**
     * M-2 ensures prevState is latest while in M-1 it can be outdated
     * or incorreect one if scheduled lots of state updates at a same time
     */
    //     setUserInput((prevState) => {
    //       return { ...prevState, enteredTitle: event.target.value };
    //     });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //     setUserInput({
    //       ...userInput,
    //       enteredAmount: event.target.value,
    //     });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //     setUserInput({
    //       ...userInput,
    //       enteredDate: event.target.value,
    //     });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2024-13-07"
            max="2027-13-07"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
