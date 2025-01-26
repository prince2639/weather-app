// frontend/pages/add-city.js

import { useState } from "react";
import axios from "axios";

const AddCity = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      // Basic Auth Header
      const auth = "Basic " + btoa("admin:Pp@275688"); // Replace with actual credentials

      // Post request to backend to create a city
      await axios.post(
        "/api/admin/city",
        { name, country },
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
    <div>
      <h1>Add New City</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">City Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country Code</label>
          <input
            id="country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add City</button>
      </form>
    </div>
  );
};

export default AddCity;
