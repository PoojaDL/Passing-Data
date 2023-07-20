import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const values = props.dataPoint.map((item) => item.value);
  const maxValue = Math.max(...values);

  return (
    <div className="chart">
      {props.dataPoint.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          label={dataPoints.label}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
