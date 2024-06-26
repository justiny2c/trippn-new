import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import { AuthProvider } from '../contexts/AuthContext';
import { CalendarProvider } from '../contexts/GoogleCalendarContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Login from "../components/Login";
import HomePage from './HomePage';
import PlanTripPage from './PlanTripPage';
// import ResponsePage from "./ResponsePage";
import AboutUs from './AboutUs';
// import GoogleCalendar from '../unused/GoogleCalendar';
import LoadingScreen from '../components/LoadingScreen';
import Calendar from './Calendar';
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
              <Route path="/signin" element={<Login />} />
              <Route path="/" element={<ProtectedRoute />}>
                <Route path="plan-trip" element={ <PlanTripPage />} />
                <Route path="calendar" element={<Calendar />} />
                {/* <Route path="itinerary" element={<ResponsePage />} /> */}
              </Route>
              <Route path="about-us" element={<AboutUs />} />
              <Route path="privacy-terms" element={<PrivacyTerms />} />
              <Route path="loading" element={<LoadingScreen />} />
              {/* <Route path="google" element={<GoogleCalendar />} /> */}
              {/* <Route path="calendar" element={<Calendar />} /> */}
            </Routes>
          <Footer />   
        </CalendarProvider>             
      </AuthProvider>  
    </div>  
  )
}

export default App;