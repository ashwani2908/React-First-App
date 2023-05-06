import React from "react";
import "./Chart.css";

const ChartBar = (props) => {
  let barFIllHeight = "0%";
  console.log(typeof(props.value),typeof(props.maxValue));

  if (props.maxValue > 0) {
    barFIllHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  //console.log(barFIllHeight);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFIllHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
