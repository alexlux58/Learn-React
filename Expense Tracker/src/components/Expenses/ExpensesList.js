import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  return (
    <ul className="expenses-list">
      {props.expenses.length === 0 ? (
        <p className="expenses-list__fallback">No Expenses found.</p>
      ) : (
        props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </ul>
  );
};

export default ExpensesList;
