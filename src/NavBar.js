import React from 'react';
import LogoWhite from "./images/trippn-logowhite.png"
import './NavBar.css'; // Make sure to create a corresponding CSS file

function NavBar(){
  return (
    <div>
        <nav className="navbar">
          <img src={LogoWhite} className="logo" alt="Trippn Logo" />
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
