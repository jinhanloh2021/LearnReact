import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

//A component in react is just a javascript function
const ExpenseItem = (props) => {
  //props contain all the attributes
  //can create code here to get data from database, http request, receive data from server, etc.

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      {/* must convert date to string */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
