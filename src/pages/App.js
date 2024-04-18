import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import { AuthProvider } from '../contexts/AuthContext';
import { ItineraryProvider } from '../contexts/ItineraryContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Login from "../components/Login";
import HomePage from './HomePage';
import PlanTripPage from './PlanTripPage';
import ResponsePage from "./ResponsePage";
import AboutUs from './AboutUs';
import MyCalendar from "./Calendar";
import LoadingScreen from './LoadingScreen';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';


function App() {
  return ( 
    <div>
      <AuthProvider>   
        <ItineraryProvider>              
              <NavBar />
                <Routes>
                  <Route exact path="/" element={<HomePage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<ProtectedRoute />}>
                      <Route path="plan-trip" element={ <PlanTripPage />} />
                      <Route path="itinerary" element={<ResponsePage />} />
                      <Route path="calendar" element={<MyCalendar />} />
                      <Route path="loading" element={<LoadingScreen />} />
                  </Route>
                  <Route path="about-us" element={<AboutUs />} />
                </Routes>
              <Footer />                 
        </ItineraryProvider>
      </AuthProvider>  
    </div>  
  )
}

export default App;