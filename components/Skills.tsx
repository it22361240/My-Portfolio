export default function Skills() {
    return (
      <section id="skills" className="px-6 lg:px-[10%] py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My <span className="text-cyan-400">Skill</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#242424] p-8 rounded-lg text-center">
            <i className="fas fa-paint-brush text-4xl text-cyan-400 mb-4"></i>
            <h3 className="text-xl font-bold mb-4">UX-UI Designer</h3>
            <p className="text-gray-300">
              I specialize in designing intuitive and visually appealing user interfaces 
              that prioritize usability and enhance the overall user experience.
            </p>
          </div>
          <div className="bg-[#242424] p-8 rounded-lg text-center">
            <i className="fas fa-code text-4xl text-cyan-400 mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Web Development</h3>
            <p className="text-gray-300">
              I build responsive, dynamic, and aesthetically pleasing websites 
              with a focus on performance and user satisfaction.
            </p>
          </div>
          <div className="bg-[#242424] p-8 rounded-lg text-center">
            <i className="fas fa-mobile-alt text-4xl text-cyan-400 mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Mobile App Development</h3>
            <p className="text-gray-300">
              I create efficient and user-friendly mobile applications, ensuring 
              seamless functionality and great user experiences across platforms.
            </p>
          </div>
        </div>
      </section>
    );
  }
  