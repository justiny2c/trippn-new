import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PlanTripPage from './PlanTripPage';
import NavBar from './NavBar';
import ItineraryPage from './ItineraryPage';
import ChatGPT from './ChatGPT';
import './App.css';


function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/plan-trip" element={<PlanTripPage />} />
          <Route path="/itinerary" element={<ItineraryPage />} />
          <Route path="/chat" element={<ChatGPT />} />
        </Routes>
    </div>
  );
}

export default App;