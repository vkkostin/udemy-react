import { expenses as DATA } from './data';
import Expenses from './components/Expenses/';
import NewExpense from './components/NewExpense/'
import { useState } from 'react';

const App = () => {
  const [expenses, setExpenses] = useState(DATA)

  const addExpenseHandler = expense => {
    setExpenses(prevState => [
      {
        ...expense,
        id: (prevState.length + 1).toString()
      },
      ...prevState,
    ])
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}  />
      <Expenses items={expenses} />
    </div>
  )
}

export default App;
