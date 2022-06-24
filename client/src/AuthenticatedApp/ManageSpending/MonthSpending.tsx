import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import CircularProgressWithLabel from "./CircularProgressWithLabel";

const MonthSpending = () => {
  const [progress] = useState<number>(75);

  return (
  <Stack sx={{width: '300px'}} justifyContent='space-evenly' alignItems='center'>
    <Stack alignItems='center'>
      <CircularProgressWithLabel amount={progress}></CircularProgressWithLabel>
      <Typography>ניהול התקציב החודשי</Typography>
    </Stack>
    <Stack direction='row' justifyContent='space-around' sx={{width: 'inherit'}}>
      <Stack>
        <Typography variant='h4' sx={{alignSelf: 'center', color: '#F8A1A1'}}>200₪</Typography>
        <Typography variant='caption'>הוצאת החודש</Typography>
      </Stack>
      <Stack>
        <Typography variant='h4' sx={{alignSelf: 'center', color: '#F87373'}}>60₪</Typography>
        <Typography variant='caption' sx={{fontWeight: 'bold'}}>נשאר לבזבז</Typography>
      </Stack>
    </Stack>
  </Stack>
)};

export default MonthSpending;