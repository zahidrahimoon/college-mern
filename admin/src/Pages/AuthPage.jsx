import { useState } from 'react';
import Login from '../components/Login.jsx';
import ForgotPassword from '../components/ForgotPassword.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Left Side - Background Image (60%) */}
      <div
        className="w-4/5 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600')` }}
      ></div>

      {/* Right Side - Login/ForgotPassword (40%) */}
      <div className="w-2/5 flex items-center justify-cente border-l border-white">
        {isLogin ? (
          <Login switchAuthMode={() => setIsLogin(false)} />
        ) : (
          <ForgotPassword switchAuthMode={() => setIsLogin(true)} />
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default AuthPage;
