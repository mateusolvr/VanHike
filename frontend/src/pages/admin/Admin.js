import React, { useState, useContext } from 'react';
import { Context } from '../../Context/AuthContext';
import './admin.css';
import LogoIcon from '../admin/vanhike_icon.svg';
import { Navbar } from '../../components/Navbar/Navbar';
import { Grid, Card, CardContent, TextField, Button } from '@mui/material';

export const Admin = () => {
	const [values, setValues] = useState('');

	function handleChange(event) {
		const auxValues = { ...values };
		auxValues[event.target.id] = event.target.value;
		setValues(auxValues);
	}

	const { handleLogin } = useContext(Context);

	return (
		<>
			<Navbar />
			<Grid
				container
				spacing={0}
				direction='column'
				alignItems='center'
				justifyContent='center'>
				<Grid item>
					<Card className='admin-box'>
						<CardContent className='admin-form-box-content'>
							<figure>
								<img src={LogoIcon} alt='VanHike Logo' />
							</figure>

							<TextField
								sx={{ marginBottom: 3 }}
								fullWidth
								className='webform-content'
								id='user'
								label='E-mail'
								variant='standard'
								onChange={(e) => handleChange(e)}
							/>

							<TextField
								sx={{ marginBottom: 3 }}
								fullWidth
								className='webform-content'
								id='password'
								label='Password'
								type='password'
								variant='standard'
								onChange={(e) => handleChange(e)}
							/>

							<div className='btn-submit'>
								<Button
									className='btn-input'
									variant='outlined'
									onClick={(e) => handleLogin(e, values)}>
									Login
								</Button>
							</div>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</>
	);
};
