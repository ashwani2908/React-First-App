import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenceItem.css';
import ExpenseDetail from './ExpenseDetail';
import Card from '../UI/Card';


const ExpenseItem = (props) => {
  const deleteExpense = () => {
    console.log("Deleted")
  }
  const [currentPrice, setPrice] = useState(props.amount); 
  const changePrice = () => {
    setPrice(100);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <ExpenseDetail title={props.title} amount={currentPrice} locationOfExpenditure={props.locationOfExpenditure}/>
        <button onClick= {deleteExpense}>Delete Expense</button>
        <button onClick = {changePrice}>Price($100)</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
 