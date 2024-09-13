import { FaTimes, FaCalendarAlt, FaUserGraduate, FaLink } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const EventPopup = () => {
  const [popupData, setPopupData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      axios
        .get('http://localhost:3000/api/popup')
        .then((response) => {
          const data = response.data;
          if (Array.isArray(data)) {
            setPopupData(data);
          } else {
            toast.error('Unexpected data format');
          }
        })
        .catch((error) => {
          toast.error('Failed to load event data');
        });
    }
  }, [isOpen]);

  if (!isOpen || !Array.isArray(popupData) || popupData.length === 0) return null;

  const { title, description, start_date, end_date, button_text, link, background_color, text_color } = popupData[0];

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center">
      <div className="p-6 rounded-lg shadow-lg w-11/12 max-w-lg" style={{ backgroundColor: background_color }}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold" style={{ color: text_color }}>{title}</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors">
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <div className="flex items-start space-x-4 mb-4">
          <FaCalendarAlt className="text-3xl" style={{ color: text_color }} />
          <div className="text-gray-200">
            <h3 className="text-xl font-semibold" style={{ color: text_color }}>{description}</h3>
            <p className="text-gray-300">Start Date: {start_date}</p>
            <p className="text-gray-300">End Date: {end_date}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <FaUserGraduate className="text-xl" style={{ color: text_color }} />
          <p className="text-gray-300">Open for all students. Secure your place today!</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <a href={link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2">
            <FaLink /> {button_text}
          </a>
          <button onClick={() => setIsOpen(false)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2">
            <FaTimes /> Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;
