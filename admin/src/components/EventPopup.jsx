// EventPopup.js
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const EventPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Upcoming Events</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-gray-800">Event 1: Description of the first event.</li>
          <li className="text-gray-800">Event 2: Description of the second event.</li>
          <li className="text-gray-800">Event 3: Description of the third event.</li>
          {/* Add more events as needed */}
        </ul>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;
