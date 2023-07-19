import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2020);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const newItemList = props.expenses
    .map((expenses) => (
      <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    ))
    .filter(
      (expense) =>
        new Date(expense.props.date).getFullYear().toString() === filteredYear
    );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {newItemList.length === 0 && <p>No expense found</p>}
      {newItemList.length === 1 && newItemList}
      {newItemList.length === 1 && (
        <p>Only single Expense here. Please add more... </p>
      )}
      {newItemList.length > 1 && newItemList}
    </Card>
  );
};

export default Expenses;
