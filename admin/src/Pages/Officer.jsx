import JuniorOfficers from "../components/JuniorOfficers";
import SeniorOfficers from "../components/SeniorOfficers";


const Officer = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-4 font-playfair mt-16">
    <div className="w-full max-w-5xl shadow-md rounded-lg mb-6 p-6">
      <SeniorOfficers />
    </div>
    <div className="w-full max-w-5xl shadow-md rounded-lg p-6">
      <JuniorOfficers />
    </div>
  </div>
  )
};

export default Officer;