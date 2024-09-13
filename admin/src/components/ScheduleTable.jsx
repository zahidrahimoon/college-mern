import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ScheduleTable = ({ apiEndpoint, title, columns }) => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [currentEdit, setCurrentEdit] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchSchedule();
  }, [apiEndpoint]);

  const fetchSchedule = async () => {
    setLoading(true);
    try {
      const response = await axios.get(apiEndpoint);
      if (response.headers['content-type'].includes('application/json')) {
        setSchedule(response.data);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error('Error fetching schedule:', error);
      toast.error('Failed to fetch schedule.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (slot) => {
    setCurrentEdit(slot);
    setFormData({ ...slot });
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const updateUrl = `${apiEndpoint}/${formData.id}`;
      await axios.put(updateUrl, formData);
      fetchSchedule(); // Refresh the table
      setEditMode(false);
      setCurrentEdit(null);
    } catch (error) {
      console.error('Error updating schedule:', error);
      toast.error('Failed to update schedule.');
    }
  };

  const handleCancel = () => {
    setEditMode(false);
    setCurrentEdit(null);
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 mr-7 my-[60px] font-playfair bg-gray-700 text-white">
      <ToastContainer />
      <h1 className="text-2xl font-bold text-center mb-4">{title}</h1>
      {loading ? (
        <div className="text-center py-4">Loading...</div>
      ) : (
        schedule.length === 0 ? (
          <h1 className="text-2xl font-bold text-center mb-4 text-red-500">
            No schedule found.
          </h1>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 border border-gray-300">
              <thead>
                <tr className="bg-gray-600">
                  {columns.map((col, index) => (
                    <th key={index} className="py-2 border border-gray-300">
                      {col.header}
                    </th>
                  ))}
                  <th className="py-2 border border-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((slot, index) => (
                  <tr key={index}>
                    {columns.map((col, colIndex) => (
                      <td key={colIndex} className="border px-4 py-2 border-gray-300">
                        {slot[col.key]}
                      </td>
                    ))}
                    <td className="border px-4 py-2 border-gray-300">
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                        onClick={() => handleEditClick(slot)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}
      {editMode && currentEdit && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-4 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Schedule</h2>
            {columns.map((col, index) => (
              col.editable ? (
                <div key={index} className="mb-4">
                  <label className="block mb-1">{col.header}</label>
                  <input
                    type="text"
                    name={col.key}
                    value={formData[col.key] || ''}
                    onChange={handleInputChange}
                    className="border border-gray-300 px-2 py-1 w-full bg-gray-700 text-white"
                  />
                </div>
              ) : null
            ))}
            <div className="flex justify-end space-x-2">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleTable;
