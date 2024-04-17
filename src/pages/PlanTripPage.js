import React, { useState, useEffect } from 'react';
import supabase from '../api/supabaseClient';
import './PlanTripPage.css';

const PlanTripPage = () => {

  // const { data: { user } } = supabase.auth.getUser()
  // const user_id = user.id
  // console.log("Here is my user.id", user_id)
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
          const user = supabase.auth.getUser();
          if (user) {
              setUserId(user.id);
          } else {
              console.error('No user found');
          }
      };

      fetchUserId();
  }, []);

  useEffect(() => {
      // This effect updates tripDetails whenever userId changes
      if (userId) {
          setTripDetails(prevDetails => ({
              ...prevDetails,
              userId: userId
          }));
      }
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
      const response = await fetch('https://trippn-ai-fd36c0a9cdb0.herokuapp.com/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tripDetails),
      });
      console.log("userId", tripDetails.userId)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
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

              {/* //Note the use of type="button" for the button. By default, a button inside a form acts as a submit button (type="submit"), which can trigger a form submission. Specifying type="button" ensures that the button doesn't inherently submit the form and only performs actions defined in the onClick handler. */}
              <button type="button" className="build-itinerary-button" onClick={handleSubmit}>Build Itinerary</button> 
            </form>
          </div>
        </div>
      </div>
  );
};

export default PlanTripPage;
