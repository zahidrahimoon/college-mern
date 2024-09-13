import { Link } from 'react-router-dom';
const MiniNavbar = () => {
    return (
      <div className="bg-whitesmoke text-gray-800 py-2 px-4 border-b border-t border-black flex flex-col items-center text-xs hidden md:flex">
        <div className="flex items-center justify-center space-x-4 mb-1">
           <Link to="/ContactUs" className="flex items-center text-sm hover:text-purple-600">
            <span className="mr-1">❓</span> Have any questions?
          </Link>
          <a href="mailto:info@gdbcasifabad.edu.pk" className="flex items-center text-sm hover:text-purple-600">
            <span className="mr-1">📧</span> info@gdbcasifabad
          </a>
          <a href="tel:+1234567890" className="flex items-center text-sm hover:text-purple-600">
            <span className="mr-1">📞</span> +123 456 7890
          </a>
          <a href="tel:+0987654321" className="flex items-center text-sm hover:text-purple-600">
            <span className="mr-1">📞</span> +098 765 4321
          </a>
          <Link to="/RegistrationForm" className="flex items-center text-sm hover:text-purple-600">
            <span className="mr-1">📝</span> Registration Form
          </Link>
        </div>
      </div>
    );
  };
  
  export default MiniNavbar;
