import React from 'react';
import '../pages/home/home.css';
export const CardComponent = () => {
  return (
    <div>
      {' '}
      <div className="cardContainer">
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
    </div>
  );
};
