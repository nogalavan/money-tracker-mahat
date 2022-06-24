import { Button, TextField, Stack, Typography, Avatar } from "@mui/material";
import IUser from "../../types/user.type";

interface PersonalDetailsProps{
  user: IUser;
}

const PersonalDetails = ({user}: PersonalDetailsProps) => (
  <Stack sx={{width: '400px'}} justifyContent='space-evenly'>
    <Stack direction='row' justifyContent='space-evenly'>
      <Stack>
        <Avatar sx={{width: '70px', height: '70px'}}/>
        <Typography variant='h6'>{`${user.firstName} ${user.lastName}`}</Typography>
      </Stack>
      <Stack>
        <TextField label={user.email} variant="outlined" sx={{m: '5px 0'}}/>
        <TextField label={user.balance} variant="outlined"/>
      </Stack>
    </Stack>
    <Button variant='contained' sx={{backgroundColor: '#F87373', color: 'white', width: '150px', alignSelf: 'center'}}>
        עריכת פרטים
    </Button>
  </Stack>
);

export default PersonalDetails;