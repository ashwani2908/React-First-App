import ExpenseItem from "./component/ExpenceItem";
import "./App.css";

function App() {
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
    <div className="App">
      <h1> Expence Tracker </h1>
      {expenses.map((detail) => {
        return (
          <ExpenseItem
            title={detail.title}
            amount={detail.amount}
            date={detail.date}
            locationOfExpenditure = {detail.locationOfExpenditure}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;
