import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';

import HomePage from './HomePage';
import PlanTripPage from './PlanTripPage';
import NavBar from '../components/NavBar';
import AboutUs from './AboutUs';
import ResponsePage from "./ResponsePage"
import Footer from '../components/Footer';
import MyCalendar from "./Calendar"


function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/plan-trip" element={<PlanTripPage />} />
          <Route path="/itinerary" element={<ResponsePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/calendar" element={<MyCalendar />} />
        </Routes>
       <Footer /> 
    </div>
  );
}

export default App;