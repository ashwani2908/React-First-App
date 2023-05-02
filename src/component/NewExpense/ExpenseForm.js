import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
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

    props.onSaveExpenseData(expenseData);
    
    updateTitle('');
    updateAmount('');
    updatedate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value= {enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
