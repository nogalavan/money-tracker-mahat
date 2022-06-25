import { Stack, Typography } from "@mui/material";
import moment from "moment";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import * as AuthService from "../../services/auth.service";

const MonthSpending = () => {
  const MonthSpendings = () => {
    return AuthService.getCurrentUser().transactions.reduce((allMoney: number, currTransaction: any) => {
      const transDate = moment(currTransaction.date, "x");
      if (transDate.month() === moment().month() && transDate.year() === moment().year() && 
          currTransaction.type === "expense") {
          return allMoney + currTransaction.amount;
      }

      return allMoney;
    }, 0)
  };

  const Percentage = () => {
    const monthSpendings: any = MonthSpendings();
    return Math.floor((monthSpendings / AuthService.getCurrentUser().budget) * 100);
  }

  const LeftSpending = () => {
    return AuthService.getCurrentUser().budget - MonthSpendings();
  }

  return (
  <Stack sx={{width: '300px'}} justifyContent='space-evenly' alignItems='center'>
    <Stack alignItems='center'>
      <CircularProgressWithLabel amount={Percentage()}></CircularProgressWithLabel>
      <Typography>ניהול התקציב החודשי</Typography>
      {Percentage() > 95 ? <Typography sx={{color: 'red', fontWeight: 'bold'}}>אנא שים לב כי כמות ההוצאות גדולה</Typography> : null}
    </Stack>
    <Stack direction='row' justifyContent='space-around' sx={{width: 'inherit'}}>
      <Stack>
        <Typography variant='h4' sx={{alignSelf: 'center', color: '#F8A1A1'}}>{MonthSpendings()}₪</Typography>
        <Typography variant='caption'>הוצאת החודש</Typography>
      </Stack>
      <Stack>
        <Typography variant='h4' sx={{alignSelf: 'center', color: '#F87373'}}>{LeftSpending()}₪</Typography>
        <Typography variant='caption' sx={{fontWeight: 'bold'}}>נשאר לבזבז</Typography>
      </Stack>
    </Stack>
  </Stack>
)};

export default MonthSpending;