import ExpenseDate from './ExpenseDate';
import './ExpenceItem.css';
import ExpenseDetail from './ExpenseDetail';
import Card from '../UI/Card';


const ExpenseItem = (props) => {
  const deleteExpense = () => {
    console.log("Deleted!")
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <ExpenseDetail title={props.title} amount={props.amount} locationOfExpenditure={props.locationOfExpenditure}/>
        <button onClick= {deleteExpense}>Delete Expense</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
 