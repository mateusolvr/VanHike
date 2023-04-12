import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Navbar } from '../../components/Navbar/Navbar';
import './trail.css';
import logo from '../../components/Navbar/logo.png';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { BsMap } from 'react-icons/bs';
import { Footer } from '../../components/Footer/Footer';

export const Trail = () => {
  const urlHandler = process.env.REACT_APP_URL_HANDLER;
  const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [trail, setTrail] = useState({});
  const [forecastWeather, setForecastWeather] = useState({});
  const { _id } = useParams();

  useEffect(() => {
    const getWeatherData = async (trail) => {
      await axios
        .get(
          `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${trail.location.latitude},${trail.location.longitude}&aqi=no&alerts=no&days=7`
        )
        .then((res) => {
          setForecastWeather(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getTrailData = async () => {
      await axios
        .get(`${urlHandler}/vanhike/hikes/${_id}`)
        .then((res) => {
          setTrail(res.data);
          getWeatherData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getTrailData();
  }, [_id]);

  return (
    <div>
      <Navbar />
      <div className="singleTrailContainer">
        <img
          className="singleTrailImg"
          src={
            trail && trail.images && trail.images.main ? trail.images.main : ''
          }
          alt=""
        />
        <div className="singleTrailInfoContainer">
          <div className="miniWeatherContainer">
            <div>
              <p>
                <img
                  className="weatherIcon"
                  src={
                    forecastWeather &&
                    forecastWeather.current &&
                    forecastWeather.current.condition
                      ? forecastWeather.current.condition.icon
                      : ''
                  }
                  alt=""
                />{' '}
                {forecastWeather &&
                forecastWeather.current &&
                forecastWeather.current.temp_c
                  ? forecastWeather.current.temp_c
                  : ''}
                ° C
              </p>
            </div>

            <span>
              {forecastWeather &&
              forecastWeather.current &&
              forecastWeather.current.condition
                ? forecastWeather.current.condition.text
                : ''}{' '}
              | H:{' '}
              {forecastWeather &&
              forecastWeather.forecast &&
              forecastWeather.forecast.forecastday
                ? forecastWeather.forecast.forecastday[0].day.maxtemp_c
                : ''}
              ° C | L{' '}
              {forecastWeather &&
              forecastWeather.forecast &&
              forecastWeather.forecast.forecastday
                ? forecastWeather.forecast.forecastday[0].day.mintemp_c
                : ''}
              ° C
            </span>
          </div>
          <h1 className="singleTrailTitle">{trail.title}</h1>
          <p className="singleTrailLocation">{trail.province}</p>
          <p className="singleTrailCoordinates">
            {trail && trail.location && trail.location.latitude
              ? trail.location.latitude.toFixed(5)
              : ''}
            ,{' '}
            {trail && trail.location && trail.location.longitude
              ? trail.location.longitude.toFixed(5)
              : ''}
          </p>
          <div className="smallDiv"></div>
          <p className="singleTrailDescription">
            {' '}
            {trail && trail.description && trail.description.intro
              ? trail.description.intro
              : ''}
          </p>

          <div className="map">
            <BsMap size={20} className="bsMap" />
            <a
              target="_blank"
              href={
                trail && trail.location && trail.location.mapUrl
                  ? trail.location.mapUrl
                  : ''
              }
              rel="noreferrer"
            >
              {' '}
              Open in Map
            </a>
          </div>
        </div>
      </div>
      <div className="learnMoreContainer">
        <p className="learnMore">Learn More</p>
        <div className="verticalLine"></div>
      </div>

      <div className="aboutTrailContainer">
        <h2>{trail.title}</h2>
        <div className="smallDiv"></div>
        <div className="aboutTrailInfo">
          <div className="lengthElevationRoute">
            <p>Length</p>
            <b>{trail.length} m</b>
          </div>
          <div className="lengthElevationRoute">
            <p>Elevation</p>
            <b>{trail.elevation} m</b>
          </div>
          <div className="lengthElevationRoute">
            <p>Route Type</p>
            <b>{trail.routeType}</b>
          </div>
        </div>
        <div className="picAndTextContainer">
          <p>
            {trail && trail.description && trail.description.first
              ? trail.description.first
              : ''}
          </p>
          <img
            src={
              trail && trail.images && trail.images.first
                ? trail.images.first
                : ''
            }
            alt=""
          />
        </div>
        <div className="picAndTextContainer2">
          <img
            src={
              trail && trail.images && trail.images.second
                ? trail.images.second
                : ''
            }
            alt=""
          />
          <p>
            {trail && trail.description && trail.description.second
              ? trail.description.second
              : ''}
          </p>
        </div>
      </div>
      <img
        className="horizontalImg"
        src={
          trail && trail.images && trail.images.footer
            ? trail.images.footer
            : ''
        }
        alt=""
      />
      <div className="weatherContainer">
        <h2>Weather</h2>
        <div className="horizontalLine"></div>
        <div className="weatherListContainer">
          {/* 
          {/* <p className="weatherMiniDivForecast">H:7°C L:-2°C</p> */}

          {forecastWeather &&
          forecastWeather.forecast &&
          forecastWeather.forecast.forecastday
            ? forecastWeather.forecast.forecastday.map((d, i) => (
                <div className="weatherMiniDiv">
                  <p className="weatherMiniDivText">{d.date}</p>
                  <p className="weatherMiniDivForecast">
                    {d.day.condition.text}
                  </p>
                  <img
                    src={d.day.condition.icon}
                    alt=""
                    className="weatherIcon"
                  />
                  <p className="weatherMiniDivForecast">
                    H: {d.day.maxtemp_c}°C L: {d.day.mintemp_c}°C
                  </p>
                </div>
              ))
            : ''}
        </div>
        <div className="waypointsDiv">
          <h2>Way points</h2>
          <div className="horizontalLine"></div>
          <div className="waypointsListContainer">
            {trail && trail.wayPoints
              ? trail.wayPoints.map((wp, i) => (
                  <div className="waypointMiniDiv">
                    <p className="waypointNumber">{i + 1}</p>
                    <p className="waypointName">{wp.name}</p>
                    <p className="waypointLatLon">
                      {wp.latitude} , {wp.longitude}{' '}
                    </p>
                  </div>
                ))
              : ''}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
