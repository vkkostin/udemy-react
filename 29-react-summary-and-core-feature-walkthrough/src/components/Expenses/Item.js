import Card from '../UI/Card'
import ExpenseDate from './Date';
import './Item.css';

const ExpenseItem = props => {
  // useState is called with a default value
  // useState always returns an array of two elements
  // 1: the state variable
  // 2: a function that, when called, updates the state variable
  // const [title, setTitle] = useState(props.title);

  return (
    <Card tagName="li" className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
