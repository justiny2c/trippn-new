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
        <div className='plan-trip-container'>
          <div className="form-container">
            <p className='form-title'>Ready to plan your trip?</p>
            <p className='form-action'>LET'S GO!</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="from"
                placeholder="Traveling from..."
                value={tripDetails.from}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="to"
                placeholder="Traveling to..."
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
                placeholder="# of Travelers"
                value={tripDetails.travelers}
                onChange={handleInputChange}
              />
              <button type="submit" className="build-itinerary-button">Build</button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default PlanTripPage;
