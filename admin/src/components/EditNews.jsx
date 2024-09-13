import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditNews = ({ news, onBack }) => {
  const [formData, setFormData] = useState({ ...news });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/news/${formData.id}`, formData);
      toast.success('News updated successfully!');
      onBack(); // Go back to the news list
    } catch (error) {
      console.error('Error updating news:', error);
      toast.error('Failed to update news!');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 font-serif">
      <button
        onClick={onBack}
        className="text-blue-600 hover:text-blue-800 mb-4"
      >
        Back
      </button>
      <h1 className="text-4xl text-center mb-8">Edit News</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Content
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Start Date
          </label>
          <input
            type="date"
            name="initial_date"
            value={formData.initial_date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            End Date
          </label>
          <input
            type="date"
            name="final_date"
            value={formData.final_date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditNews;
