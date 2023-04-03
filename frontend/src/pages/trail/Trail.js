import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from '../../components/Navbar/Navbar';
import './trail.css';

export const Trail = () => {
  const [trail, setTrail] = useState({});

  useEffect(() => {
    const getTrailData = async () => {
      try {
        const response = await axios.get(`/trails/${response.params.id}`);
        setTrail(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTrailData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mainContainer">
        <div className="singleTrailContainer">
          <div className="singleTrailImgContainer">
            <img
              src={trail.image}
              alt={trail.title}
              className="singleTrailImg"
            />
          </div>
          <div className="singleTrailInfoContainer">
            <h1 className="singleTrailTitle">{trail.title}</h1>
            <p className="singleTrailLocation">{trail.location}</p>
            <div className="singleTrailLine"></div>
            <div className="singleTrailDetails">
              <p>{`${trail.length} km`}</p>
              <hr />
              <p>{trail.difficulty}</p>
            </div>
            <p className="singleTrailDescription">{trail.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
