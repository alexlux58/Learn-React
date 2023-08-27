import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  const expenseTitle = props?.title;
  const expenseAmount = props?.amount;

  // const titleClickHandler = () => {
  //   setTitle("Updated");
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
        {/* <button onClick={titleClickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
