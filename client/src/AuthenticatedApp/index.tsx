import { Route, Routes } from 'react-router-dom';
import ManageSpending from './ManageSpending';
import Calculators from './Calculators';
import Shell from './Shell';
import Users from './Users';
import NotFound from '../components/NotFound';

const ShellRoutes = () => (
  <Routes>
    <Route path='/' element={<Shell />}>
      <Route index element={<ManageSpending />} />
      <Route path='manage-spending' element={<ManageSpending />} />
      <Route path='calculators' element={<Calculators />} />
      <Route path='users' element={<Users />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  </Routes>
);

export default ShellRoutes;