import { Typography } from '@mui/material';
// import * as AuthService from "./services/auth.service";
import * as AuthService from "../../../services/auth.service";

export const greetings = {
  morningGreeting: 'בוקר טוב',
  afternoonGreeting: 'צהריים טובים',
  nightGreeting: 'ערב טוב'
};

export const getPartOfTheDay = (hour: number) => {
  const isMorning = hour >= 6 && hour < 12;
  const isAfternoon = hour >= 12 && hour <= 18;

  if (isMorning) {
    return greetings.morningGreeting;
  }
  if (isAfternoon) {
    return greetings.afternoonGreeting;
  }

  return greetings.nightGreeting;
};

const Greeting = () => {
  const user = AuthService.getCurrentUser();

  return (
  <Typography variant='caption'>
    {`${getPartOfTheDay(new Date().getHours())}, ${user.firstName}`}
  </Typography>
)};

export default Greeting;