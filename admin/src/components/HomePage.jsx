// HomePage.js
import React, { useState, useEffect } from 'react';
import EventPopup from './EventPopup';
import { FaCalendarAlt } from 'react-icons/fa';

const HomePage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    // Set a timer to open the popup after 30 seconds
    const timer = setTimeout(() => {
      openPopup();
    }, 3000); // 30000 milliseconds = 30 seconds

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Our Website</h1>

      {/* Button to manually trigger the popup */}
      <div className="text-center mb-6">
        <button
          onClick={openPopup}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-center"
        >
          <FaCalendarAlt className="mr-2" /> Upcoming Events
        </button>
      </div>

      {/* EventPopup component */}
      <EventPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default HomePage;
