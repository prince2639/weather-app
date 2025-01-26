// app/page.tsx
'use client';

import { useState } from 'react';
import api from '../utils/api';

export default function Home() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await api.get('/weather');
      setCities(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <button
        className="p-4 bg-blue-500 text-white rounded-lg mb-4"
        onClick={fetchWeather}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Fetch Weather'}
      </button>
      {cities.length > 0 && (
        <div className="grid grid-cols-1 gap-4">
          {cities.map((city, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow">
              <h2 className="text-xl font-bold">{city.name}</h2>
              <p>{city.weather[0].description}</p>
              <p>Temperature: {city.main.temp}°C</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
