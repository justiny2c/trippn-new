import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import './HomePage.css'; // Make sure to create a corresponding CSS file
// import NavBar from "./NavBar"

const HomePage = () => {
  const history = useNavigate(); // Get the history object to programmatically navigate

  const navigateToPlanTrip = () => {
    history('/plan-trip'); // Use history.push to navigate to the PlanTripPage route
  };

  return (
    <div className="homepage">
      {/* <NavBar /> */}
      <header className="hero">
        <h1 className="hero-title">PLAN YOUR NEXT ADVENTURE</h1>
        <button className="cta-button" onClick={navigateToPlanTrip}>trippn</button>
      </header>
    </div>
  );
};

export default HomePage;
