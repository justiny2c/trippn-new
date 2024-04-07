import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PlanTripPage from './PlanTripPage';
import NavBar from '../components/NavBar';
import ItineraryPage from './ItineraryPage';
import AboutUs from './AboutUs';
import ChatGPT from './ChatGPT';
import './App.css';
import Footer from '../components/Footer';


function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/plan-trip" element={<PlanTripPage />} />
          <Route path="/itinerary" element={<ItineraryPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/chat" element={<ChatGPT />} />
        </Routes>
       <Footer /> 
    </div>
  );
}

export default App;