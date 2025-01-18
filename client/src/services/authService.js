// client/src/services/authService.js
import axios from 'axios';

// Base URL of your back end
const API_URL = 'http://localhost:3001/api/auth';

export const register = async (email, password) => {
  const { data } = await axios.post(`${API_URL}/register`, { email, password });
  return data;
};

export const login = async (email, password) => {
  const { data } = await axios.post(`${API_URL}/login`, { email, password });
  if (data.token) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  }
  return data;
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};
