import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './trailSelection.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Context } from '../../Context/AuthContext';

export const TrailSelection = (props) => {
	const navigate = useNavigate();
	const { handleDeleteTrail } = useContext(Context);

	function handleEditLink(e) {
		e.preventDefault();

		navigate(props.editLink);
	}

	return (
		<>
			<div className='trail-selection'>
				<div className='trail-info'>
					<a href={props.linkTo}>
						<p className='trail-name-title'>
							{props.name} - {props.place}
						</p>
					</a>
					<p className='trail-detail'>Post date: {props.datePosted}</p>
				</div>

				<div className='trail-info-action'>
					<button
						className='trail-info-button'
						onClick={(e) => handleEditLink(e)}>
						<EditOutlinedIcon className='mui-icons' />
						Edit
					</button>
					<button
						className='trail-info-button'
						onClick={(e) => handleDeleteTrail(e, props.id)}>
						<DeleteOutlineOutlinedIcon className='mui-icons' />
						Delete
					</button>
				</div>
			</div>
			<hr />
		</>
	);
};
