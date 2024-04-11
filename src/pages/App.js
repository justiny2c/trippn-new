import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PlanTripPage from './PlanTripPage';
import NavBar from '../components/NavBar';
// import ItineraryPage from './ItineraryPage';
import AboutUs from './AboutUs';
import ResponsePage from "./ResponsePage"
import Footer from '../components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/plan-trip" element={<PlanTripPage />} />
          <Route path="/itinerary" element={<ResponsePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* <Route path="/chat" element={<ChatGPT />} /> */}
        </Routes>
       <Footer /> 
    </div>
  );
}

export default App;