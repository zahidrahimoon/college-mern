import  { useState } from 'react';
import { resetAdminPassword } from '../services/authService';
import { toast } from 'react-toastify';
import { FaUser, FaKey, FaLock, FaArrowLeft } from 'react-icons/fa'; // Importing icons

const ForgotPassword = ({ switchAuthMode }) => {
  const [username, setUsername] = useState('');
  const [passkey, setPasskey] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordReset = async () => {
    if (!username || !passkey || !newPassword) {
      toast.warn("Please fill in all fields"); // Display warning message
      return;
    }

    const response = await resetAdminPassword(username, passkey, newPassword);
    if (response.error) {
      toast.error(response.error); // Display error message
    } else {
      toast.success(response.message); // Display success message
      switchAuthMode(); // Switch back to login mode
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-800 p-8 font-playfair">
      <div className="w-full max-w-md bg-gray-700 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-white mb-10 text-center mt-10">Reset Password</h1>

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
          <FaKey className="text-white ml-3" />
          <input
            type="text"
            placeholder="Passkey"
            value={passkey}
            onChange={(e) => setPasskey(e.target.value)}
            className="border-none bg-transparent text-white p-3 w-full focus:outline-none"
          />
        </div>

        <div className="flex items-center bg-gray-600 rounded-lg mb-8">
          <FaLock className="text-white ml-3" />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border-none bg-transparent text-white p-3 w-full focus:outline-none"
          />
        </div>

        <button
          onClick={handlePasswordReset}
          className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2 rounded-lg w-full mb-8 hover:from-purple-600 hover:to-purple-800 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <FaLock />
          <span>Reset Password</span>
        </button>

        <button
          onClick={switchAuthMode}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg w-full flex items-center justify-center space-x-2 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <FaArrowLeft />
          <span>Back to Login</span>
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
