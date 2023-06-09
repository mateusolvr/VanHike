import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';

const Context = createContext();

const urlHandler = process.env.REACT_APP_URL_HANDLER;

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

				if (AxiosError.ERR_BAD_REQUEST) {
					const alertMsg = document.getElementById('alert-message');
					alertMsg.style.display = 'flex';

					setTimeout(() => {
						alertMsg.style.display = 'none';
					}, 8000);
				}
			});
	}

	// Handle Logout
	async function handleLogout(event) {
		event.preventDefault();

		setAuthenticated(false);
		localStorage.removeItem('token');

		return navigate('/');
	}

	// Form validation
	async function validateForm(values, mainImage) {
		if (
			values.title === '' ||
			values.province === '' ||
			values.intro === '' ||
			values.firstText === '' ||
			values.secondText === '' ||
			values.elevation === '' ||
			values.length === '' ||
			values.coordinates === '' ||
			values.mapURL === '' ||
			values.routeType === '' ||
			!values.title ||
			!values.province ||
			!values.intro ||
			!values.firstText ||
			!values.secondText ||
			!values.elevation ||
			!values.length ||
			!values.coordinates ||
			!values.mapURL ||
			!values.routeType ||
			!mainImage
		) {
			return false;
		} else {
			return true;
		}
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
		if (await validateForm(values, mainImage)) {
			setLoading(true);

			const coordinates = values.coordinates.split(',');

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
					latitude: coordinates[0].trim(),
					longitude: coordinates[1].trim(),
					mapUrl: values.mapURL,
				},
				routeType: values.routeType,
				wayPoints: [],
				images: {},
			};

			// Check for waypoints
			if (values.waypoint1 && values.waypoint1coordinate) {
				const waypointCoord = values.waypoint1coordinate.split(',');

				const waypoint = {
					name: values.waypoint1,
					latitude: waypointCoord[0].trim(),
					longitude: waypointCoord[1].trim(),
				};

				hike.wayPoints.push(waypoint);
			}

			if (values.waypoint2 && values.waypoint2coordinate) {
				const waypointCoord = values.waypoint2coordinate.split(',');

				const waypoint = {
					name: values.waypoint2,
					latitude: waypointCoord[0].trim(),
					longitude: waypointCoord[1].trim(),
				};

				hike.wayPoints.push(waypoint);
			}

			if (values.waypoint3 && values.waypoint3coordinate) {
				const waypointCoord = values.waypoint3coordinate.split(',');

				const waypoint = {
					name: values.waypoint3,
					latitude: waypointCoord[0].trim(),
					longitude: waypointCoord[1].trim(),
				};

				hike.wayPoints.push(waypoint);
			}

			if (values.waypoint4 && values.waypoint4coordinate) {
				const waypointCoord = values.waypoint4coordinate.split(',');

				const waypoint = {
					name: values.waypoint4,
					latitude: waypointCoord[0].trim(),
					longitude: waypointCoord[1].trim(),
				};

				hike.wayPoints.push(waypoint);
			}

			//Checks for images
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
				.then((resp) => {
					setLoading(false);
					return navigate(`/admin-list`);
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			if (AxiosError.ERR_BAD_REQUEST) {
				document.body.scrollTop = document.documentElement.scrollTop = 0;
				const alertMsg = document.getElementById('alert-message');
				alertMsg.style.display = 'flex';

				setTimeout(() => {
					alertMsg.style.display = 'none';
				}, 8000);
			}
		}
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

	// Handle Edit Article
	async function handleEditArticle(
		event,
		hikeId,
		values,
		mainImage,
		firstImage,
		secondImage,
		footerImage,
		imageLinks
	) {
		event.preventDefault();

		setLoading(true);

		const coordinates = values.coordinates.split(',');

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
				latitude: coordinates[0].trim(),
				longitude: coordinates[1].trim(),
				mapUrl: values.mapURL,
			},
			routeType: values.routeType,
			wayPoints: [],
			images: {},
		};

		// Check for waypoints
		if (values.waypoint1 && values.waypoint1coordinate) {
			const waypointCoord = values.waypoint1coordinate.split(',');

			const waypoint = {
				name: values.waypoint1,
				latitude: waypointCoord[0].trim(),
				longitude: waypointCoord[1].trim(),
			};

			hike.wayPoints.push(waypoint);
		}

		if (values.waypoint2 && values.waypoint2coordinate) {
			const waypointCoord = values.waypoint2coordinate.split(',');

			const waypoint = {
				name: values.waypoint2,
				latitude: waypointCoord[0].trim(),
				longitude: waypointCoord[1].trim(),
			};

			hike.wayPoints.push(waypoint);
		}

		if (values.waypoint3 && values.waypoint3coordinate) {
			const waypointCoord = values.waypoint3coordinate.split(',');

			const waypoint = {
				name: values.waypoint3,
				latitude: waypointCoord[0].trim(),
				longitude: waypointCoord[1].trim(),
			};

			hike.wayPoints.push(waypoint);
		}

		if (values.waypoint4 && values.waypoint4coordinate) {
			const waypointCoord = values.waypoint4coordinate.split(',');

			const waypoint = {
				name: values.waypoint4,
				latitude: waypointCoord[0].trim(),
				longitude: waypointCoord[1].trim(),
			};

			hike.wayPoints.push(waypoint);
		}

		//Checks for images
		if (mainImage) {
			await handleImage(mainImage).then((response) => {
				hike.images.main = response;
			});
		} else if (imageLinks.main) {
			hike.images.main = imageLinks.main;
		}

		if (firstImage) {
			await handleImage(firstImage).then((response) => {
				hike.images.first = response;
			});
		} else if (imageLinks.first) {
			hike.images.first = imageLinks.first;
		}

		if (secondImage) {
			await handleImage(secondImage).then((response) => {
				hike.images.second = response;
			});
		} else if (imageLinks.second) {
			hike.images.second = imageLinks.second;
		}

		if (footerImage) {
			await handleImage(footerImage).then((response) => {
				hike.images.footer = response;
			});
		} else if (imageLinks.footer) {
			hike.images.footer = imageLinks.footer;
		}

		// Sending to server
		const url = `${urlHandler}/vanhike/hikes/${hikeId}`;
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${JSON.parse(token)}`,
			},
		};

		await axios
			.put(url, hike, config)
			.then((resp) => {
				setLoading(false);
				return navigate(`/admin-list`);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// Handle Delete Trail
	async function handleDeleteTrail(e, hikeId) {
		e.preventDefault();

		const url = `${urlHandler}/vanhike/hikes/${hikeId}`;
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${JSON.parse(token)}`,
			},
		};

		await axios
			.delete(url, config)
			.then(() => {
				return navigate(0);
			})
			.catch((error) => {
				console.log(error);
			});
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
				handleEditArticle,
				handleDeleteTrail,
			}}>
			{children}
		</Context.Provider>
	);
}

export { Context, AuthContext };
