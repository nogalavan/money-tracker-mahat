import { Stack, Button, TableContainer, Typography, TableBody, TableRow, TableCell, Table } from "@mui/material";
import moment from "moment";
import NewTransactionDialog from "./NewTransactionDialog";

const TransactionDetails = ({user, dialogOpen, dialogClose, open}: any) => {

  return (
  <Stack direction='column' sx={{width: '500px', alignItems: 'space-around'}}>
    <Stack direction='row' justifyContent='space-between' sx={{mb: '10px'}}>
      <Typography variant='subtitle1'>
        פירוט טרנזקציות חודשי
      </Typography>
      <Button variant='contained' sx={{backgroundColor: '#F87373', color: 'white'}} onClick={dialogOpen}>
        הוספת טרנזקציה
      </Button>
    </Stack>
    <TableContainer sx={{ height: '300px' }}>
    <Table sx={{ height: "max-content" }}>
      <TableBody>
        {user.transactions.map(({ _id, date, catagory, amount, type, discription } : any) => 
        <TableRow key={_id}>
          <TableCell>{moment(date, "x").format("DD-MM-YYYY")}</TableCell>
          <TableCell>{catagory}</TableCell>
          <TableCell>{discription}</TableCell>
          {type === 'income' ? <TableCell sx={{color: 'green', fontWeight: 'bold'}}>{amount}+</TableCell> : <TableCell sx={{color: 'red', fontWeight: 'bold'}}>{amount}-</TableCell>}
        </TableRow>)}
      </TableBody>
    </Table>
    </TableContainer>
    <NewTransactionDialog open={open} handleClose={dialogClose}></NewTransactionDialog>
  </Stack>
)};

export default TransactionDetails;