import ExpenseDate from './ExpenseDate';
import './ExpenceItem.css';
import ExpenseDetail from './ExpenseDetail';


function ExpenseItem(props) {
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <ExpenseDetail title={props.title} amount={props.amount} locationOfExpenditure={props.locationOfExpenditure}/>
      </div>
    </div>
  );
}

export default ExpenseItem;
 