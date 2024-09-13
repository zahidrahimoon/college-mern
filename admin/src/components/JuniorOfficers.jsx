import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa'; // Font Awesome Edit Icon

const JuniorOfficers = () => {
  const [seniorData, setSeniorData] = useState([]);
  const [editingOfficer, setEditingOfficer] = useState(null);

  useEffect(() => {
    fetchSeniorData();
  }, []);

  const fetchSeniorData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/juniorofficers');
      if (Array.isArray(response.data)) {
        setSeniorData(response.data);
      } else {
        console.error('Unexpected data format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching junior officers data:', error);
    }
  };

  const handleEditClick = (officer) => {
    setEditingOfficer(officer);
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3000/api/juniorofficers/${editingOfficer.id}`, editingOfficer);
      fetchSeniorData(); // Refresh data
      setEditingOfficer(null); // Close edit mode
    } catch (error) {
      console.error('Error updating junior officer:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingOfficer(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 bg-gray-700 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Junior Officers</h1>
      <table className="w-full bg-gray-800 border border-gray-600 shadow-lg rounded-lg text-white">
        <thead className="bg-gray-600">
          <tr>
            <th className="py-3 px-6 border-b text-left">Designation</th>
            <th className="py-3 px-6 border-b text-left">BPS</th>
            <th className="py-3 px-6 border-b text-left">Sanctioned</th>
            <th className="py-3 px-6 border-b text-left">Working</th>
            <th className="py-3 px-6 border-b text-left">Vacancy</th>
            <th className="py-3 px-6 border-b text-left">Remarks</th>
            <th className="py-3 px-6 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(seniorData) && seniorData.length > 0 ? (
            seniorData.map(officer => (
              <tr key={officer.id} className="hover:bg-gray-600">
                <td className="py-3 px-6 border-b border-gray-500">{officer.designation}</td>
                <td className="py-3 px-6 border-b border-gray-500">{officer.bps}</td>
                <td className="py-3 px-6 border-b border-gray-500">{officer.sanctioned}</td>
                <td className="py-3 px-6 border-b border-gray-500">{officer.working}</td>
                <td className="py-3 px-6 border-b border-gray-500">{officer.vacancy}</td>
                <td className="py-3 px-6 border-b border-gray-500">{officer.remarks}</td>
                <td className="py-3 px-6 border-b border-gray-500">
                  <button
                    onClick={() => handleEditClick(officer)}
                    className="flex items-center text-purple-400"
                  >
                    <FaEdit className="mr-2" /> Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="py-3 px-6 text-center">No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      {editingOfficer && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
            <h2 className="text-2xl font-semibold mb-4">Edit Junior Officer</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-300">Designation</label>
                <input
                  type="text"
                  name="designation"
                  value={editingOfficer.designation}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-500 rounded w-full bg-gray-900 text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">BPS</label>
                <input
                  type="number"
                  name="bps"
                  value={editingOfficer.bps}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-500 rounded w-full bg-gray-900 text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Sanctioned</label>
                <input
                  type="number"
                  name="sanctioned"
                  value={editingOfficer.sanctioned}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-500 rounded w-full bg-gray-900 text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Working</label>
                <input
                  type="number"
                  name="working"
                  value={editingOfficer.working}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-500 rounded w-full bg-gray-900 text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Vacancy</label>
                <input
                  type="number"
                  name="vacancy"
                  value={editingOfficer.vacancy}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-500 rounded w-full bg-gray-900 text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Remarks</label>
                <textarea
                  name="remarks"
                  value={editingOfficer.remarks}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-500 rounded w-full bg-gray-900 text-white"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditingOfficer(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JuniorOfficers;
