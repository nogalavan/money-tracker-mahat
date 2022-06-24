import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const UnauthenticatedApp = () => (
  <Routes>
    <Route path='login' element={<Login />} />
    <Route path='register' element={<Register />} />
    <Route path='*' element={<Login />} />
  </Routes>
);

export default UnauthenticatedApp;