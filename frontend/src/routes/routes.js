import { Routes, Route } from 'react-router-dom';
import { ErrorPage } from '../pages/404/ErrorPage';
import { Home } from '../pages/home/Home';
import { Admin } from '../pages/admin/Admin';
import { Trail } from '../pages/trail/Trail';
import { AdminList } from '../pages/adminList/AdminList';
import { CreateArticle } from '../pages/createArticle/CreateArticle';
import { EditArticle } from '../pages/editArticle/EditArticle';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/trails/1' element={<Trail />} />
			<Route path='/admin' element={<Admin />} />
			<Route path='/admin-list' element={<AdminList />} />
			<Route path='/admin/create-article' element={<CreateArticle />} />
			<Route path='/admin/edit-article' element={<EditArticle />} />
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	);
};
