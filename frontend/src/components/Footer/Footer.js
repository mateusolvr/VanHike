import React from 'react';
import logo from '../../components/Navbar/logo.png';
import './footer.css';
import { Container } from '@mui/material';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
	return (
		<Container>
			<footer className='footer'>
				<img className='footerLogo' src={logo} alt='logo' />
				<span>2023 VanHike - All rights reserved</span>
				<div className='connectSmallDiv'>
					<p>Connect with us</p>
					<div className='connectIcons'>
						<FaFacebookF size={20} />
						<FaInstagram size={20} />
					</div>
				</div>
			</footer>
		</Container>
	);
};
