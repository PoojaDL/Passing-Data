import "./ChartBar.css";
import React from "react";

const ChartBar = (props) => {
  let heightFill = "0%";

  if (props.maxValue > 0) {
    heightFill = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="char-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: heightFill }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
