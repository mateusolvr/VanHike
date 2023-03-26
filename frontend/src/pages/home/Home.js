import './home.css';
import TextField from '@mui/material/TextField';
import { Navbar } from '../../components/Navbar/Navbar';
import Autocomplete from '@mui/material/Autocomplete';
import logo from '../../components/Navbar/logo.png';
import { CardComponent } from '../../components/Card/Card';
import { Link } from 'react-router-dom';

export const Home = () => {
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
      label: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
  ];
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
            options={top100Films}
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
            options={top100Films}
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
            options={top100Films}
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

        {/* <img src={topography} className="topography" /> */}
      </div>
      <div className="cardContainer">
        <Link to="/trails/1">
          <CardComponent />
        </Link>
      </div>
      <footer className="footer">
        <img className="footerLogo" src={logo} alt="logo" />
        <span>2023 VanHike - All rights reserved</span>
        <div className="connectSmallDiv">
          <p>Connect with us</p>
          <p>F</p>
          <p>I</p>
        </div>
      </footer>
    </div>
  );
};
