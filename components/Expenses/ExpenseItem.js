import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">Rs.{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

//
//
//
//
//
//
//
//
//upper one is upgraded method that is recieving props

// function ExpenseItem() {
//     const expenseDate = new Date(4, 28, 2024);
//     const expenseTitle = "Car Insurance";
//     const expenseAmount = 294.7;

//     return (
/* can return only one root element so packed 
    everything in div */
//not class but className
// <div className="expense-item">
//   <div>{expenseDate.toISOString()}</div>
//   <div className="expense-item__description">
//     <h2>{expenseTitle}</h2>
//     <div className="expense-item__price">${expenseAmount}</div>
//   </div>
// </div>
// );
