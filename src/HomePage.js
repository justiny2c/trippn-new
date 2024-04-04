import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import LogoWhite from "./images/trippn-white-sm.png"
import './HomePage.css'; // Make sure to create a corresponding CSS file


const ValueCard = ({ icon, title, description }) => (
  <div className="value-card">
    {/* <img src={icon} alt={title} /> */}
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

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
        <div className="card-container">
          <ValueCard
            // icon={iconChoices}
            title="Seamlessly Planned, Impeccably Executed"
            description="Dive into the details of how users can expect flawlessly organized trips."
          />          
          <ValueCard
            // icon={iconDiscounts}
            title="Travel Smarter, Not Harder"
            description="Convenient and time-efficienct for planning."
          />
          <ValueCard
            // icon={iconBooking}
            title="From Hidden Gems to Iconic Wonders"
            description="Highlight the range of destinations and experiences available."
          /><ValueCard
            // icon={iconGuide}
            title="AI-Powered Itineraries Just for You"
            description="Innovative technology behind personalized travel planning."
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
