'use client';
import Image from 'next/image';
import { FC } from 'react';

const Projects: FC = () => {
  return (
    <section id="project" className="px-[10%] py-20 bg-[#1a1a1a] text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">
        My <span className="text-cyan-400">Projects</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Food Delivery Web App */}
        <a
          href="https://github.com/it22361240/Food-delivery.git"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#242424] rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-400 transition-shadow duration-300 group"
        >
          <Image
            src="/project1.png"
            alt="Food delivery web app"
            width={500}
            height={900}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
              Food Delivery Web App Frontend
            </h3>
            <p className="text-gray-400">(MERN Stack)</p>
          </div>
        </a>
        {/* Sri Lanka Railway Website */}
        <a
          href="https://www.figma.com/design/8k7EBhTdSFR3iXlgLHOp0W/Untitled?node-id=5-3&t=sqIJmgMv0ZBV76qW-1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#242424] rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-400 transition-shadow duration-300 group"
        >
          <Image
            src="/project2.png"
            alt="Sri Lanka Railway Website"
            width={500}
            height={900}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
              Sri Lanka Railway Website Re-design
            </h3>
            <p className="text-gray-400">(Figma)</p>
          </div>
        </a>
        {/* Time Table Mobile App */}
        <a
          href="https://www.figma.com/design/0Nr4RduCfdNCQuyDmfmFcO/Untitled?node-id=0-1&t=1AhSFsiCiARiJiUR-1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#242424] rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-400 transition-shadow duration-300 group"
        >
          <Image
            src="/project3.png"
            alt="Time Table Mobile App"
            width={500}
            height={900}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
              Time Table Mobile App
            </h3>
            <p className="text-gray-400">(Figma)</p>
          </div>
        </a>
        {/* Courier Service Web App */}
        <a
          href="https://github.com/thathsaraDinu/DashDropExpress.git"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#242424] rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-400 transition-shadow duration-300 group"
        >
          <Image
            src="/project4.png"
            alt="Courier Service Web App"
            width={500}
            height={900}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
              Courier Service Web App
            </h3>
            <p className="text-gray-400">(MERN Stack)</p>
          </div>
        </a>
        <a
          href="https://www.figma.com/design/9UZHeUANRQXBfu6ah9VGce/Intern?node-id=8-61&t=sMqUrelGTpvNUBpN-1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#242424] rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-400 transition-shadow duration-300 group"
        >
          <Image
            src="/project5.png"
            alt="Courier Service Web App"
            width={500}
            height={900}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
              Event booking and management app
            </h3>
            <p className="text-gray-400">(Figma Design)</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
