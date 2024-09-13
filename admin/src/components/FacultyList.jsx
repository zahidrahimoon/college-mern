import { useState, useEffect } from 'react';
import axios from 'axios';
import FacultyDropdown from './FacultyDropdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { FaEdit, FaTrashAlt, FaTimes, FaCheck } from 'react-icons/fa';

// Configure Modal
Modal.setAppElement('#root');

const FacultyList = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    qualification: '',
    department_id: '',
    image: null
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/faculty');
        setFacultyData(response.data);
      } catch (error) {
        toast.error("Error fetching data.");
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (faculty) => {
    setEditData(faculty);
    setFormData({
      name: faculty.name,
      title: faculty.title,
      qualification: faculty.qualification,
      department_id: faculty.department_id,
      image: null
    });
    setIsEditModalOpen(true);
  };

  const handleDelete = async (id) => {
    setDeletingId(id);
    setIsConfirmModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/faculty/${deletingId}`);
      toast.success('Faculty deleted successfully!');
      setFacultyData(facultyData.filter(member => member.id !== deletingId));
    } catch (error) {
      toast.error('Error deleting faculty.');
      console.error('Error:', error);
    }
    setIsConfirmModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    for (let key in formData) {
      formDataObj.append(key, formData[key]);
    }
    try {
      if (editData) {
        await axios.put(`http://localhost:3000/api/faculty/${editData.id}`, formDataObj);
        toast.success('Faculty updated successfully!');
        setEditData(null);
      }
      setFormData({ name: '', title: '', qualification: '', department_id: '', image: null });
      const response = await axios.get('http://localhost:3000/api/faculty');
      setFacultyData(response.data);
    } catch (error) {
      toast.error('Error saving faculty.');
      console.error('Error:', error);
    }
    setIsEditModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4 font-serif mt-8">
      <ToastContainer />

      {/* Edit Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        className="bg-gray-700 text-white rounded-md p-6 flex flex-col justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
        style={{
          content: {
            width: '80%',
            maxWidth: '600px',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }
        }}
      >
        <h2 className="text-2xl mb-4 text-center font-serif text-gray-200">
          <FaEdit className="inline mr-2" /> Edit Faculty
        </h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Name"
            className="bg-gray-600 text-white p-2 mb-2 w-full rounded-md"
            required
          />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Title"
            className="bg-gray-600 text-white p-2 mb-2 w-full rounded-md"
            required
          />
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
            placeholder="Qualification"
            className="bg-gray-600 text-white p-2 mb-2 w-full rounded-md"
            required
          />
          <input
            type="text"
            name="department_id"
            value={formData.department_id}
            onChange={(e) => setFormData({ ...formData, department_id: e.target.value })}
            placeholder="Department ID"
            className="bg-gray-600 text-white p-2 mb-2 w-full rounded-md"
            required
          />
          <input
            type="file"
            onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
            className="bg-gray-600 text-white p-2 mb-2 w-full rounded-md"
          />
          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-700 text-white p-2 rounded-md flex items-center gap-2"
            >
              <FaEdit /> Update Faculty
            </button>
            <button
              type="button"
              onClick={() => setIsEditModalOpen(false)}
              className="bg-gray-600 hover:bg-gray-800 text-white p-2 rounded-md flex items-center gap-2"
            >
              <FaTimes /> Cancel
            </button>
          </div>
        </form>
      </Modal>

      {/* Confirm Delete Modal */}
      <Modal
        isOpen={isConfirmModalOpen}
        onRequestClose={() => setIsConfirmModalOpen(false)}
        className="bg-gray-700 text-white rounded-md p-6 flex flex-col items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
        style={{
          content: {
            width: '80%',
            maxWidth: '400px',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }
        }}
      >
        <h2 className="text-xl mb-4 text-center">
          <FaTrashAlt className="inline mr-2" /> Are you sure you want to delete this faculty?
        </h2>
        <div className="flex gap-4">
          <button
            onClick={confirmDelete}
            className="bg-red-500 hover:bg-red-700 text-white p-2 rounded-md flex items-center gap-2"
          >
            <FaCheck /> Confirm
          </button>
          <button
            onClick={() => setIsConfirmModalOpen(false)}
            className="bg-gray-600 hover:bg-gray-800 text-white p-2 rounded-md flex items-center gap-2"
          >
            <FaTimes /> Cancel
          </button>
        </div>
      </Modal>

      {facultyData.map((section, index) => (
        <div
          key={index}
          className="p-4 mb-4 rounded-md bg-gray-700 text-white transform hover:scale-101 transition-transform duration-200"
        >
          <FacultyDropdown
            department={section.department}
            members={section.members}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      ))}
    </div>
  );
};

export default FacultyList;
