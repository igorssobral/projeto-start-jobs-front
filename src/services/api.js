import axios from 'axios';

const api = axios.create({
  baseURL: 'https://start-jobs-api.onrender.com/',
});

export default api;
