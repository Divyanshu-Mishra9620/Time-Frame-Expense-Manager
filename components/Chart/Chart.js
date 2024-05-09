import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

/* create as many chartBar component as we have dataPoints */

/* 
dataPoints holds an array so can use map 
and map every dataPoint to chartbar component
*/

/**
* we can say ChartBar component should recieve value 
prop and there we will pass dataPoint.value
*dataPoint is an object whichhas value property.
*/

/*
* every chartBar plots the value in relation to the
max value in the entire chart
*/

/**
 * label can be jan feb march ....
 */

/**
 * every chartBar has a unique label
 */
