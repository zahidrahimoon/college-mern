import { useEffect } from 'react';
import profile from '../assets/profile.png';
import logo from '../assets/logo.png';

const Navbar = () => {
  useEffect(() => {
    document.body.classList.add('dark');
    document.body.classList.add('bg-gray-900'); 
  }, []);

  return (
    <div className="navbar  fixed top-0 left-0 md:left-[230px] w-full md:w-[calc(100%-220px)] bg-gray-700 dark:bg-gray-800 flex justify-between items-center px-4 py-2 shadow-md z-50 md:px-6 md:py-4">
      <div className="flex items-center space-x-4">
        <img className="logo w-8 md:w-10" src={logo} alt="Logo" />
      </div>
        <h1 className="text-white  text-[1.2rem] md:text-[1.7rem] font-semibold font-playfair hidden md:block">
          GOVERNMENT DEGREE BOYS COLLEGE ASIFABAD
        </h1>
      <img className="profile w-8 h-8 md:w-10 md:h-10 rounded-full" src={profile} alt="Profile" />
    </div>
  );
};

export default Navbar;
