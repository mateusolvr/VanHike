import { Routes, Route } from 'react-router-dom';
import { ErrorPage } from '../pages/404/ErrorPage';
import { Home } from '../pages/home/Home';
import { Trail } from '../pages/trail/Trail';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trails/:id" element={<Trail />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
