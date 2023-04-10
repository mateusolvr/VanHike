import React, { useState, useContext, useEffect } from 'react';
import './editArticle.css';
import { useParams } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { Container, TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import { Context } from '../../Context/AuthContext';
import axios from 'axios';

const theme = createTheme({
	palette: {
		primary: {
			main: '#fff',
			darker: '#053e85',
		},
	},
});

export const EditArticle = () => {
	let { id } = useParams();

	const [values, setValues] = useState({});
	const [mainImage, setMainImage] = useState();
	const [firstImage, setFirstImage] = useState();
	const [secondImage, setSecondImage] = useState();
	const [footerImage, setFooterImage] = useState();
	const [imageLinks, setImageLinks] = useState({});

	const urlHandler = process.env.REACT_APP_URL_HANDLER;

	useEffect(() => {
		async function handleGetTrail() {
			try {
				const url = `${urlHandler}/vanhike/hikes/${id}`;

				axios
					.get(url)
					.then((resp) => {
						const data = resp.data;

						const valuesObj = {
							title: data.title,
							province: data.province,
							coordinates:
								data.location.latitude + ', ' + data.location.longitude,
							intro: data.description.intro,
							mapURL: data.location.mapUrl,
							length: data.length,
							elevation: data.elevation,
							routeType: data.routeType,
							firstText: data.description.first,
							secondText: data.description.second,
						};

						//Check waypoints
						if (data.wayPoints[0]) {
							valuesObj.waypoint1 = data.wayPoints[0].name;
							valuesObj.waypoint1coordinate =
								data.wayPoints[0].latitude + ', ' + data.wayPoints[0].longitude;
						}

						if (data.wayPoints[1]) {
							valuesObj.waypoint2 = data.wayPoints[1].name;
							valuesObj.waypoint2coordinate =
								data.wayPoints[1].latitude + ', ' + data.wayPoints[1].longitude;
						}

						if (data.wayPoints[2]) {
							valuesObj.waypoint3 = data.wayPoints[2].name;
							valuesObj.waypoint3coordinate =
								data.wayPoints[2].latitude + ', ' + data.wayPoints[2].longitude;
						}

						if (data.wayPoints[3]) {
							valuesObj.waypoint4 = data.wayPoints[3].name;
							valuesObj.waypoint4coordinate =
								data.wayPoints[3].latitude + ', ' + data.wayPoints[3].longitude;
						}

						// Check images
						const images = {};

						if (data.images.main) {
							images.main = data.images.main;
						}

						if (data.images.first) {
							images.first = data.images.first;
						}

						if (data.images.second) {
							images.second = data.images.second;
						}

						if (data.images.footer) {
							images.footer = data.images.footer;
						}

						setValues(valuesObj);
						setImageLinks(images);
					})
					.catch((err) => {
						console.log(err);
					});
			} catch (err) {
				console.log(err);
			}
		}

		handleGetTrail();
	}, [id, urlHandler]);

	function handleChange(event) {
		const auxValues = { ...values };
		auxValues[event.target.id] = event.target.value;
		setValues(auxValues);
	}

	const { handleEditArticle } = useContext(Context);

	return (
		<>
			<Navbar />
			<ThemeProvider theme={theme}>
				<Container>
					<hr />
					<div className='form-container'>
						<p className='page-title'>Edit Article</p>

						<hr className='text-line-break' />

						<TextField
							fullWidth
							className='webform-content'
							id='title'
							label='Article Title'
							variant='standard'
							sx={{ marginBottom: 3 }}
							value={values.title || ''}
							onChange={(e) => handleChange(e)}
						/>

						<TextField
							fullWidth
							className='webform-content'
							id='province'
							label='Province'
							variant='standard'
							sx={{ marginBottom: 3 }}
							value={values.province || ''}
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
							value={values.coordinates || ''}
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
							value={values.intro || ''}
							onChange={(e) => handleChange(e)}
						/>

						<TextField
							fullWidth
							className='webform-content'
							id='mapURL'
							label='URL Map'
							variant='standard'
							sx={{ marginBottom: 3 }}
							value={values.mapURL || ''}
							onChange={(e) => handleChange(e)}
						/>

						<div className='input-sections'>
							<TextField
								className='webform-content'
								id='length'
								label='Length'
								variant='standard'
								sx={{ marginBottom: 5 }}
								value={values.length || ''}
								onChange={(e) => handleChange(e)}
							/>

							<TextField
								className='webform-content'
								id='elevation'
								label='Elevation'
								variant='standard'
								sx={{ marginBottom: 5 }}
								value={values.elevation || ''}
								onChange={(e) => handleChange(e)}
							/>

							<TextField
								className='webform-content'
								id='routeType'
								label='Route Type'
								variant='standard'
								sx={{ marginBottom: 5 }}
								value={values.routeType || ''}
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
							value={values.firstText || ''}
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
							value={values.secondText || ''}
							onChange={(e) => handleChange(e)}
						/>

						<div className='input-sections'>
							<TextField
								className='webform-content way-point'
								id='waypoint1'
								label='Way Point Name'
								variant='standard'
								sx={{ marginBottom: 3 }}
								value={values.waypoint1 || ''}
								onChange={(e) => handleChange(e)}
							/>

							<TextField
								className='webform-content'
								id='waypoint1coordinate'
								label='Coordinate'
								variant='standard'
								placeholder='49.2256, -122.1546'
								sx={{ marginBottom: 3 }}
								value={values.waypoint1coordinate || ''}
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
								value={values.waypoint2 || ''}
								onChange={(e) => handleChange(e)}
							/>

							<TextField
								className='webform-content'
								id='waypoint2coordinate'
								label='Coordinate'
								variant='standard'
								placeholder='49.2256, -122.1546'
								sx={{ marginBottom: 3 }}
								value={values.waypoint2coordinate || ''}
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
								value={values.waypoint3 || ''}
								onChange={(e) => handleChange(e)}
							/>

							<TextField
								className='webform-content'
								id='waypoint3coordinate'
								label='Coordinate'
								variant='standard'
								placeholder='49.2256, -122.1546'
								sx={{ marginBottom: 3 }}
								value={values.waypoint3coordinate || ''}
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
								value={values.waypoint4 || ''}
								onChange={(e) => handleChange(e)}
							/>

							<TextField
								className='webform-content'
								id='waypoint4coordinate'
								label='Coordinate'
								variant='standard'
								placeholder='49.2256, -122.1546'
								sx={{ marginBottom: 5 }}
								value={values.waypoint4coordinate || ''}
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
									<span>{imageLinks.main ? 'Image uploaded' : ''}</span>
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
									<span>{imageLinks.first ? 'Image uploaded' : ''}</span>
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
									<span>{imageLinks.second ? 'Image uploaded' : ''}</span>
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
									<span>{imageLinks.footer ? 'Image uploaded' : ''}</span>
								)}
							</div>
						</div>

						<Button
							variant='outlined'
							onClick={(e) =>
								handleEditArticle(
									e,
									id,
									values,
									mainImage,
									firstImage,
									secondImage,
									footerImage,
									imageLinks
								)
							}>
							<ControlPointOutlinedIcon sx={{ marginRight: 1 }} />
							Save article
						</Button>
					</div>
				</Container>

				<Footer />
			</ThemeProvider>
		</>
	);
};
