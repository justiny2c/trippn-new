import React from 'react';
// import aboutImage from '../images/justin-anderson-KnlgZ-3LOLk-unsplash.jpg'; 
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className='about-container'>  
        <div className="title-section">
            <p className='title'>About Us</p>
            <p className='title-statement'>What are we solving?</p>
        </div>
        <div className='text-container'>
          <div className="text-section">
              <p>Welcome to Trippn, where we harness AI to craft travel experiences that resonate with your unique style. Travel is more than reaching a destination; it's about tailored adventures shaped by your interests and dreams. 
                  <br/><br/> We understand the challenges of planning—too many choices, not enough customization. That's why we've built a platform that streamlines the process, offering bespoke itineraries for any traveler. Whether you crave serene shores, thrilling exploits, or cultural dives, Trippn makes your ideal trip a reality.
                  <br/><br/> Embark with us on a redefined travel experience, crafted for both avid and new explorers alike. Trippn is here to ensure your journeys are as individual as you are.
                  <br/><br/> Happy travels!
                  <br/><br/>Justin Chen
                  <br/>Founder & CEO, Trippn
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
