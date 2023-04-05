import React from 'react';
import logo from '../../components/Navbar/logo.png';

export const Footer = () => {
	return (
		<footer className='footer'>
			<img className='footerLogo' src={logo} alt='logo' />
			<span>2023 VanHike - All rights reserved</span>
			<div className='connectSmallDiv'>
				<p>Connect with us</p>
				<p>F</p>
				<p>I</p>
			</div>
		</footer>
	);
};
