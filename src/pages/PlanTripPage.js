import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../api/supabaseClient';
import axios from 'axios';
import { Spinner } from "@material-tailwind/react";
import Stamp from "../icons/stamp.png";
import Pinpoint from "../icons/pinpoint.png";
import './PlanTripPage.css';

const PlanTripPage = () => {
  const navigate = useNavigate();

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

  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    setIsSubmitting(true);
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
      navigate('/itinerary');
    } catch (error) {
      console.error('There was a problem with the axios operation:', error.response ? error.response.data : error.message);
    }
  };

  return (
      <div className="plan-trip-page">
        <div className='plan-trip-container'>
          <img src={Stamp} alt="stamp" className='stamp'/>          
          <div className='form-title-container'>
            <p className='form-title'>Ready to plan your</p>
            <p className='form-emphasis'>trip?</p>
          </div>
          <p className='form-action'>LET'S GO!</p>
          <div className="form-container">
            <form>
              <input
                className='plan-trip-input'
                type="text"
                name="from"
                placeholder="Traveling from..."
                value={tripDetails.from}
                onChange={handleInputChange}
              />
              <input
                className='plan-trip-input'
                type="text"
                name="to"
                placeholder="Traveling to..."
                value={tripDetails.to}
                onChange={handleInputChange}
              />
              <input
                className='plan-trip-input'
                type="date"
                name="startDate"
                value={tripDetails.startDate}
                onChange={handleInputChange}
              />
              <input
                className='plan-trip-input'
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
              <button type="button" className="build-itinerary-button" onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Spinner size="h-4 w-4" color="white" />
                  </>
                ) : 'Build Itinerary'}
              </button>
            </form>
          </div>
          <img src={Pinpoint} alt="pinpoint" className='pinpoint'/> 
        </div>
      </div>
  );
};

export default PlanTripPage;
