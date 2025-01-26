// weather-frontend/utils/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Backend base URL
});

export default api;
