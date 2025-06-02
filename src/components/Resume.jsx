import React from "react";

const Resume = () => {
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

            <div className="mb-6">
              <h4 className="font-semibold">Freelance Full Stack Developer</h4>
              <p className="text-sm text-gray-400">
                Self-Employed | 2024 – Present
              </p>
              <p className="text-gray-300 mt-2">
                Delivered client-based web applications using the MERN stack
                with pixel-perfect design and optimized backend systems.
              </p>
            </div>

            <div className="border-l-2 border-indigo-400 pl-4">
              <h4 className="font-semibold">Graphic Designer (Freelance)</h4>
              <p className="text-sm text-gray-400">
                Remote Projects | 2022 – Present
              </p>
              <p className="text-gray-300 mt-2">
                Created logos, social media posts, and branding content using
                Adobe Suite. Specialized in clean and bold designs.
              </p>
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
              <p className="text-sm text-gray-400">2022 — 2025</p>
              <p className="text-gray-300 mt-2">
                Focused on Software Development, Web Technologies, and
                Networking.
              </p>
              <p className="text-gray-300 mt-2">Grade: A+ | CGPI: 9.70</p>
            </div>
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

      <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Frontend */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-4">
              Frontend
            </h3>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
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
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>

          {/* Databases */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-4">
              Databases
            </h3>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
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
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
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
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
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
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
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
