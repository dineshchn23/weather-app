import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeatherByLocation, fetchWeatherByCity } from '../services/WeatherService';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ lat, lon, city }, { rejectWithValue }) => {
    try {
      return city ? await fetchWeatherByCity(city) : await fetchWeatherByLocation(lat, lon);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: null,
    status: 'idle',
    error: null,
    
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
