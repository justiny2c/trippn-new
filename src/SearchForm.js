import React, { useState } from 'react';

function SearchForm() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);

    // Fetch suggestions based on user input
    fetchSuggestions(value);
  };

  const fetchSuggestions = async (value) => {
    // Make API call to fetch suggestions based on the user input
    // For example, you can use a location API like Google Places API or OpenTripMap API
    // Replace 'YOUR_API_KEY' with your actual API key
    const API_KEY = 'AIzaSyDE-6QOxEA52lyxN6s1LuYcV8U49P6iPZs';
    const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&types=(cities)&key=${API_KEY}`
      );

    if (response.ok) {
      const data = await response.json();
      setSuggestions(data.locations); // Assuming the API response returns an array of locations
    } else {
      setSuggestions([]); // Clear suggestions if there's an error
    }
  };

  return (
    <section className="search-form">
      <h2>Plan Your Next Adventure</h2>
      <form>
        <input
          type="text"
          placeholder="Enter destination"
          value={query}
          onChange={handleChange}
        />
        <ul className="suggestions">
          {suggestions.map((location, index) => (
            <li key={index}>{location.name}</li>
          ))}
        </ul>
        <input type="date" placeholder="Check-in"/>
        <input type="date" placeholder="Check-out"/>
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default SearchForm;