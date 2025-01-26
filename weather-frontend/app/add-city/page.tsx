// app/add-city/page.tsx
'use client';

import { useState } from 'react';
import api from '../../utils/api';

export default function AddCity() {
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');

  const addCity = async () => {
    try {
      const response = await api.post(
        '/admin/add-city',
        { name: city },
        {
          headers: {
            user: 'admin', // Replace with your HTTP_ADMIN_USER
            pass: 'Pp@275688', // Replace with your HTTP_ADMIN_PASS
          },
        },
      );
      setMessage(`City "${response.data.name}" added successfully!`);
      setCity('');
    } catch (error) {
      console.error('Error adding city:', error);
      setMessage('Failed to add city.');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="p-2 border rounded-lg mb-4"
      />
      <button
        className="p-4 bg-green-500 text-white rounded-lg"
        onClick={addCity}
      >
        Add City
      </button>
      {message && <p className="mt-4">{message}</p>}
    </main>
  );
}
