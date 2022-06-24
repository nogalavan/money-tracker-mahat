import CircularProgress from '@mui/material/CircularProgress';
import {Typography} from '@mui/material';
import Box from '@mui/material/Box';

interface CircularProgressWithLabelProps {
  amount: number
}

const CircularProgressWithLabel = ({amount} : CircularProgressWithLabelProps) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', width: '110px' }}>
      <CircularProgress thickness={1.5} variant="determinate" style={{width: '110px', height: '110px', color: '#F87373'}} value={amount}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" color="text.secondary">
          {`${amount}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default CircularProgressWithLabel;

// CircularProgressWithLabel.propTypes = {
//   /**
//    * The value of the progress indicator for the determinate variant.
//    * Value between 0 and 100.
//    * @default 0
//    */
//   value: PropTypes.number.isRequired,
// };

// const CircularStatic = () => {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return <CircularProgressWithLabel value={progress} />;
// }

// export default CircularStatic;