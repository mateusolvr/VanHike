import React from 'react';
import './createArticle.css';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { Container, TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';

const theme = createTheme({
	palette: {
		primary: {
			main: '#fff',
			darker: '#053e85',
		},
	},
});

export const CreateArticle = () => {
	return (
		<>
			<Navbar />
			<ThemeProvider theme={theme}>
				<Container>
					<hr />
					<div className='form-container'>
						<p className='page-title'>Create Article</p>

						<hr className='text-line-break' />

						<TextField
							fullWidth
							className='webform-content'
							id='standard-basic'
							label='Article Title'
							variant='standard'
							sx={{ marginBottom: 3 }}
						/>

						<TextField
							fullWidth
							className='webform-content'
							id='standard-basic'
							label='Location'
							variant='standard'
							sx={{ marginBottom: 3 }}
						/>

						<TextField
							fullWidth
							className='webform-content'
							id='standard-basic'
							label='Coordinates'
							variant='standard'
							sx={{ marginBottom: 5 }}
						/>

						<TextField
							fullWidth
							id='outlined-multiline-static'
							className='webform-multiline'
							label='Introduction'
							multiline
							rows={4}
							placeholder='Type your text here...'
							sx={{ marginBottom: 3 }}
						/>

						<TextField
							fullWidth
							className='webform-content'
							id='standard-basic'
							label='URL Map'
							variant='standard'
							sx={{ marginBottom: 3 }}
						/>

						<div className='input-sections'>
							<TextField
								className='webform-content'
								id='standard-basic'
								label='Length'
								variant='standard'
								sx={{ marginBottom: 5 }}
							/>

							<TextField
								className='webform-content'
								id='standard-basic'
								label='Elevation'
								variant='standard'
								sx={{ marginBottom: 5 }}
							/>

							<TextField
								className='webform-content'
								id='standard-basic'
								label='Route Type'
								variant='standard'
								sx={{ marginBottom: 5 }}
							/>
						</div>

						<TextField
							fullWidth
							id='outlined-multiline-static'
							className='webform-multiline'
							label='First Text'
							multiline
							rows={4}
							placeholder='Type your text here...'
							sx={{ marginBottom: 5 }}
						/>

						<TextField
							fullWidth
							id='outlined-multiline-static'
							className='webform-multiline'
							label='Second Text'
							multiline
							rows={4}
							placeholder='Type your text here...'
							sx={{ marginBottom: 3 }}
						/>

						<div className='input-sections'>
							<TextField
								className='webform-content way-point'
								id='standard-basic'
								label='Way Point Name'
								variant='standard'
								sx={{ marginBottom: 3 }}
							/>

							<TextField
								className='webform-content'
								id='standard-basic'
								label='Coordinate'
								variant='standard'
								sx={{ marginBottom: 3 }}
							/>
						</div>

						<div className='input-sections'>
							<TextField
								className='webform-content way-point'
								id='standard-basic'
								label='Way Point Name'
								variant='standard'
								sx={{ marginBottom: 3 }}
							/>

							<TextField
								className='webform-content'
								id='standard-basic'
								label='Coordinate'
								variant='standard'
								sx={{ marginBottom: 3 }}
							/>
						</div>

						<div className='input-sections'>
							<TextField
								className='webform-content way-point'
								id='standard-basic'
								label='Way Point Name'
								variant='standard'
								sx={{ marginBottom: 3 }}
							/>

							<TextField
								className='webform-content'
								id='standard-basic'
								label='Coordinate'
								variant='standard'
								sx={{ marginBottom: 3 }}
							/>
						</div>

						<div className='input-sections'>
							<TextField
								className='webform-content way-point'
								id='standard-basic'
								label='Way Point Name'
								variant='standard'
								sx={{ marginBottom: 5 }}
							/>

							<TextField
								className='webform-content'
								id='standard-basic'
								label='Coordinate'
								variant='standard'
								sx={{ marginBottom: 5 }}
							/>
						</div>

						<div className='input-sections upload-buttons'>
							<Button
								variant='outlined'
								component='label'
								sx={{ marginRight: 3 }}
								className='upload-button'>
								<FileUploadOutlinedIcon className='mui-icons' />
								Main Image
								<input hidden accept='image/*' type='file' />
							</Button>

							<Button
								variant='outlined'
								component='label'
								sx={{ marginRight: 3 }}
								className='upload-button'>
								<FileUploadOutlinedIcon className='mui-icons' />
								First Content Image
								<input hidden accept='image/*' type='file' />
							</Button>

							<Button
								variant='outlined'
								component='label'
								sx={{ marginRight: 3 }}
								className='upload-button'>
								<FileUploadOutlinedIcon className='mui-icons' />
								Second Content Image
								<input hidden accept='image/*' type='file' />
							</Button>

							<Button
								variant='outlined'
								component='label'
								sx={{ marginRight: 3 }}
								className='upload-button'>
								<FileUploadOutlinedIcon className='mui-icons' />
								Footer Image
								<input hidden accept='image/*' type='file' />
							</Button>
						</div>

						<Button variant='outlined'>
							<ControlPointOutlinedIcon sx={{ marginRight: 1 }} />
							Create article
						</Button>
					</div>
				</Container>

				<Footer />
			</ThemeProvider>
		</>
	);
};
