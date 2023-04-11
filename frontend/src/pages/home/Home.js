import './home.css';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Navbar } from '../../components/Navbar/Navbar';
import Autocomplete from '@mui/material/Autocomplete';
import logo from '../../components/Navbar/logo.png';
import { CardComponent } from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export const Home = () => {
  const [trails, setTrails] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedTerrain, setSelectedTerrain] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8005/vanhike/hikes')
      .then((response) => {
        setTrails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    const params = {
      location: selectedLocation,
      terrain: selectedTerrain,
      difficulty: selectedDifficulty,
    };
    axios.get('/trails', { params }).then((response) => {
      setTrails(response.data);
    });
  }, [selectedLocation, selectedTerrain, selectedDifficulty]);
  return (
    <div>
      <Navbar />
      <div className="mainContainer">
        <h2 className="mainPageh2">Time to go to your own</h2>
        <h3 className="mainPageh3"> Adventure</h3>
        <div className="filterContainer">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={trails}
            value={selectedLocation}
            onChange={(event, newValue) => {
              // setSelectedLocation(newValue);
            }}
            sx={{ width: 300, color: '#FFFFFF' }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Location"
                InputLabelProps={{
                  style: {
                    color: '#FFF',
                    fontWeight: '400',
                    fontFamily: 'Montserrat',
                  },
                }}
                sx={{
                  borderRight: 'solid 2px #fff',
                  marginBottom: '10px',
                  color: 'transparent',
                }}
              />
            )}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={trails}
            value={selectedTerrain}
            onChange={(event, newValue) => {
              // setSelectedTerrain(newValue);
            }}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Terrain"
                InputLabelProps={{
                  style: {
                    color: '#FFF',
                    fontWeight: '400',
                    fontFamily: 'Montserrat',
                  },
                }}
                sx={{
                  borderRight: 'solid 2px #fff',
                  marginBottom: '10px',
                  color: 'transparent',
                }}
              />
            )}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={trails}
            value={selectedDifficulty}
            onChange={(event, newValue) => {
              // setSelectedDifficulty(newValue);
            }}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Difficulty"
                InputLabelProps={{
                  style: {
                    color: '#FFF',
                    fontWeight: '400',
                    fontFamily: 'Montserrat',
                  },
                }}
                sx={{
                  marginBottom: '10px',
                  color: 'transparent',
                  border: 'none',
                  '&:focus': {
                    borderColor: '#fff',
                  },
                }}
              />
            )}
          />
        </div>
      </div>
      <div className="cardContainer">
        {trails.map((trail) => (
          <Link to={`/hikes/${trail._id}`}>
            <CardComponent
              _id={trail._id}
              title={trail.title}
              province={trail.province}
              length={trail.length}
              elevation={trail.elevation}
              image={trail.images.main}
            />
          </Link>
        ))}
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
