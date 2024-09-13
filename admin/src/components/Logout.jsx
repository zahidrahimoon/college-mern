// /frontend/src/components/Logout.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearAuthToken } from '../services/authService';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear authentication token or user session
    clearAuthToken();

    // Redirect to login page
    navigate('/auth');
  }, [navigate]);

  return null; // This component does not render anything
};

export default Logout;
