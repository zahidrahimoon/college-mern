import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminTimetableEditor = ({ apiEndpoint, title }) => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editedSlot, setEditedSlot] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSchedule();
  }, [apiEndpoint]);

  const fetchSchedule = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(apiEndpoint);
      console.log(`Response from ${apiEndpoint}:`, response.data);
      if (Array.isArray(response.data)) {
        setSchedule(response.data);
      } else if (response.data && Array.isArray(response.data.schedule)) {
        setSchedule(response.data.schedule); // Adjust based on actual structure
      } else {
        setError('Unexpected API response format');
        setSchedule([]);
      }
    } catch (error) {
      setError('Error fetching schedule');
      setSchedule([]);
    } finally {
      setLoading(false);
    }
  };
  

  const handleEditClick = (slot) => {
    setEditedSlot({ ...slot });
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedSlot((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    if (!editedSlot) {
      setError('No slot selected for editing');
      return;
    }
    try {
      const response = await axios.put(`http://localhost:3000${apiEndpoint}/${editedSlot.id}`, editedSlot);
      if (response.status === 200) {
        toast.success('Schedule updated successfully!');
        setEditMode(false);
        fetchSchedule();
      } else {
        setError('Error updating schedule');
      }
    } catch (error) {
      setError('Error updating schedule');
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>; // Consider using a spinner or animation
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <ToastContainer />
      <h1 className="text-2xl font-bold text-center mb-4">{title}</h1>
      {schedule.length === 0 ? (
        <h1 className="text-2xl font-bold text-center mb-4 text-red-500">
          No schedule found.
        </h1>
      ) : (
        <div className="overflow-x-auto">
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
                <th className="py-2 border border-gray-300">Actions</th>
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
                  <td className="border px-4 py-2 border-gray-300">
                    <button
                      onClick={() => handleEditClick(slot)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {editMode && editedSlot && (
            <div className="mt-4 p-4 border border-gray-300 bg-gray-50">
              <h2 className="text-xl font-bold mb-2">Edit Schedule</h2>
              <form>
                {['time_slot', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day) => (
                  <div className="mb-2" key={day}>
                    <label className="block text-sm font-medium text-gray-700">{day.replace('_', ' ').toUpperCase()}</label>
                    <input
                      type="text"
                      name={day}
                      value={editedSlot[day] || ''}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleUpdate}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Update
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminTimetableEditor;
