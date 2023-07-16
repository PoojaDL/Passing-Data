import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  function deleteExpense(target) {
    const expenseItem = target.parentElement.parentElement;
    const expense = document.querySelector(".expenses");
    expense.removeChild(expenseItem);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h4>{props.locationOfExpenditure}</h4>
        <div className="expense-item__price">₹{props.amount}</div>
        <button onClick={(e) => deleteExpense(e.target)}>Delete</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
