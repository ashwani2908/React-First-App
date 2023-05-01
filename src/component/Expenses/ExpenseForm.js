import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //useStates
  const [enteredTitle, updateTitle] = useState("");
  const [enteredAmount, updateAmount] = useState("");
  const [enteredDate, updatedate] = useState("");

  const titleChangeHandler = (e) => {
    updateTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    updateAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    updatedate(e.target.value);
  };

  const submitHandler=(e)=>{
    e.preventDefault();
    
    const expenseData = {
      title : enteredTitle,
      amount : enteredAmount,
      date : new Date(enteredDate)
    };
    console.log(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
