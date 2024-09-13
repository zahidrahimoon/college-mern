import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { FaUserPlus } from 'react-icons/fa'; // Import a better icon for adding faculty
import 'react-toastify/dist/ReactToastify.css';

const AddFaculty = ({ onFacultyAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    qualification: '',
    department_id: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    for (let key in formData) {
      formDataObj.append(key, formData[key]);
    }
    try {
      await axios.post('http://localhost:3000/api/faculty', formDataObj);
      toast.success('Faculty added successfully!');
      setFormData({ name: '', title: '', qualification: '', department_id: '', image: null }); // Reset form
      onFacultyAdded(); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="mb-8 p-8 shadow-lg rounded-sm bg-gray-800">
      <ToastContainer />
      <h1 className="text-4xl mb-8 text-center font-serif text-white">Add New Faculty</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="border border-gray-400 p-3 mb-4 w-full rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="border border-gray-400 p-3 mb-4 w-full rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleInputChange}
            placeholder="Qualification"
            className="border border-gray-400 p-3 mb-4 w-full rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
          <input
            type="text"
            name="department_id"
            value={formData.department_id}
            onChange={handleInputChange}
            placeholder="Department ID"
            className="border border-gray-400 p-3 mb-4 w-full rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
          <input
            type="file"
            onChange={handleImageChange}
            className="border border-gray-400 p-3 mb-4 w-full rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-lg w-full mt-4 transition-colors duration-300"
        >
          <FaUserPlus className="mr-2" /> {/* Updated icon */}
          Add Faculty
        </button>
      </form>
    </div>
  );
};

export default AddFaculty;
