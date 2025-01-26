import { useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string>('');

  // Function to fetch weather data using the Next.js API route
  const fetchWeather = async () => {
    try {
      setError(''); // Reset error message
      const response = await axios.get(`/api/weather?city=${city}`); // Now calling the Next.js API route
      setWeatherData(response.data);
    } catch (err) {
      setError('City not found or server error');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      />
      <button onClick={fetchWeather} style={{ padding: '10px', width: '100%' }}>
        Get Weather
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && (
        <div style={{ marginTop: '20px' }}>
          <h2>
            Weather in {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
