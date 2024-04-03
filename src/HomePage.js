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
           <br /> crafting worry-free experiences personalized to you</p>
          <p className="hero-title">Plan Your Next Adventure</p>
          <div className='hero-statement-action'>
            <p className="hero-statement">For Unforgettable Memories</p>
            <button className="cta-button" onClick={navigateToPlanTrip}>
              <img src={LogoWhite} className="logo-button" alt="Trippn Logo" />
            </button>
          </div>
        </div>
      </header>
      <div className='section-container'>
          <p className='section-mission'>Our mission — to inspire travel, while 
           <br /> crafting worry-free experiences personalized to you</p>
          <p className="section-title">Plan Your Next Adventure</p>
          <div className='section-statement-action'>
            <p className="section-statement">For Unforgettable Memories</p>
            <button className="cta-button" onClick={navigateToPlanTrip}>
              <img src={LogoWhite} className="logo-button" alt="Trippn Logo" />
            </button>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
