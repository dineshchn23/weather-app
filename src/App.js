import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import { fetchWeather } from "./redux/WeatherSlice";
import './App.css'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        dispatch(fetchWeather({ lat: latitude, lon: longitude }));
      },
      (error) => {
        console.error("Error fetching location:", error);
      }
    );
  }, [dispatch]);

  return (
    <div className="container">
      <SearchBar />
      <WeatherCard />
    </div>
  );
};

export default App;
