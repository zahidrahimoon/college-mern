import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminTimetableEdit = ({ timetableType }) => {
  const [timetable, setTimetable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchTimetable();
  }, [timetableType]);

  const fetchTimetable = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/timetable/${timetableType}`);
      
      // Ensure response data is an array
      if (Array.isArray(response.data)) {
        setTimetable(response.data);
      } else {
        console.error('Unexpected API response:', response.data);
        setTimetable([]); // Set to empty array if the response is not an array
        toast.error('Unexpected timetable format.');
      }
    } catch (error) {
      console.error('Error fetching timetable:', error);
      toast.error('Failed to fetch timetable.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (index, field, value) => {
    const updatedTimetable = [...timetable];
    updatedTimetable[index][field] = value;
    setTimetable(updatedTimetable);
  };

  const handleSave = async () => {
    try {
      await axios.put(`/api/timetable/${timetableType}`, timetable);
      toast.success('Timetable updated successfully.');
      setEditMode(false);
    } catch (error) {
      console.error('Error updating timetable:', error);
      toast.error('Failed to update timetable.');
    }
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <ToastContainer />
      <h1 className="text-2xl font-bold text-center mb-4">Edit {timetableType} Timetable</h1>

      <button
        onClick={() => setEditMode(!editMode)}
        className="mb-4 p-2 bg-blue-500 text-white rounded"
      >
        {editMode ? 'Cancel' : 'Edit'}
      </button>

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
            </tr>
          </thead>
          <tbody>
            {Array.isArray(timetable) && timetable.map((slot, index) => (
              <tr key={index}>
                <td className="border px-4 py-2 border-gray-300">
                  {editMode ? (
                    <input
                      type="text"
                      value={slot.time_slot || ''}
                      onChange={(e) => handleChange(index, 'time_slot', e.target.value)}
                      className="border border-gray-300 rounded p-1"
                    />
                  ) : (
                    slot.time_slot
                  )}
                </td>
                <td className="border px-4 py-2 border-gray-300">
                  {editMode ? (
                    <input
                      type="text"
                      value={slot.mon || ''}
                      onChange={(e) => handleChange(index, 'mon', e.target.value)}
                      className="border border-gray-300 rounded p-1"
                    />
                  ) : (
                    slot.mon
                  )}
                </td>
                <td className="border px-4 py-2 border-gray-300">
                  {editMode ? (
                    <input
                      type="text"
                      value={slot.tue || ''}
                      onChange={(e) => handleChange(index, 'tue', e.target.value)}
                      className="border border-gray-300 rounded p-1"
                    />
                  ) : (
                    slot.tue
                  )}
                </td>
                <td className="border px-4 py-2 border-gray-300">
                  {editMode ? (
                    <input
                      type="text"
                      value={slot.wed || ''}
                      onChange={(e) => handleChange(index, 'wed', e.target.value)}
                      className="border border-gray-300 rounded p-1"
                    />
                  ) : (
                    slot.wed
                  )}
                </td>
                <td className="border px-4 py-2 border-gray-300">
                  {editMode ? (
                    <input
                      type="text"
                      value={slot.thu || ''}
                      onChange={(e) => handleChange(index, 'thu', e.target.value)}
                      className="border border-gray-300 rounded p-1"
                    />
                  ) : (
                    slot.thu
                  )}
                </td>
                <td className="border px-4 py-2 border-gray-300">
                  {editMode ? (
                    <input
                      type="text"
                      value={slot.fri || ''}
                      onChange={(e) => handleChange(index, 'fri', e.target.value)}
                      className="border border-gray-300 rounded p-1"
                    />
                  ) : (
                    slot.fri
                  )}
                </td>
                <td className="border px-4 py-2 border-gray-300">
                  {editMode ? (
                    <input
                      type="text"
                      value={slot.sat || ''}
                      onChange={(e) => handleChange(index, 'sat', e.target.value)}
                      className="border border-gray-300 rounded p-1"
                    />
                  ) : (
                    slot.sat
                  )}
                </td>
                <td className="border px-4 py-2 border-gray-300">
                  {editMode ? (
                    <input
                      type="text"
                      value={slot.sun || ''}
                      onChange={(e) => handleChange(index, 'sun', e.target.value)}
                      className="border border-gray-300 rounded p-1"
                    />
                  ) : (
                    slot.sun
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editMode && (
          <button
            onClick={handleSave}
            className="mt-4 p-2 bg-green-500 text-white rounded"
          >
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
};

export default AdminTimetableEdit;
