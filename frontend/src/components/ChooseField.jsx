import decoration from '../assets/decorationone.png';
import commerce from '../assets/commerce.jpg';
import cs from '../assets/computer.avif';
import engineering from '../assets/preengineering.avif';
import medical from '../assets/premedical.avif';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';


const ChooseField = () => {
  const fields = [
    {
      title: 'Commerce',
      description: 'The Commerce group includes subjects such as Accounting, Banking, Principles of Commerce, Commercial Geography, Business Studies, Economics, and Statistics.The Commerce group includes subjects such as Accounting, Banking, Principles of Commerce, Commercial Geography, Business Studies, Economics, and Statistics.The Commerce group includes subjects such as Accounting, Banking, Principles of Commerce, Commercial Geography, Business Studies, Economics, and Statistics.The Commerce group includes subjects such as Accounting, Banking, Principles of Commerce, Commercial Geography, Business Studies, Economics, and Statistics.The Commerce group includes subjects such as Accounting, Banking, Principles of Commerce, Commercial Geography, Business Studies, Economics, and Statistics.',
      image: commerce
    },
    {
      title: 'Pre-Engineering',
      description: 'The Pre-Engineering group covers various engineering fields including Civil, Electrical, Mechanical, Aeronautical, Architectural, Telecom, Chemical, Space & others.The Pre-Engineering group covers various engineering fields including Civil, Electrical, Mechanical, Aeronautical, Architectural, Telecom, Chemical, Space & others.The Pre-Engineering group covers various engineering fields including Civil, Electrical, Mechanical, Aeronautical, Architectural, Telecom, Chemical, Space & others.The Pre-Engineering group covers various engineering fields including Civil, Electrical, Mechanical, Aeronautical, Architectural, Telecom, Chemical, Space & others.The Pre-Engineering group covers various engineering fields including Civil, Electrical, Mechanical, Aeronautical, Architectural, Telecom, Chemical, Space & others.',
      image: engineering
    },
    {
      title: 'Pre-Medical',
      description: 'The Pre-Medical group serves as a gateway to professions like physiotherapy, surgery, pharmacy, microbiology, and more.The Pre-Medical group serves as a gateway to professions like physiotherapy, surgery, pharmacy, microbiology, and more.The Pre-Medical group serves as a gateway to professions like physiotherapy, surgery, pharmacy, microbiology, and more.The Pre-Medical group serves as a gateway to professions like physiotherapy, surgery, pharmacy, microbiology, and more.The Pre-Medical group serves as a gateway to professions like physiotherapy, surgery, pharmacy, microbiology, and more.The Pre-Medical group serves as a gateway to professions like physiotherapy, surgery, pharmacy, microbiology, and more.The Pre-Medical group serves as a gateway to professions like physiotherapy, surgery, pharmacy, microbiology, and more.',
      image: medical
    },
    {
      title: 'Computer Science',
      description: 'The Computer Science group focuses on Physics, Computer Science, and Mathematics, with practicals in programming languages.The Computer Science group focuses on Physics, Computer Science, and Mathematics, with practicals in programming languages.The Computer Science group focuses on Physics, Computer Science, and Mathematics, with practicals in programming languages.The Computer Science group focuses on Physics, Computer Science, and Mathematics, with practicals in programming languages.The Computer Science group focuses on Physics, Computer Science, and Mathematics, with practicals in programming languages.The Computer Science group focuses on Physics, Computer Science, and Mathematics, with practicals in programming languages.',
      image: cs
    },
  ];

  return (
    <section className="text-center py-8 px-8 bg-gray-100 border-black border-b ">
      <h2 className="text-3xl font-serif mb-8">Choose Your Field of Study</h2>
      <div className="flex flex-col items-center">
        <img src={decoration} className="mb-8" alt="Decoration" />
      </div>
      <div className="flex flex-wrap justify-center lg:flex-nowrap gap-6 ">
        {fields.map((field, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/4 p-4 border border-gray-300 rounded-sm bg-white shadow-md transition-transform transform hover:scale-105 cursor-pointer text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <img src={field.image} alt={field.title} className="w-full h-32 object-cover rounded-t-lg mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2 font-serif  ">{field.title}</h3>
            <p className="text-gray-400 text-[12px] mb-4">{field.description}</p>
            <a to="/registration">
              <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


export default ChooseField;
