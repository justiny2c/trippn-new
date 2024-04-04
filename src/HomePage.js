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
        <p className='section-mission'>"Seamlessly Planned, Impeccably Executed"
Dive into the details of how users can expect flawlessly organized trips.

"AI-Powered Itineraries Just for You"
Explain the innovative technology behind personalized travel planning.

"From Hidden Gems to Iconic Wonders"
Highlight the range of destinations and experiences available.

"Travel Smarter, Not Harder"
Emphasize the convenience and efficiency of using Trippn for planning.</p>
        <p className="section-title">Plan Your Next Adventure</p>
        {/* <div className='section-statement-action'>
          <p className="section-statement">For Unforgettable Memories</p>
          <button className="cta-button" onClick={navigateToPlanTrip}>
            <img src={LogoWhite} className="logo-button" alt="Trippn Logo" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
