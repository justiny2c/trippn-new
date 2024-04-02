import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import LogoWhite from "./images/trippn-white-sm.png"
import './HomePage.css'; // Make sure to create a corresponding CSS file


const HomePage = () => {
  const history = useNavigate(); // Get the history object to programmatically navigate

  const navigateToPlanTrip = () => {
    history('/plan-trip'); // Use history.push to navigate to the PlanTripPage route
  };

  return (
    <div className="homepage">
      <header className="hero">
        <div className='hero-container'>
          <p className='hero-mission'>Our mission — to inspire travel, while 
           <br /> crafting worry-free experiences personalized to you.</p>
          <p className="hero-title">Plan Your Adventure</p>
          <button className="cta-button" onClick={navigateToPlanTrip}>
            <img src={LogoWhite} className="logo-button" alt="Trippn Logo" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
