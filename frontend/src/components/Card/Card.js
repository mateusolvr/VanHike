import React from 'react';
import './card.css';
export const CardComponent = ({ trail }) => {
  return (
    <div>
      <div className="card">
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
