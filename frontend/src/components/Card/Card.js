import React from 'react';
import './card.css';
export const CardComponent = ({
    _id,
    title,
    province,
    length,
    image,
    elevation,
}) => {
    return (
        <div>
            <div className="card">
                <img src={image} className="cardImg" alt="Trail Img" />
                <div className="cardInfo">
                    <strong>{title}</strong>
                    <p>{province}</p>
                    <div className="cardLine"></div>
                    <div className="kmdif">
                        <p>{length} m(s)</p>
                        <hr />
                        <p>Elevation: {elevation} m</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
