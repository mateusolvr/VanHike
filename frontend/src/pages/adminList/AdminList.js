import React, { useEffect, useState } from 'react';
import '../adminList/adminList.css';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { Container, Button, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TrailSelection } from '../../components/TrailSelection/TrailSelection';
import axios from 'axios';

const theme = createTheme({
	palette: {
		primary: {
			main: '#fff',
			darker: '#053e85',
		},
	},
});

export const AdminList = () => {
	const urlHandler = process.env.REACT_APP_URL_HANDLER;
	const [trails, setTrails] = useState([]);

	useEffect(() => {
		async function handleGetTrails() {
			try {
				const url = `${urlHandler}/vanhike/hikes`;

				axios
					.get(url)
					.then((resp) => {
						setTrails(resp.data.reverse());
					})
					.catch((err) => {
						console.log(err);
					});
			} catch (err) {
				console.log(err);
			}
		}

		handleGetTrails();
	}, [urlHandler]);

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

					{trails.map((trail) => {
						const date = trail.creationDate.split(' ');
						const trailDate = date[0].replaceAll('-', '/');
						return (
							<TrailSelection
								name={trail.title}
								place={trail.province}
								datePosted={trailDate}
								linkTo={`/trails/${trail._id}`}
								editLink={`/admin/edit-article/${trail._id}`}
								id={trail._id}
								key={trail._id}
							/>
						);
					})}
				</Container>

				<Footer />
			</ThemeProvider>
		</>
	);
};
