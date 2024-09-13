import { motion } from 'framer-motion';
import decoration from '../assets/decorationone.png';
import collegehero from '../assets/college-hero.jfif';

const History = () => {
  return (
    <div className="p-8 border-b border-t border-black">
      <motion.h1
        className="text-center text-4xl mb-8 mt-8 font-serif"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        History & Background
      </motion.h1>
      <div className="flex flex-col items-center">
        <img src={decoration} className="mb-8" alt="Decoration" />
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-[60%]">
          <div className="md:w-1/2 p-4">
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-justify font-sans text-gray-400"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate rem aspernatur temporibus aperiam vel saepe quidem necessitatibus dicta optio, repellendus porro similique sequi debitis repellat pariatur libero omnis recusandae veritatis ratione tempora illo. Vitae dolor, in ad cupiditate incidunt maiores accusantium possimus minus! Veritatis voluptas voluptatibus earum magni animi.<br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quos facere. Illum velit tenetur harum, dignissimos temporibus nemo voluptas ea?
            </motion.p>
          </div>
          <div className="md:w-1/2 p-4 flex justify-center">
            <motion.img
              src={collegehero}
              alt="College Hero"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-[90%] h-auto rounded-sm shadow-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
