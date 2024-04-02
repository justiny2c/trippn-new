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
            <a href="/plan">PLAN</a>
            <a href="/trips">TRIPS</a>
            <a href="/about">ABOUT</a>
            <a href="/faq">FAQ</a>
            <a href="/account">ACCOUNT</a>
          </div>
      </nav>
    </div>
  );
};

export default NavBar;
