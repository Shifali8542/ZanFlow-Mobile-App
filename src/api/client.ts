// src/api/client.ts
import axios from 'axios';

const BASE_URL = 'http://192.168.1.9:8000/api/v1';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export default api;
