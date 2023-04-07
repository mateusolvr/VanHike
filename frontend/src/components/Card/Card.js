import React from 'react';
import './card.css';
import cardImg from '../../pages/home/ImageDescription.png';
export const CardComponent = ({ trail }) => {
  return (
    <div>
      <div className="card">
        <img src={cardImg} className="cardImg" alt="" />
        {/* <img src={trail.img} className="cardImg" alt="" /> */}
        <div className="cardInfo">
          {/* <strong>{trail.title}</strong>
          <p>{trail.location}</p>
          <div className="cardLine"></div>
          <div className="kmdif">
            <p>{trail.distance}</p>
            <hr />
            <p>{trail.difficulty}</p> */}
          <strong>Joffre lakes</strong>
          <p>asdasdsa</p>
          <div className="cardLine"></div>
          <div className="kmdif">
            <p>12312213</p>
            <hr />
            <p>moderate</p>
          </div>
        </div>
      </div>
    </div>
  );
};
