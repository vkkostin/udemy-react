import { useState } from 'react';
import './Form.css';

const ExpenseForm = props => {
  // MULTIPLE STATES
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = ({ target: { value } }) => setEnteredTitle(value)

  const amountChangeHandler = ({ target: { value } }) => setEnteredAmount(value)

  const dateChangeHandler = ({ target: { value } }) => setEnteredDate(value)

  // SINGLE STATE
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  // const userInputHandlerFor = type => ({ target: { value } }) => {
  //   // WRONG
  //   // setUserInput({
  //   //   ...userInput,
  //   //   [`entered${type}`]: value
  //   // })

  //   // BETTER
  //   setUserInput(prevState => ({
  //     ...prevState,
  //     [`entered${type}`]: value
  //   }))
  // }

  const clearForm = () => {
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  const hideForm = () => {
    clearForm();
    props.toggleForm(true)
  }

  const submitHandler = event => {
    event.preventDefault();

    props.onSaveExpenseData({
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    })

    clearForm()
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleChangeHandler} type="text" value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input onChange={amountChangeHandler} type="number" value={enteredAmount} min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input onChange={dateChangeHandler} type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={hideForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
