import { Routes, Route } from 'react-router-dom';
import { ErrorPage } from './pages/404/ErrorPage';
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<About />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
