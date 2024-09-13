import { FaExclamationTriangle } from 'react-icons/fa';

const UniformAlert = () => {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-5 rounded-lg shadow-lg relative overflow-hidden">
      <div className="scrolling-text">
        <div className="flex items-center space-x-4">
          {/* Alert Icon */}
          <FaExclamationTriangle className="text-3xl text-yellow-700" />

          {/* Alert Message */}
          <div>
            <p className="text-md font-medium font-serif">
              There will be no entry in the college if you break the rules and regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniformAlert;
