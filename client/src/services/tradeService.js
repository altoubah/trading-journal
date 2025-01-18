// client/src/services/tradeService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/trades';

export const getTrades = async () => {
  const token = localStorage.getItem('token');
  const { data } = await axios.get(API_URL, {
    headers: { Authorization: token },
  });
  return data;
};

export const createTrade = async (tradeData) => {
  const token = localStorage.getItem('token');
  const { data } = await axios.post(API_URL, tradeData, {
    headers: { Authorization: token },
  });
  return data;
};
