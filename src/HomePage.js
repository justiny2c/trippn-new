import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import LogoWhite from "./images/trippn-logowhite.png"
import './HomePage.css'; // Make sure to create a corresponding CSS file


const HomePage = () => {
  const history = useNavigate(); // Get the history object to programmatically navigate

  const navigateToPlanTrip = () => {
    history('/plan-trip'); // Use history.push to navigate to the PlanTripPage route
  };

  return (
    <div className="homepage">
      <header className="hero">
        <h1 className="hero-title">PLAN YOUR NEXT ADVENTURE</h1>
        <button className="cta-button" onClick={navigateToPlanTrip}>
          <img src={LogoWhite} className="logo" alt="Trippn Logo" />
        </button>
      </header>
    </div>
  );
};

export default HomePage;
