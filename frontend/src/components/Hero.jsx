import { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import hero from '../assets/college-hero.jfif';

const Hero = () => {
  const { scrollY } = useViewportScroll();
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const y1 = useTransform(scrollY, [0, windowHeight], [0, -200]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <motion.img
        src={hero}
        alt="Hero"
        className="absolute w-full h-full object-cover"
        style={{ y: y1 }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
        <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col sm:flex-row items-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h1 className="text-6xl sm:text-[8rem] md:text-[10rem] font-bold">ONE</h1>
            <motion.div
              className="flex flex-col bg-orange-400 px-4 py-2 rounded text-white mt-4 sm:mt-0 sm:ml-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <span className="font-semibold rounded mb-1">Purpose</span>
              <span className="font-semibold rounded mb-1">Mission</span>
              <span className="font-semibold rounded">Dream</span>
            </motion.div>
          </motion.div>
          <motion.p
            className="text-orange-300 mb-4 text-sm sm:text-base md:text-lg lg:text-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis unde atque at.
          </motion.p>
          <motion.button
            className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition text-sm sm:text-base md:text-lg lg:text-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            Read More
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
