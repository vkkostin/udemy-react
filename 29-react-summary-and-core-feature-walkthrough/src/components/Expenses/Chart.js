import Chart from '../Chart/';
import { chartDataPoints as DATA } from '../../data';

const deepDataCopy = arr => {
  const result = [];

  for (const currentItem of arr) {
    result.push({...currentItem});
  }

  return result;
}

const ExpensesChart = props => {
  const localData = deepDataCopy(DATA)
  
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    localData[expenseMonth].value += expense.amount;
  }

  console.log(DATA)

  return <Chart dataPoints={localData} />;
};

export default ExpensesChart;