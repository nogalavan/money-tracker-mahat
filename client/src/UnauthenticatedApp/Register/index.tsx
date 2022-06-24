import { Button, Card, Stepper, StepLabel, Step, Stack, Typography, styled, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/auth.service';

const MyStepper = styled(Stepper)(({ theme }) => ({
    "& .muirtl-13vlute-MuiSvgIcon-root-MuiStepIcon-root.Mui-active": { color: "#F87373" },
    "& .muirtl-13730g4-MuiStepIcon-text": {fill: 'white'},
}));

const StyledButton = styled(Button)`
  border: '1px solid';
  color: #F87373;
  &:hover {
    background-color: #F87373;
    color: white;
  }
`;

const steps = [
  'פרטים אישיים',
  'יצירת משתמש',
  'יעד כלכלי',
];

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [balance, setBalance] = useState(0);
  const [budget, setBudget] = useState(0);


  const handleRegister = () => {
    register(username, email, password, firstName, lastName, balance, budget).then(
      (response) => {
        console.log('yyyay');
        navigate('/');
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  };

  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    setActiveStep(activeStep + 1)
  }

  return (
    <Card sx={{alignSelf: 'center', width: '600px',height: '450px'}}>
      <Stack justifyContent='space-around' sx={{height: '100%'}}>
        <Typography color='#F87373' variant='h5' sx={{alignSelf: 'center', fontWeight: 'bold'}}>הרשמה</Typography>
        {activeStep === 0 && 
        <Stack alignItems='center' sx={{justifyContent: 'space-between'}}>
          <TextField label="שם" value={firstName}
                    onInput={e => setFirstName((e.target as HTMLInputElement).value)} variant="outlined" sx={{width: '500px', m: '10px'}}/>
          <TextField label="שם משפחה" value={lastName}
                    onInput={e => setLastName((e.target as HTMLInputElement).value)} variant="outlined" sx={{width: '500px', m: '10px'}}/>
        </Stack>}
        {activeStep === 1 && 
        <Stack alignItems='center' sx={{justifyContent: 'space-between'}}>
          <TextField label="מייל" value={email}
                    onInput={e => setEmail((e.target as HTMLInputElement).value)} variant="outlined" sx={{width: '500px', m: '10px'}}/>
          <TextField label="שם משתמש" value={username}
                    onInput={e => setUsername((e.target as HTMLInputElement).value)} variant="outlined" sx={{width: '500px', m: '10px'}}/>
          <TextField label="סיסמה" value={password}
                    onInput={e => setPassword((e.target as HTMLInputElement).value)} variant="outlined" sx={{width: '500px', m: '10px'}}/>
        </Stack>}
        {activeStep === 2 && 
        <Stack alignItems='center' sx={{justifyContent: 'space-between'}}>
          <TextField label="מאזן בסיסי בשקלים" value={balance}
                    onInput={e => setBalance((Number)((e.target as HTMLInputElement).value))} variant="outlined" sx={{width: '500px', m: '10px'}}/>
          <TextField label="תקציב חודשי" value={budget}
                    onInput={e => setBudget((Number)((e.target as HTMLInputElement).value))} variant="outlined" sx={{width: '500px', m: '10px'}}/>
        </Stack>}
        <StyledButton onClick={activeStep === 2 ? handleRegister : handleNextStep} variant='outlined' sx={{color: '#F87373', border: '1px solid', width: '100px', alignSelf: 'center'}}>
            {activeStep === 2 ? 'סיום' : 'הבא'}
        </StyledButton>
        <MyStepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label} completed={false}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </MyStepper>
      </Stack>
    </Card>
  );
};

export default Register;