import principal from '../assets/principal.jpg';

const Principal = () => {
  return (
    <section className="bg-gray-100 py-16 border-black border-b font-serif">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 mt-8 md:mt-0 md:mr-8 order-2 md:order-1 text-left">
          <h2 className="text-3xl font-bold mb-4">Principal's Message</h2>
          <div className="flex justify-start mb-4">
            <div className="border-t-2 border-gray-400 w-16"></div>
            <div className="border-t-2 border-red-500 w-8 mx-2"></div>
            <div className="border-t-2 border-gray-400 w-16"></div>
          </div>
          <p className="text-gray-700 italic mb-4">
            “Education is the most powerful weapon which you can use to change the world. Our mission is to provide quality education and instill values of integrity, respect, and responsibility in our students to help them become leaders of tomorrow.”
          </p>
          <p className="text-gray-700 font-semibold">
            Mushtaq Hussain, Principal <span className='text-purple-400'>GDBC ASSIFABAD</span>
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center order-1 md:order-2">
          <img 
            src={principal} 
            alt="Principal" 
            className="rounded-full border-4 border-red-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Principal;
