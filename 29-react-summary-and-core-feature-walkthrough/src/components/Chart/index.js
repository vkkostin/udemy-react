import './Chart.css';
import Bar from './Bar';

const Chart = props => {
  const totalMaximum = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value))

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => 
        <Bar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      )}
    </div>
  );
};

export default Chart;