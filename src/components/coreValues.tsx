import React from "react";
import { FaComments, FaSyncAlt, FaUsers } from "react-icons/fa";

const CoreValues: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: "url('/aims.jpg')" }} // Change this to your actual image
    >
      {/* Overlay */}
      <div className="bg-white bg-opacity-60 backdrop-blur-md rounded-2xl p-8 max-w-4xl w-full text-center shadow-xl font-serif">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-pink-700 mb-6">CORE VALUES</h1>

        {/* Staggered Layout with Gradient Backgrounds */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-start">
            <div className="p-6 rounded-2xl shadow-lg max-w-sm text-white"
              style={{
                background: "linear-gradient(to right, #D81B60, #880E4F)" // Pink to Dark Pink
              }}>
              <div className="flex items-center gap-2">
                <FaComments className="text-3xl" />
                <h2 className="text-xl font-bold">Communication:</h2>
              </div>
              <p className="mt-2">
                Open and transparent dialogue to foster understanding and collaboration.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="p-6 rounded-2xl shadow-lg max-w-sm text-white"
              style={{
                background: "linear-gradient(to right, #D81B60, #880E4F)" // Orange to Dark Orange
              }}>
              <div className="flex items-center gap-2">
                <FaSyncAlt className="text-3xl" />
                <h2 className="text-xl font-bold">Adaptability:</h2>
              </div>
              <p className="mt-2">
                Embracing change and evolving with new circumstances.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="p-6 rounded-2xl shadow-lg max-w-sm text-white"
              style={{
                background: "linear-gradient(to right, #D81B60, #880E4F)" // Blue to Dark Blue
              }}>
              <div className="flex items-center gap-2">
                <FaUsers className="text-3xl" />
                <h2 className="text-xl font-bold">Empowerment:</h2>
              </div>
              <p className="mt-2">
                Enabling youth to realize their potential and lead positive change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
