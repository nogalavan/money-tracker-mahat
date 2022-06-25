import { Stack, Typography } from "@mui/material";
import saving from '../../assets/saving.png';
import broken from '../../assets/broken.png';
import * as AuthService from "../../services/auth.service";

const BalanceDetails = () => {
  const user = AuthService.getCurrentUser();
  const balance = user.transactions.reduce((bal: any, curr: any) => {
    if (curr.type === 'income') {
      bal += curr.amount;
    }
    else {
      bal -= curr.amount
    }

    return bal;
  }, user.balance);

  const incomes = user.transactions.reduce((income: any, curr: any) => {
    if (curr.type === 'income') {
      income += curr.amount;
    }

    return income;
  }, 0);

  const outcomes = user.transactions.reduce((outcome: any, curr: any) => {
    if (curr.type === 'expense') {
      outcome += curr.amount;
    }

    return outcome;
  }, 0);

  return <Stack sx={{width: '400px'}} alignItems='center'>
    <Typography color='#F87373' variant='h1'>
          {balance}₪
    </Typography>
    <Typography variant='h6'>
          מאזן כספי
    </Typography>
    <Stack direction='row' justifyContent='space-around' sx={{width: 'inherit'}}>
      <Stack>
        <img src={saving} alt='saving' height='80px' width='80px'></img>
        <Typography variant='body2' sx={{alignSelf: 'center'}}>{incomes}₪</Typography>
        <Typography variant='caption'>סך כל ההכנסות</Typography>
      </Stack>
      <Stack>
        <img src={broken} alt='broken' height='80px' width='80px'></img>
        <Typography variant='body2' sx={{alignSelf: 'center'}}>{outcomes}₪</Typography>
        <Typography variant='caption'>סך כל ההוצאות</Typography>
      </Stack>
    </Stack>
  </Stack>
};

export default BalanceDetails;