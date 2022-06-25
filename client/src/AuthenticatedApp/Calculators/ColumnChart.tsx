import Chart from "react-apexcharts";
import * as AuthService from "../../services/auth.service";
import moment from "moment";

const dates = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const outMoney = (user: any) => user.transactions.reduce((prev: any, curr: any) => {
  const transDate = moment(curr.date, "x");
  if (transDate.month() === moment().month() && transDate.year() === moment().year() && 
      curr.type === "expense") {
      prev[transDate.month()] = prev[transDate.month()] + curr.amount;
  }
  return prev;

}, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

const inMoney = (user: any) => user.transactions.reduce((prev: any, curr: any) => {
  const transDate = moment(curr.date, "x");
  if (transDate.month() === moment().month() && transDate.year() === moment().year() && 
      curr.type === "income") {
        prev[transDate.month()] = prev[transDate.month()] + curr.amount;
  }
  return prev;

}, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);



var options = {
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
    categories: dates,
  }
};

const ColumnChart = () => {
  
  const user = AuthService.getCurrentUser();
  const series = [{
    name: 'הוצאות',
    data: outMoney(user)
    }, {
    name: 'הכנסות',
    data: inMoney(user)
  }];

  return <Chart
    options={options}
    series={series}
    type="bar"
    width="400px"
  />
};

export default ColumnChart;