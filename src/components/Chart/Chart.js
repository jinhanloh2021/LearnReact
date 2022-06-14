import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointValueArray = props.dataPoints.map((el) => el.value);
  const totalMax = Math.max(...dataPointValueArray);
  return (
    <div className="chart">
      {props.dataPoints.map((el) => (
        <ChartBar
          value={el.value}
          maxValue={totalMax}
          label={el.label}
          key={el.label}
        />
      ))}
    </div>
  );
};

export default Chart;
