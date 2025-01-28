"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const WeatherList = () => {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/weather/all");
        setWeatherData(response.data);
        setError("");
      } catch (err) {
        setError("Failed to fetch weather data. Please check the API.");
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 p-6">
      <h1 className="text-3xl font-bold text-center text-green-900 mb-6">
        Weather Data
      </h1>
      {error && (
        <p className="text-red-600 text-center font-medium mb-4">{error}</p>
      )}
      {!error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {weatherData.map((weather, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {weather.name}, {weather.country}
              </h2>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                className="w-16 h-16 my-2"
              />
              <p className="text-gray-600 capitalize">
                {weather.weather[0].description}
              </p>
              <p className="text-gray-800 mt-2">🌡️ {weather.main.temp}°C</p>
              <p className="text-gray-800">💧 {weather.main.humidity}% Humidity</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherList;
