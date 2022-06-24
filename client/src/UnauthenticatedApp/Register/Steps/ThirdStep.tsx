import { Stack, TextField } from '@mui/material';
import React from 'react';

const ThirdStep = () => {
	return (
		<Stack>
			<Stack alignItems='center' sx={{justifyContent: 'space-between'}}>
				<TextField label="מאזן בסיסי בשקלים" variant="outlined" sx={{width: '500px', m: '10px'}}/>
				<TextField label="תקציב חודשי" variant="outlined" sx={{width: '500px', m: '10px'}}/>
			</Stack>
		</Stack>
	);
};

export default ThirdStep;
