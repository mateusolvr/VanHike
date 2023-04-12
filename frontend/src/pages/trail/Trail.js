import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Navbar } from '../../components/Navbar/Navbar';
import './trail.css';
import logo from '../../components/Navbar/logo.png';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { BsCloudSnow, BsMap } from 'react-icons/bs';

export const Trail = () => {
    const urlHandler = process.env.REACT_APP_URL_HANDLER;
    const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const [trail, setTrail] = useState({});
    const [realtimeWeather, setRealtimeWeather] = useState({});
    const [forecastWeather, setForecastWeather] = useState({});
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
        const getWeatherData = async (trail) => {
            await axios
                .get(
                    `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${trail.location.latitude},${trail.location.longitude}&aqi=no`
                )
                .then((res) => {
                    console.log('Realtime Weather: ');
                    console.log(res.data);
                    setRealtimeWeather(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });

            await axios
                .get(
                    `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${trail.location.latitude},${trail.location.longitude}&aqi=no&alerts=no&days=7`
                )
                .then((res) => {
                    console.log('Forecast Weather: ');
                    console.log(res.data);
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
                    console.log(res.data);
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
                        trail && trail.images && trail.images.main
                            ? trail.images.main
                            : ''
                    }
                    alt=""
                />
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
                            href={
                                trail && trail.location && trail.location.mapUrl
                                    ? trail.location.mapUrl
                                    : ''
                            }
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
                    <ul>
                        {daysOfWeek.map((day) => (
                            <div className="weatherMiniDiv">
                                <p>{day}</p>
                                <BsCloudSnow size={30} />
                                <p className="weatherMiniDivForecast">
                                    Snowing
                                </p>
                                <p className="weatherMiniDivForecast">
                                    H:7°C L:-2°C
                                </p>
                            </div>
                        ))}
                    </ul>
                </div>
                {/* <div className="waypointsDiv">
          <h2>Way points</h2>
          <div className="horizontalLine"></div>
          <div className="waypointsListContainer">
            <div className="waypoint">
              <p className="waypointNumber">1</p>
              <p>
                {trail && trail.wayPoints && trail.wayPoints[0].name
                  ? trail.wayPoints[0].name
                  : ''}
              </p>
            </div>
            <div className="waypoint">
              <p className="waypointNumber">2</p>
              <p>
                {trail && trail.wayPoints && trail.wayPoints.name[0]
                  ? trail.wayPoints.name[0]
                  : ''}
              </p>
            </div>
            <div className="waypoint">
              <p className="waypointNumber">3</p>
              <p>
                {trail && trail.images && trail.images.footer
                  ? trail.images.footer
                  : ''}
              </p>
            </div>
            <div className="waypoint">
              <p className="waypointNumber">4</p>
              <p>
                {trail && trail.wayPoints && trail.wayPoints.name[0]
                  ? trail.wayPoints.name[0]
                  : ''}
              </p>
            </div>
          </div>
        </div> */}
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
