import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenceItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState('2021');
  const filterChangeHandler = (selectedYear) =>{
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  console.log(filteredExpenses);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.map((detail) => {
          return (
            <ExpenseItem
              key={detail.id}
              // id={detail.id}
              title={detail.title}
              amount={detail.amount}
              date={detail.date}
              locationOfExpenditure={detail.locationOfExpenditure}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
