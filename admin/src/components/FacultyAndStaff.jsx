import  { useState } from 'react';
import AddFaculty from './AddFaculty';
import FacultyList from './FacultyList';

const FacultyAndStaff = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const handleFacultyUpdated = () => {
    setSelectedFaculty(null); // Reset selected faculty after update
  };

  const handleEdit = (faculty) => {
    setSelectedFaculty(faculty);
  };

  return (
    <div className='mt-[150px] mx-[100px] ml-[300px]'>
      <AddFaculty selectedFaculty={selectedFaculty} onFacultyUpdated={handleFacultyUpdated} />
      <FacultyList onEdit={handleEdit} />
    </div>
  );
};

export default FacultyAndStaff;
