import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import pakflag from "../../assets/pakistanlogo.avif";
import "./Header.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/About" },
    { name: "Faculty & Staff", link: "/FacultyAndStaff" },
    { name: "Academics", link: '/RegistrationForm', hasDropdown: true },
    { name: "Galleries", link: "/Galleries" },
    { name: "News & Updates", link: "/NewsAndUpdates" },
    { name: "Contact Us", link: "/ContactUs" },
  ];

  const academicLinks = [
    { name: "Register Online", link: "/RegistrationForm" },
    { name: "Sample Paper", link: "/SamplePaper" },
    { name: "Admission Process", link: "/admissionProcess" },
    { name: "Uniform", link: "/uniform" },
    { name: "Student TimeTable", link: "/StudentTimeTable" },
  ];

  const handleMouseEnter = (link) => {
    if (link.hasDropdown) {
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isDropdownHovered) {
      setIsDropdownOpen(false);
    }
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownHovered(true);
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownHovered(false);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full bg-gray-900 text-white relative">
      <div className="md:px-10 py-4 px-7 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="gdbc asifabad" className="w-16 h-auto" />
          <span className="font-semibold text-xl leading-none font-serif">
            GDBC ASSIFABAD
          </span>
        </div>

        <div className="hidden lg:flex items-center justify-center w-full font-serif">
          <ul className="flex justify-center">
            {Links.map((link) => (
              <li
                key={link.name}
                className={`relative group my-7 md:my-0 md:ml-8 ${location.pathname === link.link ? 'active' : ''}`}
                onMouseEnter={() => handleMouseEnter(link)}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to={link.link}
                  className={({ isActive }) => `text-white anchor hover:text-purple-400 ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </NavLink>
                {link.hasDropdown && isDropdownOpen && (
                  <ul
                    className="absolute top-full left-0 bg-white shadow-md w-48 z-10 dropdown"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    {academicLinks.map((sublink) => (
                      <li key={sublink.name}>
                        <NavLink
                          to={sublink.link}
                          className="block text-gray-800 anchor"
                        >
                          {sublink.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center">
          <img
            src={pakflag}
            alt="gdbc asifabad"
            className="w-16 h-auto rounded border-2 border-black shadow-lg"
          />
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 hover:text-green-600"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-7 h-7" />
            ) : (
              <FiMenu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-20"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full bg-white shadow-md w-3/5 z-30 p-4 overflow-y-auto overflow-x-hidden">
            <button
              className="absolute top-4 right-4 text-gray-800 hover:text-red-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiX className="w-7 h-7" />
            </button>
            <ul className="flex flex-col gap-4 mobile-menu mt-12">
              {Links.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.link}
                    className={({ isActive }) => `block text-gray-800 anchor ${isActive ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                  {link.hasDropdown && (
                    <ul className="pl-4">
                      {academicLinks.map((sublink) => (
                        <li key={sublink.name}>
                          <NavLink
                            to={sublink.link}
                            className="block text-gray-800 anchor"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sublink.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
