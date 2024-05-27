import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/WeatherSlice'
// import './searchbar.module.css'


const SearchBar = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(fetchWeather({ city }));
  
  };

  return (
    <div className='search-bar'>
      <input 
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>&#x1F50D;</button>
    </div>
  );
};

export default SearchBar;
