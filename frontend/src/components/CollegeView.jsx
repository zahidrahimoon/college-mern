import decoration from "../assets/decorationone.png";
import nature from '../assets/nature1.mp4';

const CollegeView = () => {
  return (
    <div className="p-6 max-w-full mx-auto w-full border-black border-b">
      <h2 className="text-2xl md:text-3xl mb-4 font-serif text-center mt-6">
        College Preview
      </h2>
      <div className="flex flex-col items-center">
        <img src={decoration} className="mb-8 mt-7" alt="Decoration" />
      </div>
      <div className="w-full max-w-full p-4">
        <video className="w-full h-auto rounded-sm" controls autoPlay>
          <source src={nature} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default CollegeView;
