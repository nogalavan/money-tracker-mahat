import { Button, Card, TextField, Stack, Typography } from "@mui/material"
import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../providers/Auth';
// import { User } from '../types/User';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import { login } from "../services/auth.service";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    login(username, password).then(
      () => {
        window.location.reload();
      },
      (error) => {
        // const resMessage =
        //   (error.response &&
        //     error.response.data &&
        //     error.response.data.message) ||
        //   error.message ||
        //   error.toString();

        // setLoading(false);
        // setMessage(resMessage);
      }
    );
    // navigate('/');
  };

  return (
      <Card sx={{p: '50px 100px', width: '700px'}}>
        <Stack>
          <img src={logo} alt='logo' height='100px' width='100px' style={{alignSelf: 'center'}}></img>
          <Typography color='#F87373' variant='h4' sx={{alignSelf: 'center', mb: '20px', fontWeight: '500'}}>מעקב כספים</Typography>
          <TextField required 
                    value={username}
                    onInput={e => setUsername((e.target as HTMLInputElement).value)} 
                    label="שם משתמש" 
                    variant="outlined" 
                    sx={{mb: '20px'}}/>
          <TextField required value={password} type='password'
                    onInput={e => setPassword((e.target as HTMLInputElement).value)}  label="סיסמה" variant="outlined" sx={{mb: '20px'}}/>
          <Button onClick={handleLogin} variant='contained' sx={{m: '0px 160px', backgroundColor: '#F87373', color: 'white'}}>
            התחברות
          </Button>
          <Link to='register' style={{alignSelf: 'center', marginTop: '20px', color: 'darkcyan'}}>עוד אין לכם משתמש? הירשמו עכשיו</Link>
        </Stack>
      </Card>
  );
};

export default Login;