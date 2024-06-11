import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust the base URL as necessary
  withCredentials: true, // Ensure cookies are included in requests
});

export const getSessionUser = async () => {
  try {
    const response = await api.get('/auth/login/session-user');
    return response.data;
  } catch (error) {
    console.error('Error fetching session user:', error);
    throw error;
  }
};
