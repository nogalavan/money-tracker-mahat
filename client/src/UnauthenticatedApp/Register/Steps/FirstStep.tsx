import { Stack, TextField } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';

interface FirstStepProps {
  getFirstName: () => string;
  getLastName: () => string;
}

const FirstStep = () => {
	return (
    <Stack>
        <Stack alignItems='center' sx={{justifyContent: 'space-between'}}>
          <TextField label="שם" variant="outlined" sx={{width: '500px', m: '10px'}}/>
          <TextField label="שם משפחה" variant="outlined" sx={{width: '500px', m: '10px'}}/>
        </Stack>
    </Stack>
	);
};

export default FirstStep;
