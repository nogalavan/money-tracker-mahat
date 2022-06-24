import {
  AppBar, Grid, Toolbar, Typography, Stack
} from '@mui/material';
import NavLink from './NavLink';
import Greeting from './Greeting';
import ColorModeButton from './ColorModeButton';
import logo from '../../assets/logo.png';

interface NavBarProps {
  height: string;
}

const NavBar = ({ height }: NavBarProps) => (
  <AppBar position='relative' sx={{ height, minWidth: '620px' }}>
    <Toolbar>
      <Grid
        container
        flexWrap='nowrap'
        alignItems='center'
        justifyContent='space-between'
      >
        <Grid container flexWrap='nowrap' sx={{ width: 'auto' }}>
          <Grid item>
            <Stack direction='row'>
              <img src={logo} alt='logo' height='40px' width='40px'></img>
              <Typography color='#F87373' variant='h5' marginRight='50px' sx={{fontWeight: '700', alignSelf: 'center'}}>
                מעקב כספים
              </Typography>
            </Stack>
          </Grid>
          <Grid
            container
            justifyContent='space-around'
            alignItems='center'
            wrap='nowrap'
            sx={{ width: 'auto', height: '100%' }}
          >
            <NavLink to='/'>ניהול הכנסות והוצאות</NavLink>
            <NavLink to='/calculators'>מצב חודשי</NavLink>
            <NavLink to='/users'>ניהול פרטי משתמש</NavLink>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ width: 'auto' }}
          alignItems='baseline'
          flexWrap='nowrap'
        >
          <Greeting />
          <ColorModeButton />
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default NavBar;