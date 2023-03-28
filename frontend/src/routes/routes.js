import { Routes, Route } from 'react-router-dom';
import { ErrorPage } from '../pages/404/ErrorPage';
import { Home } from '../pages/home/Home';
import { Trail } from '../pages/trail/Trail';
import { Admin } from '../pages/admin/Admin';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/trails/1' element={<Trail />} />
			<Route path='/admin' element={<Admin />} />
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	);
};
