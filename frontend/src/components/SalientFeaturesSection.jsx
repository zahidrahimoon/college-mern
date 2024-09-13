import { motion } from 'framer-motion';
import { FaUserGraduate, FaBook, FaFlask, FaHandsHelping } from 'react-icons/fa'; // Importing icons from react-icons
import SalientFeatureItem from './SalientFeatureItem';
import decoration from '../assets/decorationone.png';

const SalientFeaturesSection = () => {
  return (
    <div className="py-16 bg-gray-100 border-b  border-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl text-center mb-8 font-serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Salient Features
        </motion.h2>
        <div className="flex flex-col items-center">
          <img src={decoration} className="mb-8" alt="Decoration" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <SalientFeatureItem
            Icon={FaUserGraduate}
            title="Highly Qualified And Experienced Faculty"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate rem aspernatur temporibus aperiam vel saepe quidem necessitatibus dicta optio, repellendus porro similique sequi debitis repellat pariatur libero omnis recusandae veritatis ratione tempora illo. Vitae dolor, in ad cupiditate incidunt maiores accusantium possimus minus! Veritatis voluptas voluptatibus earum magni animi."
          />
          <SalientFeatureItem
            Icon={FaBook}
            title="Well Stocked Library"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate rem aspernatur temporibus aperiam vel saepe quidem necessitatibus dicta optio, repellendus porro similique sequi debitis repellat pariatur libero omnis recusandae veritatis ratione tempora illo. Vitae dolor, in ad cupiditate incidunt maiores accusantium possimus minus! Veritatis voluptas voluptatibus earum magni animi."
          />
          <SalientFeatureItem
            Icon={FaFlask}
            title="Modern Science Labs"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate rem aspernatur temporibus aperiam vel saepe quidem necessitatibus dicta optio, repellendus porro similique sequi debitis repellat pariatur libero omnis recusandae veritatis ratione tempora illo. Vitae dolor, in ad cupiditate incidunt maiores accusantium possimus minus! Veritatis voluptas voluptatibus earum magni animi."
          />
          <SalientFeatureItem
            Icon={FaHandsHelping}
            title="Extra Curricular Activities"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate rem aspernatur temporibus aperiam vel saepe quidem necessitatibus dicta optio, repellendus porro similique sequi debitis repellat pariatur libero omnis recusandae veritatis ratione tempora illo. Vitae dolor, in ad cupiditate incidunt maiores accusantium possimus minus! Veritatis voluptas voluptatibus earum magni animi."
          />
        </div>
      </div>
    </div>
  );
};

export default SalientFeaturesSection;
