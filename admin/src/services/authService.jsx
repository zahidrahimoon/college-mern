// /frontend/src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

// Login request
const loginAdmin = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    // Handle errors
    return { error: error.response?.data?.error || 'Server error' };
  }
};

// Password reset request
const resetAdminPassword = async (username, passkey, newPassword) => {
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, { username, passkey, newPassword });
    return response.data;
  } catch (error) {
    // Handle errors
    return { error: error.response?.data?.error || 'Server error' };
  }
};

export { loginAdmin, resetAdminPassword };

// /frontend/src/services/authService.js
export const clearAuthToken = () => {
  // Clear the authentication token or flag from storage
  localStorage.removeItem('authToken'); // or sessionStorage.removeItem('authToken');
};

// Example function to check authentication status
export const isAuthenticated = () => {
  return !!localStorage.getItem('authToken'); // or sessionStorage.getItem('authToken');
};

