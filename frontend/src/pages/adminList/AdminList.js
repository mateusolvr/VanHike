import React from 'react';
import '../adminList/adminList.css';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { Container, Button, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TrailSelection } from '../../components/TrailSelection/TrailSelection';

const theme = createTheme({
	palette: {
		primary: {
			main: '#fff',
			darker: '#053e85',
		},
	},
});

export const AdminList = () => {
	return (
		<>
			<Navbar />
			<ThemeProvider theme={theme}>
				<Container maxWidth='lg'>
					<hr />
					<div className='actionBar'>
						<Button
							variant='outlined'
							sx={{ marginRight: 3 }}
							className='create-article-button'
							href='/admin/create-article'>
							CREATE ARTICLE
						</Button>

						<TextField
							sx={{ width: 400 }}
							className='webform-content'
							id='standard-basic'
							label='SEARCH ARTICLE'
							variant='standard'
						/>
					</div>
					<hr />

					<TrailSelection
						name='Joffre Lakes'
						place='British Columbia'
						datePosted='02/16/2023'
						linkTo='#!'
					/>

					<TrailSelection
						name='Joffre Lakes'
						place='British Columbia'
						datePosted='02/16/2023'
						linkTo='#!'
					/>

					<TrailSelection
						name='Joffre Lakes'
						place='British Columbia'
						datePosted='02/16/2023'
						linkTo='#!'
					/>

					<TrailSelection
						name='Joffre Lakes'
						place='British Columbia'
						datePosted='02/16/2023'
						linkTo='#!'
					/>
				</Container>

				<Footer />
			</ThemeProvider>
		</>
	);
};
