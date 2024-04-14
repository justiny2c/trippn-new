import React, { createContext, useState, useContext } from 'react';

// Create the Context
const ItineraryContext = createContext();

// Export the custom hook for easy access to the context
export const useItinerary = () => useContext(ItineraryContext);

export const ItineraryProvider = ({ children }) => {
    const [itineraries, setItineraries] = useState([]);

    const addItinerary = (itinerary) => {
        setItineraries([...itineraries, itinerary]);
    };

    const updateItinerary = (id, updatedItinerary) => {
        setItineraries(itineraries.map(itinerary => itinerary.id === id ? updatedItinerary : itinerary));
    };

    const deleteItinerary = (id) => {
        setItineraries(itineraries.filter(itinerary => itinerary.id !== id));
    };

    // The {children} in the provider will automatically be replaced by whatever components you include inside the ItineraryProvider.
    return (
        <ItineraryContext.Provider value={{ itineraries, addItinerary, updateItinerary, deleteItinerary }}>
            {children}
        </ItineraryContext.Provider>
    );
};