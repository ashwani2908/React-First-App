import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenceItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter />
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
      </Card>
    </div>
  );
};

export default Expenses;
