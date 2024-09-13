import { motion } from 'framer-motion';
import useCountUp from '../Hooks/useCountUp.js';
import heroBg from '../assets/background.avif';

const stats = [
  { icon: '🎓', value: 5400, label: 'Enrolled Students' },
  { icon: '🏆', value: 20, label: 'Years Of Academic Excellence' },
  { icon: '📜', value: 1506, label: 'High Achievers' },
  { icon: '⏱', value: 20, label: 'Completed Sessions' },
];

const StatsSection = () => {
  return (
    <div
      className="relative bg-cover bg-center py-10 border-b border-black"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5% 0', // Responsive padding
      }}
    >
      <div className="absolute inset-0 bg-orange-300 bg-opacity-60"></div>
      <div className="container mx-auto flex flex-wrap justify-around items-center relative z-10">
        {stats.map((stat, index) => {
          const count = useCountUp(stat.value, 0.5);
          return (
            <motion.div
              key={index}
              className="text-center text-black font-serif p-4 mb-4 md:mb-0 md:hover:bg-purple-400 md:hover:py-8 md:hover:px-6 transition duration-300 ease-in-out transform md:hover:scale-110 cursor-pointer w-full sm:w-1/2 md:w-1/4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl mb-2">{stat.icon}</div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">{count}+</div>
              <div className="text-sm sm:text-base md:text-lg">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsSection;
