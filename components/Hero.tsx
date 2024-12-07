'use client'; // Add this line to mark the component as a client component

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  // State for dynamic text
  const [role, setRole] = useState("UI/UX Designer");

  useEffect(() => {
    const roles = ["UI/UX Designer", "Frontend Developer"];
    
    const interval = setInterval(() => {
      setRole((prevRole) => 
        prevRole === roles[0] ? roles[1] : roles[0]
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Empty dependency array, effect runs only once

  return (
    <section id="home" className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-[10%] py-20 min-h-[80vh]">
      {/* Left Section */}
      <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
        <h2 className="text-2xl mb-2">Hello It&apos;s Me</h2> {/* Fixed single quote */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Navin Dissanayaka</h1>
        {/* Dynamic Role Text */}
        <p className="text-lg sm:text-xl mb-4">
          And I&apos;m a <span className="text-cyan-400">{role}</span> {/* Fixed single quote */}
        </p>
        {/* Description */}
        <p className="text-gray-300 mb-6 text-sm sm:text-base">
          I&apos;m Navin, an undergraduate passionate about UI/UX design and frontend development. 
          I excel at creating intuitive and engaging interfaces, always striving for user-friendly solutions, 
          eager to contribute and grow professionally. {/* Fixed single quote */}
        </p>
        {/* Social Media Links */}
        <div className="space-x-6 mb-8">
          <a
            href="https://www.linkedin.com/in/navin-dissanayake-95b762289"
            className="text-2xl text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/it22361240"
            className="text-2xl text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://wa.me/94712960587"
            className="text-2xl text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="mailto:kgnpddissanayaka@gmail.com"
            className="text-2xl text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-google"></i>
          </a>
        </div>
        {/* Download CV Button */}
        <a
          href="/Navin-Dissanayake-CV.pdf"
          download
          className="bg-cyan-400 text-black px-8 py-3 rounded-full hover:bg-cyan-500"
        >
          Download CV
        </a>
      </div>
      {/* Right Section */}
      <div className="flex-1 text-center lg:text-right">
        <div className="inline-block rounded-full border-4 border-cyan-400 overflow-hidden">
          <Image
            src="/profile-image.png"
            alt="Profile Photo"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
