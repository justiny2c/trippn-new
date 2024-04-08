import React, { useState } from 'react';
import LogoBlue from "../images/trippn-blue-sm.png"
import {NavLink} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

  const [isActive, setIsActive] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <nav className="navbar">
          <NavLink to="/">
            <img src={LogoBlue} className="logo" alt="Trippn Logo"/>
          </NavLink>
            <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>
              <div className={`bar1 ${isActive ? 'change' : ''}`}></div>
              <div className={`bar2 ${isActive ? 'change' : ''}`}></div>
              <div className={`bar3 ${isActive ? 'change' : ''}`}></div>
            </div>

            <div className={`nav-links ${isActive ? 'active' : ''}`}>
              <a href="/plan-trip">Plan A Trip</a>
              <a href="/itinerary">Itineraries</a>
              <a href="/about-us">About Us</a>
              {/* <a href="/faq">FAQ</a> */}
              <a href="/account">Account</a>
            </div>
      </nav>
    </div>
  );
};

export default NavBar;
