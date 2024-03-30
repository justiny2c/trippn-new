import React, { useState } from 'react';
import './PlanTripPage.css';

const PlanTripPage = () => {
  const [tripDetails, setTripDetails] = useState({
    from: '',
    to: '',
    startDate: '',
    endDate: '',
    travelers: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripDetails({
      ...tripDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submit action (e.g., make an API call)
    console.log(tripDetails);
  };

  return (
      <div className="plan-trip-page">
        <div className="form-container">
          <h2>USING AI, TRIPPN WILL BUILD YOU A PERSONALIZED ITINERARY BASED ON YOUR PROFILE</h2>
          <h3>LET'S PLAN A TRIP!</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="from"
              placeholder="TRAVELING FROM?"
              value={tripDetails.from}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="to"
              placeholder="TRAVELING TO?"
              value={tripDetails.to}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="startDate"
              value={tripDetails.startDate}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="endDate"
              value={tripDetails.endDate}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="travelers"
              placeholder="TRAVELERS"
              value={tripDetails.travelers}
              onChange={handleInputChange}
            />
            <button type="submit" className="build-itinerary-button">BUILD ITINERARY</button>
          </form>
        </div>
      </div>
  );
};

export default PlanTripPage;
