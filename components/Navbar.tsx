'use client'; // Marking the component as client-side

import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-6 lg:px-[10%] py-6 bg-[#1a1a1a] fixed w-full top-0 left-0 z-50">
      <div className="text-2xl font-bold text-white">Portfolio.</div>
      
      {/* Desktop Links */}
      <div className="hidden lg:flex space-x-8">
        <a href="#home" className="hover:text-cyan-400">Home</a>
        <a href="#about" className="hover:text-cyan-400">About</a>
        <a href="#project" className="hover:text-cyan-400">My Project</a>
        <a href="#contact" className="hover:text-cyan-400">Contact</a>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl text-cyan-400 focus:outline-none">
          {isMobileMenuOpen ? 'X' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#1a1a1a] p-6 rounded-lg space-y-4 z-50">
          <a href="#home" className="block text-white hover:text-cyan-400">Home</a>
          <a href="#about" className="block text-white hover:text-cyan-400">About</a>
          <a href="#project" className="block text-white hover:text-cyan-400">My Project</a>
          <a href="#contact" className="block text-white hover:text-cyan-400">Contact</a>
        </div>
      )}
    </nav>
  );
}
