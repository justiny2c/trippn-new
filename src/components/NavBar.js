import React, { useState } from 'react';
import LogoBlue from "../icons/trippn-new-blue-sm.png"
import {NavLink} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './NavBar.css';



const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const { user, signOut } = useAuth();

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
              <NavLink to="/plan-trip">Plan A Trip</NavLink>
              <NavLink to="/itinerary">Itineraries</NavLink>
              <NavLink to="/about-us">About Us</NavLink>
              <NavLink to="/account">Account</NavLink>
              {user && <button onClick={signOut} className="sign-out-button">Sign Out</button>}
            </div>
      </nav>
    </div>
  );
};

export default NavBar;
