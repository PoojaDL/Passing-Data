import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.amount);
  function clickHandler() {
    console.log(amount);
    setAmount("$100");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h4>{props.locationOfExpenditure}</h4>
        <div className="expense-item__price">₹{amount}</div>
        <button onClick={clickHandler}>update</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
