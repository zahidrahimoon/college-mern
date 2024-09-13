import { useState } from 'react';
import { loginAdmin } from '../services/authService';
import { toast } from 'react-toastify';
import { FaSignInAlt, FaKey, FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth hook

const Login = ({ switchAuthMode }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Use login function from context

  const handleLogin = async () => {
    if (!username || !password) {
      toast.warn("Please enter both username and password");
      return;
    }

    const data = await loginAdmin(username, password);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      login(); // Update authentication state
      navigate('/home'); // Redirect to home page
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-800 p-8 font-playfair">
      <div className="w-full max-w-md bg-gray-700 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-white mb-10 text-center mt-10">Admin Login</h1>

        <div className="flex items-center bg-gray-600 rounded-lg mb-8">
          <FaUser className="text-white ml-3" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-none bg-transparent text-white p-3 w-full focus:outline-none"
          />
        </div>

        <div className="flex items-center bg-gray-600 rounded-lg mb-8">
          <FaLock className="text-white ml-3" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-none bg-transparent text-white p-3 w-full focus:outline-none"
          />
        </div>

        <button
          onClick={handleLogin}
          className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2 rounded-lg w-full mb-8 hover:from-purple-600 hover:to-purple-800 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <FaSignInAlt />
          <span>Login</span>
        </button>

        <button
          onClick={switchAuthMode}
          className="mb-10 bg-purple-500 text-white px-4 py-2 rounded-lg w-full flex items-center justify-center space-x-2 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <FaKey />
          <span>Forgot Password?</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
