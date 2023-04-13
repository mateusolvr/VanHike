import React, { useState, useContext } from 'react';
import './createArticle.css';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { Container, TextField, Button, Alert, Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import { Context } from '../../Context/AuthContext';

const theme = createTheme({
	palette: {
		primary: {
			main: '#fff',
			darker: '#053e85',
		},
	},
});

export const CreateArticle = () => {
	const [values, setValues] = useState('');
	const [mainImage, setMainImage] = useState();
	const [firstImage, setFirstImage] = useState();
	const [secondImage, setSecondImage] = useState();
	const [footerImage, setFooterImage] = useState();

	function handleChange(event) {
		const auxValues = { ...values };
		auxValues[event.target.id] = event.target.value;
		setValues(auxValues);
	}

	const { handleCreateArticle } = useContext(Context);

	return (
		<>
			<Stack sx={{ width: '100%' }} spacing={2}>
				<Alert variant='filled' severity='error' id='alert-message'>
					All form fields and Main Image must be filled.
				</Alert>
			</Stack>
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
							id='title'
							label='Article Title'
							variant='standard'
							sx={{ marginBottom: 3 }}
							onChange={(e) => handleChange(e)}
						/>

						<TextField
							fullWidth
							className='webform-content'
							id='province'
							label='Province'
							variant='standard'
							sx={{ marginBottom: 3 }}
							onChange={(e) => handleChange(e)}
						/>

						<TextField
							fullWidth
							className='webform-content'
							id='coordinates'
							label='Coordinates'
							variant='standard'
							placeholder='49.225616, -122.1561616 (Separate with comma and space)'
							sx={{ marginBottom: 5 }}
							onChange={(e) => handleChange(e)}
						/>

						<TextField
							fullWidth
							id='intro'
							className='webform-multiline'
							label='Introduction'
							multiline
							rows={4}
							placeholder='Type your text here...'
							sx={{ marginBottom: 3 }}
							onChange={(e) => handleChange(e)}
						/>

						<TextField
							fullWidth
							className='webform-content'
							id='mapURL'
							label='URL Map'
							variant='standard'
							sx={{ marginBottom: 3 }}
							onChange={(e) => handleChange(e)}
						/>

						<div className='input-sections'>
							<TextField
								className='webform-content'
								id='length'
								label='Length'
								variant='standard'
								sx={{ marginBottom: 5 }}
								onChange={(e) => handleChange(e)}
							/>

							<TextField
								className='webform-content'
								id='elevation'
								label='Elevation'
								variant='standard'
								sx={{ marginBottom: 5 }}
								onChange={(e) => handleChange(e)}
							/>

							<TextField
								className='webform-content'
								id='routeType'
								label='Route Type'
								variant='standard'
								sx={{ marginBottom: 5 }}
								onChange={(e) => handleChange(e)}
							/>
						</div>

						<TextField
							fullWidth
							id='firstText'
							className='webform-multiline'
							label='First Text'
							multiline
							rows={4}
							placeholder='Type your text here...'
							sx={{ marginBottom: 5 }}
							onChange={(e) => handleChange(e)}
						/>

						<TextField
							fullWidth
							id='secondText'
							className='webform-multiline'
							label='Second Text'
							multiline
							rows={4}
							placeholder='Type your text here...'
							sx={{ marginBottom: 3 }}
							onChange={(e) => handleChange(e)}
						/>

						<div className='input-sections'>
							<TextField
								className='webform-content way-point'
								id='waypoint1'
								label='Way Point Name'
								variant='standard'
								sx={{ marginBottom: 3 }}
								onChange={(e) => handleChange(e)}
							/>

							<TextField
								className='webform-content'
								id='waypoint1coordinate'
								label='Coordinate'
								variant='standard'
								placeholder='49.2256, -122.1546'
								sx={{ marginBottom: 3 }}
								onChange={(e) => handleChange(e)}
							/>
						</div>

						<div className='input-sections'>
							<TextField
								className='webform-content way-point'
								id='waypoint2'
								label='Way Point Name'
								variant='standard'
								sx={{ marginBottom: 3 }}
								onChange={(e) => handleChange(e)}
							/>

							<TextField
								className='webform-content'
								id='waypoint2coordinate'
								label='Coordinate'
								variant='standard'
								placeholder='49.2256, -122.1546'
								sx={{ marginBottom: 3 }}
								onChange={(e) => handleChange(e)}
							/>
						</div>

						<div className='input-sections'>
							<TextField
								className='webform-content way-point'
								id='waypoint3'
								label='Way Point Name'
								variant='standard'
								sx={{ marginBottom: 3 }}
								onChange={(e) => handleChange(e)}
							/>

							<TextField
								className='webform-content'
								id='waypoint3coordinate'
								label='Coordinate'
								variant='standard'
								placeholder='49.2256, -122.1546'
								sx={{ marginBottom: 3 }}
								onChange={(e) => handleChange(e)}
							/>
						</div>

						<div className='input-sections'>
							<TextField
								className='webform-content way-point'
								id='waypoint4'
								label='Way Point Name'
								variant='standard'
								sx={{ marginBottom: 5 }}
								onChange={(e) => handleChange(e)}
							/>

							<TextField
								className='webform-content'
								id='waypoint4coordinate'
								label='Coordinate'
								variant='standard'
								placeholder='49.2256, -122.1546'
								sx={{ marginBottom: 5 }}
								onChange={(e) => handleChange(e)}
							/>
						</div>

						<div className='input-sections upload-buttons'>
							<div className='images-holder'>
								<Button
									variant='outlined'
									component='label'
									sx={{ marginRight: 3 }}
									className='upload-button'>
									<FileUploadOutlinedIcon className='mui-icons' />
									Main Image
									<input
										hidden
										accept='image/*'
										type='file'
										name='mainImage'
										onChange={(e) => setMainImage(e.target.files[0])}
									/>
								</Button>
								{mainImage ? (
									<span>
										{mainImage.name}
										<CancelIcon
											className='cancelIcon'
											onClick={(e) => setMainImage()}
										/>
									</span>
								) : (
									<span></span>
								)}
							</div>

							<div className='images-holder'>
								<Button
									variant='outlined'
									component='label'
									sx={{ marginRight: 3 }}
									className='upload-button'>
									<FileUploadOutlinedIcon className='mui-icons' />
									First Image
									<input
										hidden
										accept='image/*'
										type='file'
										name='firstImage'
										onChange={(e) => setFirstImage(e.target.files[0])}
									/>
								</Button>
								{firstImage ? (
									<span>
										{firstImage.name}
										<CancelIcon
											className='cancelIcon'
											onClick={(e) => setFirstImage()}
										/>
									</span>
								) : (
									<span></span>
								)}
							</div>

							<div className='images-holder'>
								<Button
									variant='outlined'
									component='label'
									sx={{ marginRight: 3 }}
									className='upload-button'>
									<FileUploadOutlinedIcon className='mui-icons' />
									Second Image
									<input
										hidden
										accept='image/*'
										type='file'
										name='secondImage'
										onChange={(e) => setSecondImage(e.target.files[0])}
									/>
								</Button>
								{secondImage ? (
									<span>
										{secondImage.name}
										<CancelIcon
											className='cancelIcon'
											onClick={(e) => setSecondImage()}
										/>
									</span>
								) : (
									<span></span>
								)}
							</div>

							<div className='images-holder'>
								<Button
									variant='outlined'
									component='label'
									sx={{ marginRight: 3 }}
									className='upload-button'>
									<FileUploadOutlinedIcon className='mui-icons' />
									Footer Image
									<input
										hidden
										accept='image/*'
										type='file'
										name='footerImage'
										onChange={(e) => setFooterImage(e.target.files[0])}
									/>
								</Button>
								{footerImage ? (
									<span>
										{footerImage.name}
										<CancelIcon
											className='cancelIcon'
											onClick={(e) => setFooterImage()}
										/>
									</span>
								) : (
									<span></span>
								)}
							</div>
						</div>

						<Button
							variant='outlined'
							onClick={(e) =>
								handleCreateArticle(
									e,
									values,
									mainImage,
									firstImage,
									secondImage,
									footerImage
								)
							}>
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
