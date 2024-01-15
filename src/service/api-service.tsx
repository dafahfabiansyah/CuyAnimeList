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

export const getNestedAnime = async (resource: string, query: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${resource}?${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching  anime data:', error);
    throw error;
  }
};
// export const getNestedAnime = async () => {
//   try {
//     // Replace API call with generating random data
//     const randomAnime = await getRandomAnime('recommendations/anime', 'entry');
//     return randomAnime;
//   } catch (error) {
//     console.error('Error fetching anime data:', error);
//     throw error;
//   }
// };

// // Function to get random anime data from the mock data
// const getRandomAnime = async (resource: string, query: string) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/${resource}?${query}`);
//     const animeArray = response.data; // Assuming the response is an array
//     const randomIndex = Math.floor(Math.random() * animeArray.length);
//     return animeArray[randomIndex];
//   } catch (error) {
//     console.error('Error getting random anime:', error);
//     throw error;
//   }
// };
