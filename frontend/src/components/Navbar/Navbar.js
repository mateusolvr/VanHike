import React from 'react';
import './Navbar.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <Link to="/"> ROUTES & TRAILS</Link>
        </li>
        <li>
          <Link to="/admin"> ADMIN</Link>
        </li>
      </ul>
    </nav>
  );
};
