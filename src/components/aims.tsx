import React from "react";
import { FaHandHoldingHeart, FaBookOpen, FaShieldAlt, FaUsers, FaChalkboardTeacher, FaTools } from "react-icons/fa";

const OurAims: React.FC = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat p-6 font-serif"
      style={{ backgroundImage: "url('/aims.jpg')" }} // Change to your image path
    >
      {/* Overlay for better readability */}
      <div className="bg-white bg-opacity-60 backdrop-blur-md rounded-2xl p-8 max-w-4xl w-full text-center shadow-xl">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-pink-700 mb-6">OUR AIMS</h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center text-pink-700">
            <FaHandHoldingHeart className="text-4xl mb-2" />
            <h2 className="text-xl font-bold">To Aid:</h2>
            <p className="text-blue-900">
              The needy and underprivileged with monthly essential humanitarian supplies.
            </p>
          </div>

          <div className="flex flex-col items-center text-pink-700">
            <FaBookOpen className="text-4xl mb-2" />
            <h2 className="text-xl font-bold">To Provide:</h2>
            <p className="text-blue-900">
              Education and resources to students in under-resourced institutions.
            </p>
          </div>

          <div className="flex flex-col items-center text-pink-700">
            <FaShieldAlt className="text-4xl mb-2" />
            <h2 className="text-xl font-bold">To Protect:</h2>
            <p className="text-blue-900">
              Animals and wildlife sanctuaries; promote environmental cleanliness.
            </p>
          </div>

          <div className="flex flex-col items-center text-pink-700">
            <FaUsers className="text-4xl mb-2" />
            <h2 className="text-xl font-bold">To Motivate:</h2>
            <p className="text-blue-900">
              Promote charitable engagement and community involvement.
            </p>
          </div>

          <div className="flex flex-col items-center text-pink-700">
            <FaChalkboardTeacher className="text-4xl mb-2" />
            <h2 className="text-xl font-bold">To Train:</h2>
            <p className="text-blue-900">
              Guide youth in community service through skill-building initiatives.
            </p>
          </div>

          <div className="flex flex-col items-center text-pink-700">
            <FaTools className="text-4xl mb-2" />
            <h2 className="text-xl font-bold">To Rebuild:</h2>
            <p className="text-blue-900">
              Support disaster-affected areas with aid and relief efforts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAims;
