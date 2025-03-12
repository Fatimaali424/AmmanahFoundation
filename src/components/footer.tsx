'use client';

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer 
      className="relative bg-cover bg-center bg-no-repeat text-white py-10"
      style={{ backgroundImage: "url('/footer.jpg')" }} // Ensure this image is in /public folder
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-white/30"></div>

      <div className="relative container mx-auto px-4 text-left font-serif pl-10">
        <h2 className="text-xl font-semibold text-red-600 ">Need Help? We're Here for You!</h2>
        <p className="text-lg mt-2 text-red-500">Contact us anytime for support and assistance.</p>

        <div className="flex space-x-6 mt-4 text-pink-600 text-lg">
          <a href="/faq" className="hover:text-red-700 hover:underline">FAQ</a>
          <a href="/aboutUs" className="hover:text-red-700 hover:underline">Support</a>
          <a href="/contactUs" className="hover:text-red-700 hover:underline">Contact Us</a>
        </div>

        <p className="text-sm mt-4 opacity-90 text-blue-900">© 2025 Helping Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
