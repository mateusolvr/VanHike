import { Routes, Route } from 'react-router-dom';
import { ErrorPage } from '../pages/404/ErrorPage';
import { Home } from '../pages/home/Home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
