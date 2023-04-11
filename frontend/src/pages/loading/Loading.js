import React from 'react';
import mapAnimation from './mapAnimation.gif';
import './loading.css';

export const Loading = () => {
	return (
		<div className='loading-container'>
			<picture className='map-image'>
				<img src={mapAnimation} alt='Loading' />
			</picture>
			<h1>Loading...</h1>
		</div>
	);
};
