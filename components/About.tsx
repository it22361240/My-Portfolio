'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="flex flex-col lg:flex-row px-[5%] py-20 bg-[#242424]">
      {/* Profile Image Section */}
      <div className="flex-shrink-0 mb-12 lg:mb-0">
        <motion.div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '9999px',
            overflow: 'hidden',
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.1 }}
        >
          {/* Custom Blue Background */}
          <div className="absolute w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] bg-[#01EEFF] rounded-full"></div>
          {/* Profile Image */}
          <Image
            src="/about-image.png"
            alt="About Photo"
            width={300}
            height={300}
            className="relative z-10 object-cover rounded-full"
          />
        </motion.div>
      </div>

      {/* Text Section */}
      <div className="ml-0 lg:ml-12 text-center lg:text-left">
        <h2 className="text-3xl font-bold mb-4 text-white">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <h3 className="text-xl mb-4 text-gray-300">UI/UX Designer</h3>
        <p className="text-gray-300 mb-6 text-sm sm:text-base">
          I'm Navin, a passionate and self-motivated undergraduate student specializing in UI/UX design
          and frontend development. I thrive on solving problems and creating intuitive user experiences, 
          combining my deep foundation in both design principles and coding. I'm eager to contribute to
          innovative projects and grow in the tech industry.
        </p>
        <button className="bg-cyan-400 text-black px-8 py-3 rounded-full hover:bg-cyan-500 transition-all duration-300">
          See More
        </button>
      </div>
    </section>
  );
}
