import React from 'react';
import './trailSelection.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export const TrailSelection = (props) => {
  return (
    <>
      <div className="trail-selection">
        <div className="trail-info">
          <a href={props.linkTo}>
            <p className="trail-name-title">
              {props.name} - {props.place}
            </p>
          </a>
          <p className="trail-detail">Post date: {props.datePosted}</p>
        </div>

        <div className="trail-info-action">
          <button className="trail-info-button">
            <EditOutlinedIcon className="mui-icons" />
            Edit
          </button>
          <button className="trail-info-button">
            <DeleteOutlineOutlinedIcon className="mui-icons" />
            Delete
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};
