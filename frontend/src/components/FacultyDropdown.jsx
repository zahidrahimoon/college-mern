import { useState } from 'react';

const FacultyDropdown = ({ department, members }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="border-2 border-purple-500 mb-2">
      <div
        className="flex justify-between items-center p-4 bg-white cursor-pointer hover:bg-purple-400"
        onClick={toggleDropdown}
      >
        <h2 className="text-xl font-bold text-black">{department}</h2>
        <span className="text-purple-600 hover:text-black">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-100">
          <div className="flex flex-wrap justify-center">
            {members.map((member, index) => (
              <div
                key={index}
                className="max-w-xs w-full sm:w-1/3 p-2"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                {member.image && (
                    <img 
                      src={`http://localhost:3000/uploads/${member.image.replace(/^\/uploads\//, '')}`} 
                      alt={member.name} 
                      className="w-full h-auto"
                      onError={() => console.error(`Failed to load image: http://localhost:3000/uploads/${member.image}`)}
                    />
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-gray-600">{member.title}</p>
                    <p className="text-gray-600">{member.qualification}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyDropdown;
