import React, { useContext } from 'react';
import { Context } from '../../Context/AuthContext';
import './Navbar.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {

	const { authenticated, handleLogout } = useContext(Context);

	const adminLink = (
		<li>
			<Link to='/admin'> ADMIN</Link>
		</li>
	);
	const loggedLink = (
		<>
			<li>
				<Link to='/admin-list'> ADMIN</Link>
			</li>
			<li>
				<Link onClick={(e) => handleLogout(e)}> LOGOUT</Link>
			</li>
		</>
	);
	return (
		<nav className='navbar'>
			<img src={logo} alt='logo' />
			<ul>
				<li>
					<Link to='/'> ROUTES & TRAILS</Link>
				</li>
				{authenticated ? loggedLink : adminLink}
			</ul>
		</nav>
	);
};
