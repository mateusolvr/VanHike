import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Context = createContext();

const urlHandler = 'http://localhost:5000';

function AuthContext({ children }) {
	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	let navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			axios.defaults.headers.post['Content-Type'] = 'application/json';
			axios.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
			setAuthenticated(true);
		}

		setLoading(false);
	}, []);

	// Handle Login
	async function handleLogin(event, values) {
		event.preventDefault();

		const url = `${urlHandler}/auth/login`;
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		await axios
			.post(url, values, config)
			.then((resp) => {
				const token = resp.data.token;

				localStorage.setItem('token', JSON.stringify(token));
				axios.defaults.headers.Authorization = `Bearer ${token}`;
				setAuthenticated(true);
				return navigate('/admin-list');
			})
			.catch((error) => {
				setAuthenticated(false);
				localStorage.removeItem('token');
				axios.defaults.headers.Authorization = undefined;

				return navigate('/');
			});
	}

	// Handle Logout
	async function handleLogout(event) {
		event.preventDefault();

		setAuthenticated(false);
		localStorage.removeItem('token');
		axios.defaults.headers.Authorization = undefined;

		return navigate('/');
	}

	return (
		<Context.Provider
			value={{
				authenticated,
				setAuthenticated,
				loading,
				setLoading,
				handleLogin,
				handleLogout,
			}}>
			{children}
		</Context.Provider>
	);
}

export { Context, AuthContext };
