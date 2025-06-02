import React from "react";

const About = () => {
  return (
    <div className="space-y-8">
      <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">About</h2>
        <p className="text-gray-300 leading-relaxed">
          I'm a passionate full-stack web developer specializing in the MERN
          stack (MongoDB, Express, React, Node.js). My focus is building clean,
          efficient, and scalable applications that solve real-world problems.
          I'm driven by independence, creativity, and the goal to create
          impact-driven digital solutions — especially projects that blend
          practical functionality with user-centric design.
        </p>
      </section>

      <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Core Competencies</h2>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start">
            <i className="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
            <span>React.js, Node.js, Express.js , MongoDB, Tailwind CSS</span>
          </li>
          <li className="flex items-start">
            <i className="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
            <span>Authentication with JWT, RESTful APIs, CRUD operations</span>
          </li>
          <li className="flex items-start">
            <i className="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
            <span>
              Frontend architecture (React Context/Redux), clean UI structure
            </span>
          </li>
          <li className="flex items-start">
            <i className="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
            <span>Version control with Git & GitHub</span>
          </li>
          <li className="flex items-start">
            <i className="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
            <span>
              Problem-solving, project structuring, and UI optimization
            </span>
          </li>
          <li className="flex items-start">
            <i className="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
            <span>Design translation and responsive web layouts</span>
          </li>
        </ul>
      </section>

      <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg">
        {/* PROJECT HIGHLIGHTS */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Key Projects
          </h3>
          <ul className=" list-inside space-y-1">
            <li>
              <i className="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
              Phone Price Comparison App — fetches real-time data, compares from
              Flipkart & Amazon.
            </li>
            <li>
              <i className="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
              Personal MERN Blog App — user authentication, full CRUD, secure
              data management.
            </li>
            <li>
              <i className="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
              NASA API Explorer — integrates space data with smooth interactive
              UI.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">What I'm Doing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#333] p-5 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-900 flex items-center justify-center mr-3">
                <i className="fas fa-code text-indigo-400"></i>
              </div>
              <h3 className="text-lg font-semibold">Web Development</h3>
            </div>
            <p className="text-gray-300">
              Building dynamic, scalable full-stack apps using MERN & modern
              hosting solutions.
            </p>
          </div>
          <div className="bg-[#333] p-5 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-900 flex items-center justify-center mr-3">
                <i className="fas fa-paint-brush text-indigo-400"></i>
              </div>
              <h3 className="text-lg font-semibold">UI & Code Optimization</h3>
            </div>
            <p className="text-gray-300">
              Creating clean, accessible, responsive layouts, and optimized UIs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
