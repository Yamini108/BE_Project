import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/';

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,  // Adjust the timeout as needed
});

export const loginUser = async (username, password) => {
  try {
    const response = await axiosInstance.post('login/', {
      username: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post('register/', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default axiosInstance;
