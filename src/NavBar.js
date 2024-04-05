import React from 'react';
import LogoBlue from "./images/trippn-blue-sm.png"
import {NavLink} from 'react-router-dom';
import './NavBar.css'; // Make sure to create a corresponding CSS file

const NavBar = () => {
  return (
    <div>
        <nav className="navbar">
          <NavLink to="/">
            <img src={LogoBlue} className="logo" alt="Trippn Logo"/>
          </NavLink>
          <div className="nav-links">
            <a href="/plan-trip">Plan A Trip</a>
            <a href="/trips">Itineraries</a>
            <a href="/aboutus">About Us</a>
            {/* <a href="/faq">FAQ</a> */}
            <a href="/account">Account</a>
          </div>
      </nav>
    </div>
  );
};

export default NavBar;
