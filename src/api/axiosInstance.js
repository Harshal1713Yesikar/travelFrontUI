// axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://travelbackend-4ufh.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
