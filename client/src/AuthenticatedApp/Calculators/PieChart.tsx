import Chart from "react-apexcharts";

const series = [44, 55, 41, 17, 15];
const labels = ['A', 'B', 'C', 'D', 'E'];
const options = {
  labels: ['דלק', 'אוכל', 'ביגוד', 'תרבות', 'שונות'],
  colors: ['#FFE0E0', '#F87373', '#8B6BCE', '#6BCEBE', '#FFF0BB']
}

const PieChart = () => (
  <Chart options={options} series={series} labels={labels} type="donut" width="400px" />
);

export default PieChart;