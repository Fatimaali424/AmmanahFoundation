import React from "react";
import { FaHandsHelping } from "react-icons/fa";

const IftarSection: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-6 font-serif"
      style={{ backgroundImage: "url('/aims.jpg')" }} 
    >
      {/* Overlay */}
      <div className="bg-white bg-opacity-60 backdrop-blur-md rounded-2xl p-8 max-w-5xl w-full text-center shadow-xl">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-pink-700 mb-6">IFTAR ON RAMZAN:</h1>

        {/* Content Box */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Text Content */}
          <div
            className="p-6 rounded-2xl shadow-lg text-white text-lg max-w-lg"
            style={{
              background: "linear-gradient(to right, #D81B60, #880E4F)", // Pink to Dark Pink
            }}
          >
            <p>
              Amanah's first project is celebrating Ramzan Iftar with people who open their fast on the way home. 
              We provide them with supplies to break their fast on the road or streets.
            </p>
          </div>
          {/* Logo */}
        <div className="mt-6">
          <img
            src="/ramadan.jpg"
            alt="Ramadan Mubarak"
            className="w-80 mx-auto rounded-lg shadow-md"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default IftarSection;
