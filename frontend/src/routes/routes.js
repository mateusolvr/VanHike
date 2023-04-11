import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ErrorPage } from '../pages/404/ErrorPage';
import { Home } from '../pages/home/Home';
import { Admin } from '../pages/admin/Admin';
import { Trail } from '../pages/trail/Trail';
import { AdminList } from '../pages/adminList/AdminList';
import { CreateArticle } from '../pages/createArticle/CreateArticle';
import { EditArticle } from '../pages/editArticle/EditArticle';
import { Context, AuthContext } from '../Context/AuthContext';
import { Loading } from '../pages/loading/Loading';

export const AppRoutes = () => {

	function ProtectedRoute({ children }) {
		const { authenticated, loading } = useContext(Context);

		if (loading) {
			return <Loading />;
		}

		if (!authenticated) {
			return <Navigate to='/' />;
		} else {
			return children;
		}
	}

	return (
		<AuthContext>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path="/hikes/:_id" element={<Trail />} />
				<Route path='/admin' element={<Admin />} />
				<Route
					path='/admin-list'
					element={
						<ProtectedRoute>
							<AdminList />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/admin/create-article'
					element={
						<ProtectedRoute>
							<CreateArticle />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/admin/edit-article/:id'
					element={
						<ProtectedRoute>
							<EditArticle />
						</ProtectedRoute>
					}
				/>
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</AuthContext>
	);
};
