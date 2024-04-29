import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import { AuthProvider } from '../contexts/AuthContext';
import { CalendarProvider } from '../contexts/CalendarContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Login from "../components/Login";
import HomePage from './HomePage';
import PlanTripPage from './PlanTripPage';
import ResponsePage from "./ResponsePage";
import AboutUs from './AboutUs';
import GoogleCalendar from '../calendar/Calendar';
import Calendar from './Calendar';
// import LoadingScreen from './LoadingScreen';
import PrivacyTerms from './PrivacyTerms';
import './App.css';




function App() {
  return ( 
    <div>
      <AuthProvider>   
        <CalendarProvider>
          <NavBar />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<ProtectedRoute />}>
                <Route path="plan-trip" element={ <PlanTripPage />} />
                <Route path="itinerary" element={<ResponsePage />} />
                {/* <Route path="loading" element={<LoadingScreen />} /> */}
              </Route>
              <Route path="about-us" element={<AboutUs />} />
              <Route path="privacy-terms" element={<PrivacyTerms />} />
              <Route path="google" element={<GoogleCalendar />} />
              <Route path="google" element={<Calendar />} />
            </Routes>
          <Footer />   
        </CalendarProvider>             
      </AuthProvider>  
    </div>  
  )
}

export default App;