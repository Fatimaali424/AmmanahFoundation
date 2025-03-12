import React from 'react'

export default function  Aboutus () {
  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 py-16 px-6 font-serif">
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-6">About Ammanah Foundation</h1>
      <p className="text-lg leading-relaxed text-blue-900">
        Ammanah Foundation is a non-profit organization dedicated to empowering communities through <br />
        education, support, and humanitarian aid. Our mission is to provide resources, opportunities, 
        and assistance to those in need, fostering a world of hope and equality.
        
        We believe youth can transform society when united and empowered.
        We use privileged resources, mobilize the middle class, and uplift the underprivileged
        Our goal is to break down socioeconomic barriers and foster collaboration
        We aim to help every young individual reach their full potential.
      </p>
    </div>

    {/* Team Section */}
    <div className="max-w-6xl mx-auto mt-12">
      <h2 className="text-3xl font-semibold text-center text-red-500 mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center">
          <img src="/team1.jpg" alt="Salman Ferhan" className="w-32 h-32 rounded-full object-cover border-4 border-red-300" />
          <h3 className="text-xl font-bold text-red-600 mt-4">Salman Ferhan</h3>
          <p className="text-blue-900">Founder & CEO</p>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col items-center">
          <img src="/team2.jpg" alt="Ayesha Ali" className="w-32 h-32 rounded-full object-cover border-4 border-red-300" />
          <h3 className="text-xl font-bold text-red-600 mt-4">Ayesha Ali</h3>
          <p className="text-blue-900">Director Media & Marketing</p>
        </div>

        {/* Team Member 3 */}
       {/*<div className="flex flex-col items-center">
          <img src="/team3.jpg" alt="Harper Russo" className="w-32 h-32 rounded-full object-cover border-4 border-red-300" />
          <h3 className="text-xl font-bold text-red-600 mt-4">Harper Russo</h3>
          <p className="text-gray-700">Leader</p>
        </div>*/}
      </div>
    </div>
  </section>
  )
}
