// api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/maestro_churro/'; // It's better to keep this in an environment variable

export const getChurros = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};
