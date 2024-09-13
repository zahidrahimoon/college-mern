
import quaid from '../assets/qauid-e-Azam.jpg'
const Quaid = () => {
  return (
    <section className="bg-white py-16 border-black border-b font-serif">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 flex justify-center">
          <img 
            src={quaid} 
            alt="Founder of the Nation" 
            className="rounded-full border-4 border-red-500"
          />    
        </div>
        <div className="md:w-2/3 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Founder of the Nation</h2>
          <div className="flex justify-center md:justify-start mb-4">
            <div className="border-t-2 border-gray-400 w-16"></div>
            <div className="border-t-2 border-red-500 w-8 mx-2"></div>
            <div className="border-t-2 border-gray-400 w-16"></div>
          </div>
          <p className="text-gray-700 italic mb-4">
            “There’s no doubt the future of our state will and must greatly depend upon the type of education and the way in which we bring up our children, as the future servants of Pakistan. Education does not merely mean academic education, and even that appears to be a very poor type. What we have to do is to mobilize our people and build up the character of our future generation. There is immediate and urgent need for training our people in the scientific and technical education in order to build up our economy, and we should see that our people undertake commerce, trade and particularly, well planned industries. But do not forget that we have to compete with the world, which is moving very fast in this direction. Also, I must emphasize that greater attention should be paid to the technical and vocational education
            In short, we have to create the highest sense of honour, integrity, selfless services to the Nation, and sense of responsibility. And we have to see that they are fully qualified or equipped to play their part in the various branches of economic life in a manner which will do honour to Pakistan.”
          </p>
          <p className="text-gray-700 font-semibold">
            Karachi, 27th November, 1947
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quaid;
