import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Context = createContext();

const urlHandler = 'http://localhost:5000';

function AuthContext({ children }) {
	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);

	let navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			setAuthenticated(true);
		}

		setLoading(false);
	}, []);

	// Handle Login
	async function handleLogin(event, values) {
		event.preventDefault();

		const url = `${urlHandler}/auth/login`;
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		await axios
			.post(url, values, config)
			.then((resp) => {
				const token = resp.data.token;

				localStorage.setItem('token', JSON.stringify(token));
				setAuthenticated(true);
				return navigate('/admin-list');
			})
			.catch((error) => {
				setAuthenticated(false);
				localStorage.removeItem('token');

				return navigate('/');
			});
	}

	// Handle Logout
	async function handleLogout(event) {
		event.preventDefault();

		setAuthenticated(false);
		localStorage.removeItem('token');

		return navigate('/');
	}

	// Handle Create Article
	async function handleCreateArticle(
		event,
		values,
		mainImage,
		firstImage,
		secondImage,
		footerImage
	) {
		event.preventDefault();
		const coordinates = values.coordinates.split(', ');

		const hike = {
			title: values.title,
			province: values.province,
			description: {
				intro: values.intro,
				first: values.firstText,
				second: values.secondText,
			},
			elevation: values.elevation,
			length: values.length,
			location: {
				latitude: coordinates[0],
				longitude: coordinates[1],
				mapUrl: values.mapURL,
			},
			routeType: values.routeType,
			wayPoints: [],
			images: {},
		};

		// Check for waypoints
		if (values.waypoint1 && values.waypoint1coordinate) {
			const waypointCoord = values.waypoint1coordinate.split(', ');

			const waypoint = {
				name: values.waypoint1,
				latitude: waypointCoord[0],
				longitude: waypointCoord[1],
			};

			hike.wayPoints.push(waypoint);
		}

		if (values.waypoint2 && values.waypoint2coordinate) {
			const waypointCoord = values.waypoint2coordinate.split(', ');

			const waypoint = {
				name: values.waypoint2,
				latitude: waypointCoord[0],
				longitude: waypointCoord[1],
			};

			hike.wayPoints.push(waypoint);
		}

		if (values.waypoint3 && values.waypoint3coordinate) {
			const waypointCoord = values.waypoint3coordinate.split(', ');

			const waypoint = {
				name: values.waypoint3,
				latitude: waypointCoord[0],
				longitude: waypointCoord[1],
			};

			hike.wayPoints.push(waypoint);
		}

		if (values.waypoint4 && values.waypoint4coordinate) {
			const waypointCoord = values.waypoint4coordinate.split(', ');

			const waypoint = {
				name: values.waypoint4,
				latitude: waypointCoord[0],
				longitude: waypointCoord[1],
			};

			hike.wayPoints.push(waypoint);
		}

		if (mainImage) {
			await handleImage(mainImage).then((response) => {
				hike.images.main = response;
			});
		}

		if (firstImage) {
			await handleImage(firstImage).then((response) => {
				hike.images.first = response;
			});
		}

		if (secondImage) {
			await handleImage(secondImage).then((response) => {
				hike.images.second = response;
			});
		}

		if (footerImage) {
			await handleImage(footerImage).then((response) => {
				hike.images.footer = response;
			});
		}

		// Sending to server
		const url = `${urlHandler}/vanhike/hike`;
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${JSON.parse(token)}`,
			},
		};

		await axios
			.post(url, hike, config)
			.then(() => {
				return navigate('/trails/1');
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// handleImage
	async function handleImage(image) {
		try {
			let imageURL = '';

			if (image) {
				const formData = new FormData();
				formData.append('file', image);
				formData.append(
					'upload_preset',
					process.env.REACT_APP_CLOUDINARY_PRESET
				);
				console.log(formData);
				await axios
					.post(process.env.REACT_APP_CLOUDINARY, formData)
					.then((res) => {
						imageURL = res.data.secure_url;
					})
					.catch((err) => {
						console.log(err);
					});

				return imageURL;
			}
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<Context.Provider
			value={{
				authenticated,
				setAuthenticated,
				loading,
				setLoading,
				handleLogin,
				handleLogout,
				handleCreateArticle,
			}}>
			{children}
		</Context.Provider>
	);
}

export { Context, AuthContext };
