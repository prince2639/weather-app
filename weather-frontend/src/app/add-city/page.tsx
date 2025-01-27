// frontend/pages/add-city.js
"use client"
import { useState } from "react";
import axios from "axios";

const AddCity = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      // Basic Auth Header
      const auth = "Basic " + btoa("admin:Pp@275688"); // Replace with actual credentials

      // Post request to backend to create a city
      await axios.post(
        `http://localhost:3001/api/weather/add-city`, {name,country},
        {
          headers: {
            Authorization: auth,
          },
        }
      );

      setSuccessMessage("City added successfully!");
      setName("");
      setCountry("");
    } catch (err) {
      setError("Failed to add city.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Add New City</h1>

        {error && (
          <div className="mb-4 bg-red-100 text-red-700 px-4 py-2 rounded-md">
            {error}
          </div>
        )}
        {successMessage && (
          <div className="mb-4 bg-green-100 text-green-700 px-4 py-2 rounded-md">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              City Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter city name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Country Code
            </label>
            <input
              id="country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter country code (e.g., US)"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add City
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCity;
