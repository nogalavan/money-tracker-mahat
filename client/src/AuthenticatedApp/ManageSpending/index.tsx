import { Card, CardContent, Stack, Typography, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import TransactionDetails from "./TransactionsDetails";
import MonthSpending from "./MonthSpending";
import * as AuthService from "../../services/auth.service";

const ManageSpending = () => {

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(AuthService.getCurrentUser());
  
  useEffect(() => {
    setTimeout(() => {
      setUser(AuthService.getCurrentUser());
    }, 1000);
  }, [open])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
  <Card sx={{width: '900px', height: '400px'}}>
    <CardContent>
      <Typography color='#F87373' variant='h6'>
      ניהול הוצאות והכנסות
        </Typography>
      <Stack direction='row' justifyContent='space-between'>
        <MonthSpending/>
        <Divider orientation="vertical" sx={{height: 'auto'}}></Divider>
        <TransactionDetails user={user} dialogOpen={handleClickOpen} dialogClose={handleClose} open={open}/>
      </Stack>
    </CardContent>
  </Card>
)};

export default ManageSpending;