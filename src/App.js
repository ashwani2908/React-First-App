//import ExpenseItem from "./component/Expenses/ExpenceItem";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/Expenses/NewExpense";
import "./App.css";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationOfExpenditure: "Home",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      locationOfExpenditure: "Home",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: "Company",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 7, 12),
      locationOfExpenditure: "Study",
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses item={expenses} />
      
    </div>
  );
};

export default App;
