import React, { useState } from 'react';
import LogoBlue from "../icons/trippn-new-blue-sm.png"
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './NavBar.css';



const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const { user, signOut } = useAuth();

  const classNameFunc = ({ isActive }) => (isActive ? "active-link" : "");

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
            <div className={`nav-links nav-one ${isActive ? 'active' : ''}`}>
              <NavLink to="/" className={classNameFunc}>Home</NavLink>
              <NavLink to="/plan-trip" className={classNameFunc}>Plan Trip</NavLink>
              <NavLink to="/calendar" className={classNameFunc}>Itineraries</NavLink>
              <NavLink to="/about-us" className={classNameFunc}>About Us</NavLink>              
            </div>
            <div className={`nav-links nav-two ${isActive ? 'active' : ''}`}>
                <NavLink to="/signin">Sign In
                  <span className='material-icons-outlined'>account_circle</span>
                </NavLink>
                {user && <button onClick={signOut} className="sign-out-button">
                  Sign Out                   
                  <span className='material-icons-outlined'>logout</span>
                  </button>}
            </div>
      </nav>
    </div>
  );
};

export default NavBar;
