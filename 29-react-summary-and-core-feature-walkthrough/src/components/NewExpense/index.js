import { useState } from 'react';
import './NewExpense.css';
import Form from './Form';

const NewExpense = props => {
  const [isFormHidden, setIsFormHidden] = useState(true);

  const saveExpenseDataHandler = enteredExpenseData => props.onAddExpense(enteredExpenseData)

  const toggleForm = bool => setIsFormHidden(bool)

  let newExpense = <Form toggleForm={toggleForm} onSaveExpenseData={saveExpenseDataHandler} />

  if (isFormHidden) {
    newExpense = <button onClick={() => toggleForm(false)}>Add New Expense</button>
  }

  return <div className="new-expense">{newExpense}</div>
};

export default NewExpense;