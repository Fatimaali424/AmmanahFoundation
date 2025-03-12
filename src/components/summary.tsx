import React from "react";

const Summary: React.FC = () => {
  return (
    <div 
    className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat p-6 font-serif"
    style={{ backgroundImage: "url('/aims.jpg')" }} // Change to your image path
  >
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white bg-opacity-60 backdrop-blur-md rounded-2xl p-6 max-w-2xl w-full text-center shadow-xl">
      {/* Text Section */}
      <div className="text-left space-y-4">
        <h1 className="text-4xl font-bold text-pink-700 mb-6">SUMMARY</h1>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li className="text-pink-700 font-semibold">INTRODUCTION</li>
          <li className="text-pink-700 font-semibold">Purpose and Objectives</li>
          <li className="text-pink-700 font-semibold">Vision and Mission</li>
          <li className="text-pink-700 font-semibold">Core Values</li>
          <li className="text-pink-700 font-semibold">Organizational Structure</li>
          <li className="text-pink-700 font-semibold">
            Programs and Activities (plantation drive, school proj)
          </li>
          <li className="text-pink-700 font-semibold">
            Operational Guidelines (3-strike policy, mazeed policies)
          </li>
          <li className="text-pink-700 font-semibold">Partnership and Collaboration</li>
          <li className="text-pink-700 font-semibold">Governance (depts, vols will go)</li>
          <li className="text-pink-700 font-semibold">
            Monitoring and Evaluation (policies, incentives)
          </li>
          <li className="text-pink-700 font-semibold">Compliance with policies</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Summary;
