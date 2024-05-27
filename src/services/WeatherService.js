import axios from 'axios';

const API_KEY = '881c8a007fdac03b92300ab99d8d3609';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherByLocation = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
