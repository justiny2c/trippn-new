import React from 'react';
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
            <div className='welcome'>
              <p>Welcome to </p>
              <h2>Trippn</h2>
              <p>!</p>
            </div>
              <p>
                <br/>Here, we're all about making travel truly personal. We get it—planning a trip can feel overwhelming with endless options and not enough personalization. That's why we've put our hearts and minds into creating a platform that takes the stress out of travel planning and puts the focus back on what matters most: you.
                <br/><br/> With Trippn, it's all about crafting unforgettable adventures tailored to your unique likes and dreams. Whether you're dreaming of relaxing on serene shores, seeking heart-pounding thrills, or immersing yourself in new cultures, we've got you covered.
                <br/><br/> So, are you ready to embark on a journey like no other? Join us and let's redefine travel together. Trippn is here to ensure that every step of your journey is as individual and extraordinary as you are.
                <br/><br/> Can't wait to see where your adventures take you!
                <br/><br/>Justin Chen
                <br/>Founder & CEO, Trippn AI
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
