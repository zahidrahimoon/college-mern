import { NavLink } from 'react-router-dom';
import { FaHome, FaNewspaper, FaCalendarAlt, FaUserTie, FaClock, FaUserGraduate, FaBookOpen, FaChalkboardTeacher, FaFlask, FaChevronDown } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen bg-white shadow-lg fixed lg:w-64 md:w-52 sm:w-48 font-playfair">
      <div className="flex-grow overflow-y-auto">
        <ul className="py-2">
          <li>
            <NavLink 
              to="/" 
              exact
              activeClassName="bg-gray-200 font-semibold"
              className="flex items-center px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
            >
              <FaHome className="text-xl" />
              <span className="ml-3 text-lg">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/news" 
              activeClassName="bg-gray-200 font-semibold"
              className="flex items-center px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
            >
              <FaNewspaper className="text-xl" />
              <span className="ml-3 text-lg">News & Updates</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/events" 
              activeClassName="bg-gray-200 font-semibold"
              className="flex items-center px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
            >
              <FaCalendarAlt className="text-xl" />
              <span className="ml-3 text-lg">Events</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/faculty" 
              activeClassName="bg-gray-200 font-semibold"
              className="flex items-center px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
            >
              <FaUserTie className="text-xl" />
              <span className="ml-3 text-lg">Faculty & Staff</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/timetable" 
              activeClassName="bg-gray-200 font-semibold"
              className="flex items-center px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
            >
              <FaClock className="text-xl" />
              <span className="ml-3 text-lg">Student Time Table</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/registration" 
              activeClassName="bg-gray-200 font-semibold"
              className="flex items-center px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
            >
              <FaUserGraduate className="text-xl" />
              <span className="ml-3 text-lg">Student Registration Data</span>
            </NavLink>
          </li>
          <hr className="my-2" />
          <h2 className="px-4 text-gray-600 font-semibold">College Fields</h2>
          <li>
            <NavLink 
              to="/library" 
              activeClassName="bg-gray-200 font-semibold"
              className="flex items-center px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
            >
              <FaBookOpen className="text-xl" />
              <span className="ml-3 text-lg">Library</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/classrooms" 
              activeClassName="bg-gray-200 font-semibold"
              className="flex items-center px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
            >
              <FaChalkboardTeacher className="text-xl" />
              <span className="ml-3 text-lg">Classrooms</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/labs" 
              activeClassName="bg-gray-200 font-semibold"
              className="flex items-center px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
            >
              <FaFlask className="text-xl" />
              <span className="ml-3 text-lg">Laboratories</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin" 
              activeClassName="bg-gray-200 font-semibold"
              className="flex items-center px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
            >
              <FaUserTie className="text-xl" />
              <span className="ml-3 text-lg">Administrative Office</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/auditorium" 
              activeClassName="bg-gray-200 font-semibold"
              className="flex items-center px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
            >
              <FaChalkboardTeacher className="text-xl" />
              <span className="ml-3 text-lg">Auditorium</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/more" 
              activeClassName="bg-gray-200 font-semibold"
              className="flex items-center px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
            >
              <FaChevronDown className="text-xl" />
              <span className="ml-3 text-lg">Show more</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
