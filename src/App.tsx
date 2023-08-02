import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants/routes';
import Home from './pages/Home';
import Login from './pages/Login';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGNIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
