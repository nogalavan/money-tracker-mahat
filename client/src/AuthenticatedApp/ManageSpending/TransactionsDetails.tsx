import { Stack, Button, TableContainer, Typography, TableBody, TableRow, TableCell, Table } from "@mui/material";
import moment from "moment";
import { useState } from "react";
import IUser from "../../types/user.type";
import NewTransactionDialog from "./NewTransactionDialog";

interface TransactionDetailsProps{
  user: IUser;
}

const TransactionDetails = ({user} : TransactionDetailsProps) => {
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
  <Stack direction='column' sx={{width: '500px', alignItems: 'space-around'}}>
    <Stack direction='row' justifyContent='space-between' sx={{mb: '10px'}}>
      <Typography variant='subtitle1'>
        פירוט טרנזקציות חודשי
      </Typography>
      <Button variant='contained' sx={{backgroundColor: '#F87373', color: 'white'}} onClick={handleClickOpen}>
        הוספת טרנזקציה
      </Button>
    </Stack>
    <TableContainer sx={{ height: '300px' }}>
    <Table sx={{ height: "max-content" }}>
      <TableBody>
        {user.transactions.map(({id, date, catagory, amount, type}) => 
        <TableRow key={id}>
          <TableCell>{moment(date).calendar()}</TableCell>
          <TableCell>{catagory}</TableCell>
          {type==='deposit' ? <TableCell sx={{color: 'green', fontWeight: 'bold'}}>{amount}+</TableCell> : <TableCell sx={{color: 'red', fontWeight: 'bold'}}>{amount}-</TableCell>}
        </TableRow>)}
      </TableBody>
    </Table>
    </TableContainer>
    <NewTransactionDialog open={open} handleClose={handleClose}></NewTransactionDialog>
  </Stack>
)};

export default TransactionDetails;