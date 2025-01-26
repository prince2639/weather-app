// pages/index.js
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const response = await axios.get(`/api/weather/${city}`);
    setWeather(response.data);
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={fetchWeather}>Fetch Weather</button>
      {weather && <pre>{JSON.stringify(weather, null, 2)}</pre>}
    </div>
  );
}
