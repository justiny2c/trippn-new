import React from 'react';
import './AboutUs.css'; // Make sure to create and link the CSS file
import aboutImage from './images/justin-anderson-KnlgZ-3LOLk-unsplash.jpg'; // Replace with your image path

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="text-section">
        <h2>About Us</h2>
        <p>Welcome to Trippn, your go-to destination for personalized travel experiences powered by artificial intelligence. At Trippn, we believe that travel should be more than just a journey—it should be an adventure tailored to your unique preferences, interests, and aspirations. 
            <br/><br/> Founded by Justin Chen, Trippn aims to revolutionize the way people explore the world. With a deep understanding of the challenges travelers face—from choice overload to lack of personalization—we set out to create a platform that simplifies the travel planning process and unlocks endless possibilities for unforgettable adventures.
            <br/><br/> Our plaform harnesses the power of AI to curate personalized itineraries that suit your individual preferences and hobbies. Whether you're seeking a relaxing beach getaway, an exhilarating outdoor adventure, or a cultural immersion in a vibrant city, Trippn is here to help you discover and book the perfect trip with ease and confidence.
            <br/><br/> Join us on this exciting journey as we redefine the way people travel. Whether you're a seasoned globetrotter or a first-time adventurer, Trippn is your trusted companion for personalized travel experiences that inspire, delight, and transform.
            <br/><br/> Happy travels!
            <br/><br/>Justin Chen
            <br/>Founder & CEO, Trippn</p>
      </div>
      <div className="image-section">
        <img src={aboutImage} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
