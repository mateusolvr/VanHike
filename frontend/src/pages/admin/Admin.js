import React from 'react';
import './admin.css';
import LogoIcon from '../admin/vanhike_icon.svg';
import { Navbar } from '../../components/Navbar/Navbar';
import { Grid, Card, CardContent, TextField, Button } from '@mui/material';

export const Admin = () => {
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
								id='standard-basic'
								label='E-mail'
								variant='standard'
							/>

							<TextField
								sx={{ marginBottom: 3 }}
								fullWidth
								className='webform-content'
								id='standard-password-input'
								label='Password'
								type='password'
								variant='standard'
							/>

							<div className='btn-submit'>
								<Button className='btn-input' variant='outlined'>
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
