'use client';
import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaWhatsapp } from "react-icons/fa";
export default function Contact(){
    return(
       <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-2 font-serif">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-red-700 mb-4">Contact Us</h1>
        <p className="text-blue-900 mb-4 text-lg">
        📍 Get in Touch!
        </p>
        {/* Contact Info */}
        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center space-x-2 text-red-500">
            <FaPhoneAlt />
            <a href="tel:+923473031513" className="text-lg font-medium hover:underline hover:text-pink-700">
            +923473031513
            </a>
            <FaPhoneAlt />
            <a href="tel:+923349673922" className="text-lg font-medium hover:underline hover:text-pink-700">
            +923349673922
            </a>
          </div>
          <div className="flex items-center justify-center space-x-2 text-red-500">
            <FaEnvelope />
            <a href="mailto:salmanfarhan508@gmail.com" className="text-lg font-medium hover:underline hover:text-pink-700">
            salmanfarhan508@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center space-x-2 text-red-500">
            <FaEnvelope />
            <a href="mailto:Ayeshali00715@gmail.com" className="text-lg font-medium hover:underline hover:text-pink-700">
            Ayeshali00715@gmail.com
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-6">
        <a
              href="https://www.instagram.com/amanah_foundation69?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl p-0 rounded-full transition transform hover:scale-110 text-purple-800 hover:text-purple-700"
            >
              <FaInstagram />
            </a>
         {/* WhatsApp */}
         <a
              href="https://whatsapp.com/channel/0029VarpAD02v1IozjP0Bc0h"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 text-2xl hover:text-green-500 transition transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
        </div>
       </div>
       </div>
       </div>
    )
}