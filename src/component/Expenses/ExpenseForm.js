import React from "react";
const ExpenseForm = () => {
    const titleChangeHandler = (e) =>{
        console.log(e.target.value);
    }

    const amountChangeHandler = (e) =>{
        console.log(e.target.value);
    }

    const dateChangeHandler = (e) =>{
        console.log(e.target.value);
    }
    return (
      <form>
        <div>
          <div>
            <label>Expense Title</label>
            <input type="text" onChange={titleChangeHandler}/>
          </div>
          <div>
            <label>Amount</label>
            <input type="number" onChange={amountChangeHandler}/>
          </div>
          <div>
            <label>Date</label>
            <input type="date" onChange={dateChangeHandler}/>
          </div>
        </div>
        <div>
          <button type="submit">Add Expense</button>
        </div>
      </form>
  );
};

export default ExpenseForm;
