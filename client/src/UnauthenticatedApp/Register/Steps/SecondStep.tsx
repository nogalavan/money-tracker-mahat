import { Stack, TextField } from '@mui/material';
import React from 'react';

const SecondStep = () => {
	return (
		<Stack>
        <Stack alignItems='center' sx={{justifyContent: 'space-between'}}>
          <TextField label="מייל" variant="outlined" sx={{width: '500px', m: '10px'}}/>
          <TextField label="שם משתמש" variant="outlined" sx={{width: '500px', m: '10px'}}/>
          <TextField label="סיסמה" variant="outlined" sx={{width: '500px', m: '10px'}}/>
        </Stack>
    </Stack>
	);
};

export default SecondStep;
