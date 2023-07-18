import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const newItemList = props.expenses.map((expenses, index) => (
    <ExpenseItem
      key={index}
      title={expenses.title}
      amount={expenses.amount}
      date={expenses.date}
      locationOfExpenditure={expenses.locationOfExpenditure}
    />
  ));

  return <Card className="expenses">{newItemList}</Card>;
};

export default Expenses;
