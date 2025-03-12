'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat h-[200px] flex flex-col justify-center items-center px-4 md:px-10"
      style={{ backgroundImage: "url('/footer.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* Responsive Logo */}
      <div className="absolute top-4 left-4">
        <Image
          src="/Ammanahlogo.jpg"
          alt="Ammanah Logo"
          width={100} // Base size (will scale)
          height={80}
          className="w-auto h-auto max-w-[70px] sm:max-w-[90px] md:max-w-[130px] lg:max-w-[160px] mix-blend-multiply"
        />
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex absolute top-4 right-4 space-x-6 text-blue-900 text-base md:text-lg font-semibold font-serif">
        <Link href="/" className="hover:text-red-900 hover:underline transition">Home</Link>
        <Link href="/aboutUs" className="hover:text-red-900 hover:underline transition">About Us</Link>
        <Link href="/contactUs" className="hover:text-red-900 hover:underline transition">Contact Us</Link>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden absolute top-4 right-4">
        <button onClick={() => setIsOpen(!isOpen)} className="text-pink-700 text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-14 right-4 bg-white shadow-lg rounded-md p-4 flex flex-col space-y-2">
          <Link href="/" className="text-pink-700 hover:text-red-500 transition">Home</Link>
          <Link href="/aboutUs" className="text-pink-700 hover:text-red-500 transition">About Us</Link>
          <Link href="/contactUs" className="text-pink-700 hover:text-red-500 transition">Contact Us</Link>
        </div>
      )}

      {/* Centered Content */}
      <div className="relative text-center mt-16 md:mt-0 px-4">
        <h1 className="text-xl md:text-3xl font-bold font-serif text-pink-700">
          Welcome to AMMANAH
        </h1>
        <p className="text-sm md:text-lg mt-2 text-pink-600">
          Serving the community with trust and loyalty
        </p>
      </div>
    </header>
  );
}
