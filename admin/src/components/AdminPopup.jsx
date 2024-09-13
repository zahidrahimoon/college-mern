import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaTimes, FaCalendarAlt, FaEdit, FaSave, FaUndo } from 'react-icons/fa';

const AdminPopup = () => {
  const [popupData, setPopupData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPopupData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/popup');
        const data = response.data;
        if (Array.isArray(data) && data.length > 0) {
          setPopupData(data[0]);
          setFormData(data[0]);
        } else {
          toast.error('No popup data found');
        }
      } catch (error) {
        setError('Failed to load popup data');
        toast.error('Failed to load popup data');
        console.error('Error fetching popup data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopupData();
  }, []);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setFormData(popupData); // Reset form data to the current popup data
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/popup/${popupData.id}`, formData);
      toast.success('Popup updated successfully');
      setPopupData(formData);
      setEditMode(false);
    } catch (error) {
      toast.error('Failed to update popup');
      console.error('Error updating popup:', error);
    }
  };

  if (loading) {
    return <div className="font-playfair fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="fixed font-playfair inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center text-white">{error}</div>;
  }

  if (!popupData) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center mt-[80px] font-playfair">
      <div className="p-6 rounded-lg shadow-lg w-full max-w-lg bg-gray-800 text-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-center">Manage Popup</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title || ''}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Description:</label>
            <textarea
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Start Date:</label>
            <input
              type="date"
              name="start_date"
              value={formData.start_date || ''}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">End Date:</label>
            <input
              type="date"
              name="end_date"
              value={formData.end_date || ''}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Button Text:</label>
            <input
              type="text"
              name="button_text"
              value={formData.button_text || ''}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter button text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Link:</label>
            <input
              type="text"
              name="link"
              value={formData.link || ''}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter link"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Background Color:</label>
            <input
              type="text"
              name="background_color"
              value={formData.background_color || ''}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter background color"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Text Color:</label>
            <input
              type="text"
              name="text_color"
              value={formData.text_color || ''}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter text color"
            />
          </div>
          <div className="flex justify-between mt-4">
            {editMode ? (
              <>
                <button
                  type="button"
                  onClick={handleCancelClick}
                  className="bg-gray-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-700 transition-colors"
                >
                  <FaUndo /> Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600 transition-colors"
                >
                  <FaSave /> Save
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={handleEditClick}
                className="bg-purple-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-purple-600 transition-colors"
              >
                <FaEdit /> Edit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPopup;
