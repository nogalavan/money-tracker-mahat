import Chart from "react-apexcharts";
const series = [{
  name: 'הוצאות',
  data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
  name: 'הכנסות',
  data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
}]
var options = {
  // colors: ['green', 'red'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded',
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  }
};

const ColumnChart = () => (
  <Chart
    options={options}
    series={series}
    type="bar"
    width="400px"
  />
);

export default ColumnChart;