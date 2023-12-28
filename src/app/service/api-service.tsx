import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAnime = async (resource: string, query: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${resource}?${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching  anime data:', error);
    throw error;
  }
};
