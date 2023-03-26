import React from 'react';
import './card.css';
export const CardComponent = () => {
  return (
    <div>
      <div className="card">
        <div className="cardInfo">
          <strong>West Coast</strong>
          <p>Vancouver Insland</p>
          <div className="cardLine"></div>
          <div className="kmdif">
            <p>75.5 Km</p>
            <hr />
            <p>Hard</p>
          </div>
        </div>
      </div>
    </div>
  );
};
