import { motion } from 'framer-motion';
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import BackToTopButton from './BackToTopButton';
import Logo from '../assets/logo.png'; // Adjust the path to your logo

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12 px-4 md:px-6">
      {/* Main Footer Content */}
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
          {/* Logo and Description */}
          <motion.div 
            className="w-full md:w-1/4 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img src={Logo} alt="Logo" className="h-12 md:h-16 mx-auto mb-4" />
            <p className="text-gray-400 mb-4 font-serif text-sm md:text-base">We are committed to providing the best service for our students with a focus on education and community support.</p>
          </motion.div>

          {/* Links Columns */}
          <motion.div 
            className="w-full md:w-1/4 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl md:text-2xl font-semibold mb-4 font-serif">Useful Links</h4>
            <ul className="space-y-2 text-center">
              {['About Us', 'Faculty & Staff', 'FAQs', 'News & Updates', 'Contact Us'].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                >
                  <a href="#" className="text-gray-300 hover:text-purple-400 text-sm md:text-base">{link}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/4 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xl md:text-2xl font-semibold mb-4 font-serif">Students</h4>
            <ul className="space-y-2 text-center">
              {['Academics', 'Sample Paper', 'Registration Form', 'Uniform', 'Galleries'].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                >
                  <a href="#" className="text-gray-300 hover:text-purple-400 text-sm md:text-base">{link}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media Links */}
          <motion.div 
            className="w-full md:w-1/4 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-xl md:text-2xl font-semibold mb-4 font-serif">Follow Us</h4>
            <div className="flex flex-col items-center space-y-4">
              {[{
                href: "#",
                label: "Facebook",
                icon: <FaFacebook className="text-2xl md:text-3xl" />,
                color: "text-blue-600 hover:text-blue-400"
              }, {
                href: "https://wa.me/1234567890",
                label: "WhatsApp",
                icon: <FaWhatsapp className="text-2xl md:text-3xl" />,
                color: "text-green-500 hover:text-green-400"
              }, {
                href: "mailto:info@example.com",
                label: "Email",
                icon: <FaEnvelope className="text-2xl md:text-3xl" />,
                color: "text-gray-400 hover:text-gray-200"
              }].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  className={`${social.color} flex items-center space-x-2`} 
                  aria-label={social.label}
                  whileHover={{ scale: 1.05 }}
                >
                  {social.icon}
                  <span className="text-sm md:text-base">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="text-center mt-8 md:mt-12 border-t border-gray-700 pt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-gray-400 text-xs md:text-sm font-serif">
          © Government Degree Boys College Asifabad. Design & Developed By 
          <a href="https://github.com/zahidrahimoon" className="text-purple-400 decoration-none"> Zahid Rahimoon</a>
        </p>
      </motion.div>

      <BackToTopButton />
    </footer>
  );
};

export default Footer;
