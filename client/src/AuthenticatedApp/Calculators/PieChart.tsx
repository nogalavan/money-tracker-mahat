import Chart from "react-apexcharts";
import * as AuthService from "../../services/auth.service";
import moment from "moment";


const options = {
  labels: ['דלק', 'אוכל', 'ביגוד', 'תרבות', 'שונות'],
  colors: ['#FFE0E0', '#F87373', '#8B6BCE', '#6BCEBE', '#FFF0BB']
}
const percentages = (user: any) => user.transactions.reduce((prev: any, curr: any) => {
    const transDate = moment(curr.date, "x");
    if (transDate.month() === moment().month() && transDate.year() === moment().year() && 
        curr.type === "expense") {
        prev[options.labels.indexOf(curr.catagory)] = prev[options.labels.indexOf(curr.catagory)] + curr.amount;
    }
    return prev;

}, [0, 0, 0, 0, 0]);
const labels = ['A', 'B', 'C', 'D', 'E'];

const PieChart = () => {
  const user = AuthService.getCurrentUser();

  return <Chart options={options} series={percentages(user)} labels={labels} type="donut" width="400px" />
};

export default PieChart;