import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit } from "react-icons/fa";

const SeniorOfficers = () => {
  const [seniorData, setSeniorData] = useState([]);
  const [editingOfficer, setEditingOfficer] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSeniorData();
  }, []);

  const fetchSeniorData = async () => {
    try {
      setLoading(true); // Set loading state
      const response = await axios.get(
        "http://localhost:3000/api/seniorofficers"
      );
      if (Array.isArray(response.data)) {
        setSeniorData(response.data);
      } else {
        console.error("Unexpected data format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching senior officers data:", error);
      toast.error("Failed to fetch senior officers data.");
    } finally {
      setLoading(false); // End loading state
    }
  };

  const handleEditClick = (officer) => {
    setEditingOfficer(officer);
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      await axios.put(
        `http://localhost:3000/api/seniorofficers/${editingOfficer.id}`,
        editingOfficer
      );
      fetchSeniorData();
      setEditingOfficer(null);
      toast.success("Senior officer updated successfully.");
    } catch (error) {
      console.error("Error updating senior officer:", error);
      toast.error("Failed to update senior officer.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingOfficer((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 bg-gray-700 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Senior Officers</h1>

      {loading ? (
        <div className="text-center my-4">Loading...</div>
      ) : (
        <table className="w-full bg-gray-700 text-white border border-gray-500 shadow-lg rounded-lg">
          <thead className="bg-gray-600">
            <tr>
              <th className="py-3 px-6 border-b border-gray-500 text-left">
                Designation
              </th>
              <th className="py-3 px-6 border-b border-gray-500 text-left">
                BPS
              </th>
              <th className="py-3 px-6 border-b border-gray-500 text-left">
                Sanctioned
              </th>
              <th className="py-3 px-6 border-b border-gray-500 text-left">
                Working
              </th>
              <th className="py-3 px-6 border-b border-gray-500 text-left">
                Vacancy
              </th>
              <th className="py-3 px-6 border-b border-gray-500 text-left">
                Remarks
              </th>
              <th className="py-3 px-6 border-b border-gray-500 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {seniorData.length > 0 ? (
              seniorData.map((officer) => (
                <tr key={officer.id} className="bg-gray-800  hover:bg-gray-600 ">
                  <td className="py-3 px-6 border-b border-gray-500">
                    {officer.designation}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-500">
                    {officer.bps}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-500">
                    {officer.sanctioned}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-500">
                    {officer.working}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-500">
                    {officer.vacancy}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-500">
                    {officer.remarks}
                  </td>
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
                <td colSpan="7" className="py-3 px-6 text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {editingOfficer && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
            <h2 className="text-2xl font-semibold mb-4">Edit Senior Officer</h2>
            <form>
              {/* Form Fields */}
              <div className="mb-4">
                <label className="block text-gray-700">Designation</label>
                <input
                  type="text"
                  name="designation"
                  value={editingOfficer.designation}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              {/* Remaining Form Fields for BPS, Sanctioned, Working, Vacancy, Remarks */}
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

      <ToastContainer />
    </div>
  );
};

export default SeniorOfficers;
