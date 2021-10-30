import { useState } from 'react';
import ExpensesList from './List';
import Card from '../UI/Card';
import './Expenses.css';
import Filter from './Filter';
import ExpensesChart from '../Expenses/Chart';

const Expenses = props => {
  const [filteredYear, setSelectedYear] = useState('2019')

  const filterChangeHandler = selectedYear => setSelectedYear(selectedYear)

  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear)

  return (
    <Card className="expenses">
      <Filter filteredYear={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
