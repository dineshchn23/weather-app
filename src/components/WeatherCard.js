import React from "react";
import { useSelector } from "react-redux";
// import './weather.module.css'

const WeatherCard = () => {
  const { weather, error } = useSelector((state) => state.weather);
  console.log(error);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!weather) {
    return <div>No weather data available</div>;
  }

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt="weather icon"
      />
    </div>
  );
};

export default WeatherCard;
