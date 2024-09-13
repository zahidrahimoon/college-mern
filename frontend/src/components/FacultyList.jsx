import { useEffect, useState } from 'react';
import axios from 'axios';
import FacultyDropdown from './FacultyDropdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import decoration from '../assets/decorationone.png';

const FacultyList = () => {
  const [facultyData, setFacultyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/faculty');
        if (response.data.length === 0) {
          toast.info('No data found.');
        }
        setFacultyData(response.data);
      } catch (error) {
        toast.error("Error fetching data.");
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4 font-serif mt-8">
      <ToastContainer />
      <h1 className="text-4xl mb-8 text-center font-serif">Our Experienced Faculty</h1>
      <div className="flex flex-col items-center">
      <img src={decoration} className="mb-8" alt="Decoration" />
      </div>
      {facultyData.length === 0 ? (
        <p>No data found.</p>
      ) : (
        facultyData.map((section, index) => (
          <FacultyDropdown key={index} {...section} />
        ))
      )}
    </div>
  );
};

export default FacultyList;
