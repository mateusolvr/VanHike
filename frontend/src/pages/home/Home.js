import './home.css';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Navbar } from '../../components/Navbar/Navbar';
import Autocomplete from '@mui/material/Autocomplete';
import logo from '../../components/Navbar/logo.png';
import { CardComponent } from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaFacebookF, FaInstagram, FaSearch } from 'react-icons/fa';
import topography from './topography.png';
import path from './path.png';

export const Home = () => {
  const urlHandler = process.env.REACT_APP_URL_HANDLER;
  const [trails, setTrails] = useState([]);
  const [values, setValues] = useState('');
  const [filteredTrails, setFilteredTrails] = useState([]);
  const [typeStatus, setTypeStatus] = useState(false);

  useEffect(() => {
    axios
      .get(`${urlHandler}/vanhike/hikes`)
      .then((response) => {
        setFilteredTrails(response.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, [urlHandler]);

  function handleChange(event) {
    const auxValues = { ...values };
    auxValues[event.target.id] = event.target.value;
    setValues((prevState) => ({ ...prevState, ...auxValues }));

    if (auxValues.search.length === 1) {
      if (typeStatus === false) {
        setTypeStatus(true);
        setTrails(filteredTrails);
      }
    }

    if (!auxValues.search || values.search === '') {
      setFilteredTrails(trails);
    }

    if (auxValues.search !== '') {
      const filter = filteredTrails.filter(
        (t) =>
          t.title.toLowerCase().search(auxValues.search.toLowerCase()) !== -1
      );
      setFilteredTrails(filter);
    }
  }
  return (
    <div>
      <Navbar />
      <div className="mainContainer">
        <h2 className="mainPageh2">Time to go to your own</h2>
        <h3 className="mainPageh3"> Adventure</h3>
        <div className="filterContainer">
          <TextField
            sx={{ width: 300, marginBottom: 1 }}
            className="webform-content"
            id="search"
            label="Search for a Trail "
            variant="standard"
            onChange={(e) => handleChange(e)}
          />

          <FaSearch size={20} />
        </div>
      </div>
      <div className="cardContainer">
        {filteredTrails.map((trail) => (
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
