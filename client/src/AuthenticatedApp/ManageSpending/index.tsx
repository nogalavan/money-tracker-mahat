import { Card, CardContent, Stack, Typography, Divider } from "@mui/material";
import TransactionDetails from "./TransactionsDetails";
import MonthSpending from "./MonthSpending";
import * as AuthService from "../../services/auth.service";

const ManageSpending = () => {
  const user = AuthService.getCurrentUser();

  return (
  <Card sx={{width: '900px', height: '400px'}}>
    <CardContent>
      <Typography color='#F87373' variant='h6'>
      ניהול הוצאות והכנסות
        </Typography>
      <Stack direction='row' justifyContent='space-between'>
        <MonthSpending/>
        <Divider orientation="vertical" sx={{height: 'auto'}}></Divider>
        <TransactionDetails user={user}/>
      </Stack>
    </CardContent>
  </Card>
)};

export default ManageSpending;