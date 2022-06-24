import { Stack, Typography } from "@mui/material";
import saving from '../../assets/saving.png'
import broken from '../../assets/broken.png'

const BalanceDetails = () => (
  <Stack sx={{width: '400px'}} alignItems='center'>
    <Typography color='#F87373' variant='h1'>
          1000₪
    </Typography>
    <Typography variant='h6'>
          מאזן כספי
    </Typography>
    <Stack direction='row' justifyContent='space-around' sx={{width: 'inherit'}}>
      <Stack>
        <img src={saving} alt='saving' height='80px' width='80px'></img>
        <Typography variant='body2' sx={{alignSelf: 'center'}}>12000</Typography>
        <Typography variant='caption'>סך כל ההכנסות</Typography>
      </Stack>
      <Stack>
        <img src={broken} alt='broken' height='80px' width='80px'></img>
        <Typography variant='body2' sx={{alignSelf: 'center'}}>11000</Typography>
        <Typography variant='caption'>סך כל ההוצאות</Typography>
      </Stack>
    </Stack>
  </Stack>
);

export default BalanceDetails;