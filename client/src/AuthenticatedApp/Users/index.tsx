import { Card, CardContent, Divider, Typography, Stack } from "@mui/material";
import PersonalDetails from "./PersonalDetails";
import BalanceDetails from "./BalanceDetails";
import * as AuthService from "../../services/auth.service";

const Users = () => {
  const user = AuthService.getCurrentUser();

  return (
  <Card sx={{width: '900px', height: '400px'}}>
    <CardContent>
      <Typography color='#F87373' variant='h6'>
          פרטי משתמש
        </Typography>
      <Stack direction='row' justifyContent='space-between'>
        <PersonalDetails user={user}/>
        <Divider orientation="vertical" sx={{height: 'auto'}}></Divider>
        <BalanceDetails/>
      </Stack>
    </CardContent>
  </Card>
)};

export default Users;