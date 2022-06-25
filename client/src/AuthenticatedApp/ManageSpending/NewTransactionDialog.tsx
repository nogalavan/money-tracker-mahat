import { Dialog, DialogTitle, Switch, Stack, FormControl, InputLabel, TextField, Button, DialogContent, DialogActions, Select, MenuItem, SelectChangeEvent, Typography} from "@mui/material";
import { useState } from "react";
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { addTransaction } from "../../services/user.service";
import * as AuthService from "../../services/auth.service";

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

interface NewTransactionDialogProps {
  open: boolean;
  handleClose: () => void;
}

const selectOptions = ['אוכל', 'ביגוד', 'תרבות', 'דלק', 'שונות'];

const NewTransactionDialog = ({open, handleClose}: NewTransactionDialogProps) => {
  const [catagory, setCatagory] = useState('אוכל');
  const [discription, setDiscription] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('expense')

  const handleChange = (event: SelectChangeEvent) => {
    setCatagory(event.target.value);
  };

  const switchHandler = () => {
    type === 'expense' ? setType('income') : setType('expense');
  };

  const handleSubmit = () => {
    const user = AuthService.getCurrentUser();
    addTransaction(amount, new Date().getTime().toString(), discription, catagory, type, user.id);
    closeDialog();
  }

  const closeDialog = () => {
    setCatagory('אוכל');
    setDiscription('')
    setAmount(0);
    setType('expense');
    handleClose();
  }

  return (
  <Dialog open={open} onClose={closeDialog}>
    <DialogTitle>הוספת טרנזקציה</DialogTitle>
    <DialogContent>
      <Stack>
        <TextField label="תיאור" value={discription}
                    onInput={e => setDiscription((e.target as HTMLInputElement).value)} fullWidth sx={{m: '5px', width: '400px'}}/>
        <TextField label="סכום" value={amount}
                    onInput={e => setAmount((Number)((e.target as HTMLInputElement).value))} fullWidth sx={{m: '5px', width: '400px'}}/>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">קטגוריה</InputLabel>
            <Select value={catagory} 
                    labelId="demo-simple-select-label"
                    id="demo-simple-select" 
                    label="קטגוריה" 
                    onChange={handleChange} 
                    sx={{m: '5px', width: '200px'}}>
              {selectOptions.map(x => <MenuItem key={x} value={x}>{x}</MenuItem>)}
            </Select>
          </FormControl>
          <Stack direction='row' alignItems='center'>
            <Typography>הוצאה</Typography>
            <GreenSwitch onChange={switchHandler}/>
            <Typography>הכנסה</Typography>
          </Stack>
        </Stack>
      </Stack>
    </DialogContent>
    <DialogActions>
    <Button variant='contained' sx={{backgroundColor: '#F87373', color: 'white'}} onClick={handleSubmit}>
    שמירה
      </Button>
    </DialogActions>
  </Dialog>
)};

export default NewTransactionDialog;