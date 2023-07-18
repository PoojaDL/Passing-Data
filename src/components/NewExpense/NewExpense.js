import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const newExpense = (expense) => {
    const newExpenseItem = {
      ...expense,
      id: Math.random().toString(),
    };

    props.onAddingExpense(newExpenseItem);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onNewExpense={newExpense} />
    </div>
  );
};

export default NewExpense;
