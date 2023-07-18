import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const newItemList = props.expenses.map((expenses, index) => (
    <ExpenseItem
      key={index}
      title={expenses.title}
      amount={expenses.amount}
      date={expenses.date}
      locationOfExpenditure={expenses.locationOfExpenditure}
    />
  ));

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {newItemList}
    </Card>
  );
};

export default Expenses;
