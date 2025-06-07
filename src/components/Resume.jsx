import React from "react";

const Resume = ({ setActiveTab }) => {
  const projects = [
    {
      title: "Phone Price Comparison System",
      time: "2025",
      description:
        "Full-stack MERN app to compare phone prices from Amazon, Flipkart, etc. Features include user auth, admin panel, wishlist, reviews, and Gemini-powered AI assistant.",
      stack: "React · Node.js · Express · MongoDB · Tailwind · Gemini AI",
    },
    {
      title: "Personal Blogging Platform",
      time: "2025",
      description:
        "A blog application with secure JWT login/logout, CRUD for posts, and user-specific data handling.",
      stack: "MERN · JWT · Context API · REST APIs",
    },
    {
      title: "NASA Media Explorer",
      time: "2025",
      description:
        "Frontend React app using NASA APIs to fetch daily astronomical media and data. Focused on animations and UI polish.",
      stack: "React · Tailwind · GSAP · NASA APIs",
    },
    {
      title: "Portfolio Website",
      time: "2025",
      description:
        "Animated portfolio built using React, GSAP, and ScrollTrigger to showcase development and design projects.",
      stack: "React · Tailwind · GSAP",
    },
  ];
  return (
    <div className="space-y-8">
      {/* Resume Section */}
      <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Resume</h2>

          <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors rounded-button whitespace-nowrap">
            <i className="fas fa-download mr-2"></i>Download CV
          </button>
        </div>

        <div className="space-y-6">
          {/* Experience */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-4">
              Experience
            </h3>
            <div className="border-l-2 border-indigo-400 pl-4">
              <div className="mb-6">
                <h4 className="font-semibold">
                  Freelance Full Stack Developer
                </h4>
                <p className="text-sm text-gray-400">
                  Self-Employed | 2024 – Present
                </p>
                <p className="text-gray-300 mt-2">
                  Delivered client-based web applications using the MERN stack
                  with pixel-perfect design and optimized backend systems.
                </p>
              </div>

              <h4 className="font-semibold">Graphic Designer (Freelance)</h4>
              <p className="text-sm text-gray-400">
                Remote Projects | 2020 – Present
              </p>
              <p className="text-gray-300 mt-2">
                Created logos, social media posts, and branding content.
                Specialized in clean and bold designs.
              </p>
            </div>
          </div>

          {/* projects */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-4">
              Projects
            </h3>{" "}
            <div className="space-y-6 border-l-2 border-indigo-500 pl-4">
              {projects.map((project, index) => (
                <div key={index}>
                  <h3 className="text-white text-lg font-medium">
                    {project.title}
                  </h3>
                  <p className="text-sm text-indigo-400">{project.time}</p>
                  <p className="text-sm mt-1">{project.description}</p>
                  <p className="text-xs text-gray-400 mt-1">{project.stack}</p>
                </div>
              ))}

              <button
                className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors rounded-button whitespace-nowrap cursor-pointer "
                onClick={() => setActiveTab("projects")}
              >
                More Projects
              </button>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-4">
              Education
            </h3>
            <div className="border-l-2 border-indigo-400 pl-4 mb-4">
              <h4 className="font-semibold">
                Bachelor of Science in Information Technology (Bsc.IT)
              </h4>

              <div className="flex gap-2 items-center  ">
                <p className="text-sm text-gray-400">Mumbai University</p>
                <span>|</span>
                <p className="text-sm text-gray-400">2022 — 2025</p>
              </div>
              <p className="text-gray-300 mt-2">
                Focused on Software Development, Web Technologies, and
                Networking.
              </p>
              <p className="text-gray-300 mt-2">Grade: A+ | CGPI: 9.70</p>
            </div>

            {/* <div className="border-l-2 border-indigo-400 pl-4 mb-4">
              <h4 className="font-semibold">Higher Secondary College</h4>
              <p className="text-sm text-gray-400">2020 — 2022</p>
              <p className="text-gray-300 mt-2">
                 Computer Science · Maths · Physics · Chemistry · Biology
              </p>
              <p className="text-gray-300 mt-2">Grade: B | 50%</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Frontend */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-4">
              Frontend
            </h3>
            <ul className="text-gray-300 flex flex-wrap gap-3 text-sm">
              <li>HTML</li>
              <li>CSS</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-4">
              Backend
            </h3>
            <ul className="text-gray-300 flex flex-wrap gap-3 text-sm">
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>

          {/* Databases */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-4">
              Databases
            </h3>
            <ul className="text-gray-300 flex flex-wrap gap-3 text-sm">
              <li>Firebase</li>
              <li>MongoDB (Basics)</li>
              <li>SQLite</li>
              <li>MySQL</li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-4">
              Languages
            </h3>
            <ul className="text-gray-300 flex flex-wrap gap-3 text-sm">
              <li>JavaScript</li>
              <li>Java</li>
              <li>C/C++</li>
              <li>ASP.NET/C#</li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-4">
              Tools & Platforms
            </h3>
            <ul className="text-gray-300 flex flex-wrap gap-3 text-sm">
              <li>GCP</li>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Android Studio</li>
              <li>Xamarin</li>
              <li>Postman</li>
            </ul>
          </div>

          {/* CS Fundamentals */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-4">
              CS Fundamentals
            </h3>
            <ul className="text-gray-300 flex flex-wrap gap-3 text-sm">
              <li>Operating Systems</li>
              <li>Data Structures & Algorithms (DSA)</li>
              <li>Computer Networks</li>
              <li>Internet of Things (IoT)</li>
              <li>Business Intelligence (BI)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
