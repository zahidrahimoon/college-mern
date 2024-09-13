import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommerceTable = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetchSchedule();
  }, []);

  const fetchSchedule = async () => {
    try {
      const response = await axios.get('/api/commercefirstyeartimetable');
      if (response.data.length === 0) {
        toast.warn('No data available for the timetable.');
      } else {
        setSchedule(response.data);
        toast.success('Schedule fetched successfully!');
      }
    } catch (error) {
      console.error('Error fetching schedule:', error);
      toast.error('Failed to fetch schedule.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <h1 className="text-2xl font-bold text-center mb-4">Commerce (XI) Time Table</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 border border-gray-300">Time</th>
            <th className="py-2 border border-gray-300">Monday</th>
            <th className="py-2 border border-gray-300">Tuesday</th>
            <th className="py-2 border border-gray-300">Wednesday</th>
            <th className="py-2 border border-gray-300">Thursday</th>
            <th className="py-2 border border-gray-300">Friday</th>
            <th className="py-2 border border-gray-300">Saturday</th>
            <th className="py-2 border border-gray-300">Sunday</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((slot, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 border-gray-300">{slot.time_slot}</td>
              <td className="border px-4 py-2 border-gray-300">{slot.mon}</td>
              <td className="border px-4 py-2 border-gray-300">{slot.tue}</td>
              <td className="border px-4 py-2 border-gray-300">{slot.wed}</td>
              <td className="border px-4 py-2 border-gray-300">{slot.thu}</td>
              <td className="border px-4 py-2 border-gray-300">{slot.fri}</td>
              <td className="border px-4 py-2 border-gray-300">{slot.sat}</td>
              <td className="border px-4 py-2 border-gray-300">{slot.sun}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommerceTable;
