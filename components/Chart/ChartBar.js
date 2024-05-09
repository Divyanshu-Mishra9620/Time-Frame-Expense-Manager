import "./ChartBar.css";

const ChartBar = (props) => {
  let barFIllHeight = "0%";
  if (props.maxValue > 0) {
    barFIllHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    // converting to string with % sign at the end
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* value in style should be dynamic and inside it dynamic value which is js object */}
        <div className="chart-bar__fill" style={{height: barFIllHeight}}></div>
      </div>
      {/* to make label visible */}
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
