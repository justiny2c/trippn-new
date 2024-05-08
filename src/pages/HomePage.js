import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoWhite from "../icons/trippn-logo-plane-white.png";
import './HomePage.css';


const ValueCard = ({ icon, title, description }) => (
  <div className="value-card">
    <span className='material-icons-outlined'>
      {icon}
    </span>    
    <div className='value-statement'>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>  
  </div>
);

const HomePage = () => {
  const history = useNavigate(); 
  const navigateToPlanTrip = () => {
    history('/plan-trip'); 
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
            <button className="action-button one" onClick={navigateToPlanTrip}>
              <p>Plan A Trip</p>
              <img src={LogoWhite} className="button-logo" alt="Trippn Logo" />
            </button>
          </div>

        </div>          
        <p className='suggestion-tag'>
            *For optimal experience, we recommend using a desktop or laptop computer
        </p>
      </header>
      <div className='section-container one'>
        <p className='section-why'>WHY?</p>
        <div className='section-title'>
          <p className='section-statement one'>
            We're not re-inventing the wheel — <br/>
            rather the
          </p>
          <p className='section-emphasis'>ride</p>
          <p className='section-statement two'>in how you travel</p>
        </div>
        <div className="card-container">
          <ValueCard
            icon="event_available"
            title="Seamlessly Planned, Impeccably Executed"
            description="Dive into the details of how users can expect flawlessly organized trips"
          />          
          <ValueCard
            icon="sensor_occupied"
            title="Travel Smarter, Not Harder"
            description="Convenient and time-efficienct for planning"
          />
          <ValueCard
            icon="diamond"
            title="From Hidden Gems to Iconic Wonders"
            description="Highlight the range of destinations and experiences available"
          /><ValueCard
            icon="engineering"
            title="AI-Powered Itineraries, Just for You"
            description="Innovative technology behind personalized travel planning"
          />
        </div>      
        <div className='section-container two'>        
          <p className='section-statement three'> Ready to start your journey? </p>
          <button className="action-button two" onClick={navigateToPlanTrip}>Create your itinerary now!</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
