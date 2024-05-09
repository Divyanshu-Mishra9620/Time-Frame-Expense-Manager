import Chart from "../Chart/Chart";
//filteredExpenses as props
const ExpensesChart = (props) => {
  const chartDatapoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  //expenses in filteredExpenses received through props
  for (const expense of props.expenses) {
    //get the month and update the value of appropriate
    //dataPoint by expense amount
    const expenseMonth = expense.date.getMonth(); //starting at zero
    //can use it as index
    chartDatapoints[expenseMonth].value += expense.amount;
  }
  // Now the value is not zero but instead summed up
  // value for given month expenses

  return <Chart dataPoints={chartDatapoints} />;
};

export default ExpensesChart;
