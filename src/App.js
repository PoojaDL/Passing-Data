import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 6, 16),
    locationOfExpenditure: "General Store",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2002, 3, 11),
    locationOfExpenditure: "Appliences",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 6, 27),
    locationOfExpenditure: "Insurance Office",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    locationOfExpenditure: "Computed Shop",
  },
];

const App = () => {
  const [expenses, addExpense] = useState(Dummy_expenses);

  const addedExpense = (newExpense) => {
    addExpense((prevExpense) => {
      return [newExpense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddingExpense={addedExpense} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
