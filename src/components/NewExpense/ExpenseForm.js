import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [title, enteredTitle] = useState("");
  const [amount, enteredAmount] = useState("");
  const [date, enteredDate] = useState("");

  const addTitle = (event) => {
    console.log(title);
    enteredTitle(event.target.value);
  };

  const addAmount = (event) => {
    console.log(amount);
    enteredAmount(event.target.value);
  };

  const addDate = (event) => {
    console.log(date);
    enteredDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={addTitle} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={addAmount} />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={addDate}
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
