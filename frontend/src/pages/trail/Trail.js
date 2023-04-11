import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Navbar } from '../../components/Navbar/Navbar';
import './trail.css';
import logo from '../../components/Navbar/logo.png';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { BsCloudSnow, BsMap } from 'react-icons/bs';

export const Trail = () => {
  const [trail, setTrail] = useState({});
  const { _id } = useParams();
  console.log(_id);
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  useEffect(() => {
    const getTrailData = async () => {
      await axios
        .get(`http://localhost:8005/vanhike/hikes/642f140b5af6de438e7b5a91`)
        .then((res) => {
          setTrail(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getTrailData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="singleTrailContainer">
        <img className="singleTrailImg" src={trail.images.main} alt="" />
        <div className="singleTrailInfoContainer">
          <div className="miniWeatherContainer">
            <div>
              <p>
                <BsCloudSnow size={30} /> 5° C
              </p>
            </div>

            <span>Snowing | H: 7C L-2C</span>
          </div>
          <h1 className="singleTrailTitle">{trail.title}</h1>
          <p className="singleTrailLocation">{trail.province}</p>
          <p className="singleTrailCoordinates">50.324123 N, 122.213123 W</p>
          <div className="smallDiv"></div>
          <p className="singleTrailDescription">
            Joffre Lakes in British Columbia, Canada, features three stunning
            glacial-fed lakes surrounded by towering mountains and lush forests.
            The scenic trail through the wilderness offers a chance to
            experience the natural beauty of the area up close, making it a
            must-see destination for nature lovers and hikers alike.
          </p>

          <div className="map">
            <BsMap size={20} className="bsMap" />
            <p> Open in Map</p>
          </div>
        </div>
      </div>
      <div className="learnMoreContainer">
        <p className="learnMore">Learn More</p>
        <div className="verticalLine"></div>
      </div>

      <div className="aboutTrailContainer">
        <h2>Joffre Lakes</h2>
        <div className="smallDiv"></div>
        <div className="aboutTrailInfo">
          <div className="lengthElevationRoute">
            <p>Length</p>
            <b>7.4Km</b>
          </div>
          <div className="lengthElevationRoute">
            <p>Elevation</p>
            <b>491 M</b>
          </div>
          <div className="lengthElevationRoute">
            <p>Route Type</p>
            <b>Out & Back</b>
          </div>
        </div>
        <div className="picAndTextContainer">
          <p>
            Joffre Lakes is a true gem of British Columbia, located in the heart
            of the breathtaking Pemberton Valley. This stunning hiking
            destination is known for its three turquoise glacial-fed lakes that
            are a sight to behold. The trail to the lakes is a 10 km journey
            through lush forests, meadows, and up to the majestic Upper Joffre
            Lake. Each lake offers something special, from Lower Joffre Lake's
            tranquil waters, to Middle Joffre Lake's panoramic views of the
            surrounding mountains, to Upper Joffre Lake's awe-inspiring sight of
            the Matier Glacier towering above it. Joffre Lakes Provincial Park
            is a paradise for nature lovers, hikers, and photographers. Whether
            you're seeking adventure or relaxation, the natural beauty of Joffre
            Lakes is an experience that will leave you breathless. Aside from
            its mesmerizing lakes, Joffre Lakes Provincial Park offers plenty of
            opportunities for outdoor activities. Visitors can go fishing or
            kayaking on the lakes, or explore the nearby glaciers and
            waterfalls. The park also features a campground where visitors can
            enjoy a night under the stars surrounded by nature.
          </p>
          <img src={trail.images.main} alt="" />
        </div>
        <div className="picAndTextContainer2">
          <img src={trail.images.main} alt="" />
          <p>
            The trail to Joffre Lakes is considered moderately difficult, but
            the breathtaking views and serene ambiance are worth the effort.
            Hiking the trail during the fall season offers visitors the chance
            to witness the beautiful autumn colors that envelop the surrounding
            forests. Overall, Joffre Lakes is a paradise for outdoor enthusiasts
            and nature lovers. Its stunning glacial-fed lakes, towering
            mountains, and lush forests create an unparalleled landscape that
            must be seen to be believed. A trip to Joffre Lakes is a
            once-in-a-lifetime experience that will leave you with unforgettable
            memories.
          </p>
        </div>
      </div>
      <img className="horizontalImg" src={trail.images.main} alt="" />
      <div className="weatherContainer">
        <h2>Weather</h2>
        <div className="horizontalLine"></div>
        <div className="weatherListContainer">
          <ul>
            {daysOfWeek.map((day) => (
              <>
                <p>{day}</p>
              </>
            ))}
          </ul>
        </div>
        <div className="waypointsDiv">
          <h2>Way points</h2>
          <div className="horizontalLine"></div>
          <div className="waypointsListContainer">
            <ul>
              <li>Waypoints</li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="footer">
        <img className="footerLogo" src={logo} alt="logo" />
        <span>2023 VanHike - All rights reserved</span>

        <div className="connectSmallDiv">
          <p>Connect with us</p>
          <div className="connectIcons">
            <FaFacebookF size={20} />
            <FaInstagram size={20} />
          </div>
        </div>
      </footer>
    </div>
  );
};
