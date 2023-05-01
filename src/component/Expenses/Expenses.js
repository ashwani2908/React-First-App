import "./Expenses.css";
import ExpenseItem from "./ExpenceItem";

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.item.map((detail) => {
        return (
          <ExpenseItem
            key={detail.id}
            id={detail.id}
            title={detail.title}
            amount={detail.amount}
            date={detail.date}
            locationOfExpenditure={detail.locationOfExpenditure}
          ></ExpenseItem>
        );
      })}
    </div>
  );
};

export default Expenses;
