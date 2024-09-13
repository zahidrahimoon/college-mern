import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiHome, HiNewspaper, HiCalendar, HiUserGroup, HiClock, HiUser, HiBadgeCheck, HiLogout, HiViewGrid } from 'react-icons/hi'; // Added HiViewGrid for Dashboard

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768); // Sidebar open by default on large screens

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Update sidebar state on screen resize (to handle responsive behavior)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true); // Open by default on large screens
      } else {
        setIsOpen(false); // Closed by default on small screens
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Hamburger Icon for small devices and tablets */}
      {window.innerWidth < 768 && (
        <div className="fixed top-4 left-2 z-50 px-2 py-2 bg-gray-800 rounded-md sm:top-0 sm:left-1">
          <button onClick={toggleSidebar} className="text-2xl text-white focus:outline-none">
            <HiMenu />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-lg dark:bg-gray-800 dark:text-white font-playfair z-40 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-64' // Slide-in/Slide-out effect
        } md:mt-[0px] sm:mt-[70px]`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center text-center p-6">
            <HiViewGrid className="text-3xl text-gray-700 dark:text-gray-300" />
            {isOpen && (
              <h1 className="ml-3 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Admin
              </h1>
            )}
          </div>
          
          <div className="flex-grow overflow-y-auto">
            <ul className="py-4">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 transition duration-200 ease-in-out ${
                      isActive
                        ? 'bg-gray-200 dark:bg-gray-700 font-semibold'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`
                  }
                >
                  <HiHome className="text-xl" />
                  {isOpen && <span className="ml-3 text-lg">Home</span>}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/News"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 transition duration-200 ease-in-out ${
                      isActive
                        ? 'bg-gray-200 dark:bg-gray-700 font-semibold'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`
                  }
                >
                  <HiNewspaper className="text-xl" />
                  {isOpen && <span className="ml-3 text-lg">News & Updates</span>}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Events"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 transition duration-200 ease-in-out ${
                      isActive
                        ? 'bg-gray-200 dark:bg-gray-700 font-semibold'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`
                  }
                >
                  <HiCalendar className="text-xl" />
                  {isOpen && <span className="ml-3 text-lg">Events</span>}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Faculty"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 transition duration-200 ease-in-out ${
                      isActive
                        ? 'bg-gray-200 dark:bg-gray-700 font-semibold'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`
                  }
                >
                  <HiUserGroup className="text-xl" />
                  {isOpen && <span className="ml-3 text-lg">Faculty & Staff</span>}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/StudentTimeTable"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 transition duration-200 ease-in-out ${
                      isActive
                        ? 'bg-gray-200 dark:bg-gray-700 font-semibold'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`
                  }
                >
                  <HiClock className="text-xl" />
                  {isOpen && <span className="ml-3 text-lg">Student Time Table</span>}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/StudentRegistrationData"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 transition duration-200 ease-in-out ${
                      isActive
                        ? 'bg-gray-200 dark:bg-gray-700 font-semibold'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`
                  }
                >
                  <HiUser className="text-xl" />
                  {isOpen && <span className="ml-3 text-lg">Student Registration</span>}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/OfficerDetails"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 transition duration-200 ease-in-out ${
                      isActive
                        ? 'bg-gray-200 dark:bg-gray-700 font-semibold'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`
                  }
                >
                  <HiBadgeCheck className="text-xl" />
                  {isOpen && <span className="ml-3 text-lg">Officer Details</span>}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/logout"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 transition duration-200 ease-in-out ${
                      isActive
                        ? 'bg-gray-200 dark:bg-gray-700 font-semibold'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`
                  }
                >
                  <HiLogout className="text-xl text-purple-500" />
                  {isOpen && <span className="ml-3 text-lg text-purple-500">Logout</span>}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Overlay for small devices */}
      {isOpen && window.innerWidth < 768 && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
