import React from "react";

const Hero: React.FC = () => {
  return (
    <section 
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-4 sm:px-6"
      style={{ backgroundImage: "url('/hands.jpg')" }}
    >
      {/* ✅ Responsive Text Container */}
      <div className="absolute right-5 sm:right-10 md:right-10 top-32 sm:top-40 md:top-48 lg:top-56 max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] text-center md:text-left font-serif">
        
        {/* ✅ Responsive Heading */}
        <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-blue-900">
          WELCOME TO <br className="hidden sm:block" /> AMMANAH FOUNDATION
        </h1>

        {/* ✅ Responsive Paragraph */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 font-semibold text-pink-900">
          At Ammanah Foundation, we believe in the<br className="hidden md:block" />
          power of compassion, support, and positive change.
        </p>

        {/* ✅ Animated Symbol (Scales Correctly) */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-pulse text-red-900 mt-4">
          ∞
        </div>
      </div>
    </section>
  );
};

export default Hero;
