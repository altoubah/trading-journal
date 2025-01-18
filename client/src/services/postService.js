// client/src/services/postService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/posts';

export const getPosts = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const createPost = async (title, content) => {
  const token = localStorage.getItem('token');
  const { data } = await axios.post(API_URL, { title, content }, {
    headers: { Authorization: token },
  });
  return data;
};
