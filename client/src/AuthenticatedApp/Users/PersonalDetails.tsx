import { Button, TextField, Stack, Typography, Avatar } from "@mui/material";
import IUser from "../../types/user.type";
import {update} from '../../services/auth.service';
import {useState } from 'react';

interface PersonalDetailsProps{
  user: IUser;
}

const PersonalDetails = ({user}: PersonalDetailsProps) => {
  const [email, setEmail] = useState(user.email);
  const [budget, setBudget] = useState(user.budget);

  const saveUser = () => {
    update(user.username, email, budget);
  }

  return <Stack sx={{width: '400px'}} justifyContent='space-evenly'>
    <Stack direction='row' justifyContent='space-evenly'>
      <Stack>
        <Avatar sx={{width: '70px', height: '70px'}}/>
        <Typography variant='h6'>{`${user.firstName} ${user.lastName}`}</Typography>
      </Stack>
      <Stack>
        <TextField value={email} label="מייל" variant="outlined" sx={{m: '5px 0'}}
          onChange={(e) => setEmail(e.target.value)}/>
        <TextField value={budget} label="תקציב חודשי בשקלים" variant="outlined"
          onChange={(e) => setBudget(parseInt(e.target.value, 10))}/>
      </Stack>
    </Stack>
    <Button variant='contained' sx={{backgroundColor: '#F87373', color: 'white', width: '150px', alignSelf: 'center'}}
      onClick={saveUser}>
        עריכת פרטים
    </Button>
  </Stack>
};

export default PersonalDetails;