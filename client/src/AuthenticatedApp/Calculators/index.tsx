import { Card, CardContent, Stack, Typography, Divider } from "@mui/material";
import ColumnChart from "./ColumnChart";
import PieChart from "./PieChart";

const Calculators = () => (
  <Card sx={{width: '900px', height: '400px'}}>
    <CardContent>
    <Typography color='#F87373' variant='h6'>
        גרפים וסטטיסטיקות
      </Typography>
    <Stack direction='row' justifyContent='space-between'>
      <PieChart/>
      <Divider orientation="vertical" sx={{height: 'auto'}}></Divider>
      <ColumnChart/>
    </Stack>
    </CardContent>
  </Card>
);

export default Calculators;