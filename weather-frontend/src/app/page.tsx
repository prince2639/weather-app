"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const router = useRouter()

  // Function to fetch weather data using the Next.js API route
  const fetchWeather = async () => {
    try {
      setError(""); // Reset error message
      setWeatherData(null); // Reset weather data
      const response = await axios.get(`http://localhost:3001/api/weather/${city}`); // Calling Next.js API route
      console.log(response.data);
      const data = await response.data;
      setWeatherData(data);
    } catch (err) {
      console.log(err);
      setError("City not found or server error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-500 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Weather App
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Get the latest weather updates for your city.
        </p>

        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={fetchWeather}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Get Weather
        </button>

        <button
          onClick={()=>router.push('/add-city')}
          className="w-full bg-red-600 text-white py-2 px-4 my-5 rounded-lg hover:bg-red-700 transition"
        >
          Add City
        </button>
        
        <button
          onClick={()=>router.push('/all')}
          className="w-full bg-yellow-600 text-white py-2 px-3 my-5 rounded-lg hover:bg-yellow-700 transition"
        >
          Get All added Cities
        </button>

        {error && (
          <p className="text-red-500 text-center mt-4 font-medium">{error}</p>
        )}

        {weatherData && (
          <div className="mt-6 bg-blue-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Weather in {weatherData.name}, {weatherData.country}
            </h2>
            <p className="text-gray-700">🌡️ Temperature: {(parseFloat((weatherData.main.temp - 273.15).toFixed(2)))}°C</p>
            <p className="text-gray-700">💧 Humidity: {weatherData.main.humidity}%</p>
            <p className="text-gray-700 capitalize">
              🌥️ Description: {weatherData.weather[0].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
