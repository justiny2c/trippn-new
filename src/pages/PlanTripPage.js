import React, { useState, useEffect } from 'react';
import supabase from '../api/supabaseClient';
import axios from 'axios';
import './PlanTripPage.css';

const PlanTripPage = () => {

  const [userId, setUserId] = useState(null);
  const [tripDetails, setTripDetails] = useState({
      userId: '',
      from: '',
      to: '',
      startDate: '',
      endDate: '',
      travelers: '',
  });

  useEffect(() => {
    const fetchUserId = async () => {
        const user = await supabase.auth.getUser();
        if (user.data) {
            setUserId(user.data.user.id);
        } else {
            console.error("Failed to retrieve user ID");
        }
    };

    fetchUserId();
  }, []);


  useEffect(() => {
    setTripDetails(prevDetails => ({ ...prevDetails, userId }));
  }, [userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTripDetails(prevDetails => ({
            ...prevDetails,
            [name]: value,
        }));
    };

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        'https://trippn-ai-fd36c0a9cdb0.herokuapp.com/api/chat',
        tripDetails,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data); // Accessing data directly from the response object
    } catch (error) {
      console.error('There was a problem with the axios operation:', error.response ? error.response.data : error.message);
    }
  };

  return (
      <div className="plan-trip-page">
        <div className='plan-trip-container'>          
          <div className='form-title-container'>
            <p className='form-title'>Ready to plan your</p>
            <p className='form-emphasis'>trip?</p>
          </div>
          <p className='form-action'>LET'S GO!</p>
          <div className="form-container">
            <form>
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
              {/* <input
                type="number"
                name="travelers"
                placeholder="# of Travelers"
                value={tripDetails.travelers}
                onChange=handleInputChange}
              /> */}
              <button type="button" className="build-itinerary-button" onClick={handleSubmit}>Build Itinerary</button> 
            </form>
          </div>
        </div>
      </div>
  );
};

export default PlanTripPage;
