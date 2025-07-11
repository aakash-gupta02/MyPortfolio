import React, { useState } from "react";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Github from "./Github";
import Connect from "./Connect";
import Footer from "./Footer";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "resume":
        return <Resume setActiveTab={setActiveTab}  />;

      case "projects":
        return <Projects />;
      case "github":
        return <Github />;
      case "contact":
        return <Connect />;
      default:
        return null;
    }
  };

return (
    <div className="min-h-screen w-full bg-[#1f1f1f] text-white font-['Inter',sans-serif] flex flex-col md:flex-row overflow-x-hidden">

      {/* Left Sidebar */}
      <div className="w-full md:w-64 lg:w-72 bg-[#222222] p-6 md:fixed md:h-screen md:overflow-y-auto">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-36 h-36 rounded-full overflow-hidden mb-4 border-2 border-indigo-500">
            <img
              src="https://i.postimg.cc/br5bhJ6R/91-98920-30814-20250615-190822-4.png"
              alt="Developer Portrait"
              className="w-full h-full bg-indigo-900 object-cover object-top"
            />
          </div>
          <h1 className="text-2xl font-bold mt-2">Aakash Gupta</h1>
          <p className="text-indigo-400 mt-1">Full Stack Developer</p>
        </div>
        <div className="space-y-4 mt-8">
          <div className="flex items-center space-x-3">
            <i className="fas fa-envelope text-indigo-400"></i>
            <p className="text-sm">aakash254631@gmail.com</p>
          </div>
          <div className="flex items-center space-x-3">
            <i className="fas fa-phone text-indigo-400"></i>
            <p className="text-sm">+91 8422725872</p>
          </div>
          <div className="flex items-center space-x-3">
            <i className="fas fa-calendar text-indigo-400"></i>
            <p className="text-sm">Nov 05, 2004</p>
          </div>
          <div className="flex items-center space-x-3">
            <i className="fas fa-map-marker-alt text-indigo-400"></i>
            <p className="text-sm">Mumbai, India</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="https://github.com/aakash-gupta02"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2a2a2a] hover:bg-indigo-600 transition-all duration-300 cursor-pointer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/aakash-gupta-5a337928b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2a2a2a] hover:bg-indigo-600 transition-all duration-300 cursor-pointer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.instagram.com/aakash.grafix"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2a2a2a] hover:bg-indigo-600 transition-all duration-300 cursor-pointer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://t.me/aakashgupta052004"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2a2a2a] hover:bg-indigo-600 transition-all duration-300 cursor-pointer"
          >
            <i className="fab fa-telegram"></i>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full md:ml-64 lg:ml-72 p-4 sm:p-6">

        {/* Navigation */}
        <div className="mb-8 sticky top-0 z-10 bg-[#1f1f1f] py-4 border-b border-[#333333] overflow-x-auto">
          <div className="flex space-x-4 md:space-x-6 w-max min-w-full px-4 sm:px-0">
            <button
              onClick={() => setActiveTab("about")}
              className={`px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === "about"
                  ? "text-indigo-400 border-b-2 border-indigo-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab("resume")}
              className={`px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === "resume"
                  ? "text-indigo-400 border-b-2 border-indigo-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Resume
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === "projects"
                  ? "text-indigo-400 border-b-2 border-indigo-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("github")}
              className={`px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === "github"
                  ? "text-indigo-400 border-b-2 border-indigo-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Github
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === "contact"
                  ? "text-indigo-400 border-b-2 border-indigo-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Contact
            </button>
          </div>
        </div>

        {renderContent()}

        <Footer />
      </div>

      {/* Floating Hire Me Button */}
      <button className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center transition-all duration-300 cursor-pointer">
        <i className="fas fa-paper-plane mr-2"></i>
        Hire Me
      </button>
    </div>
  );

};

export default Portfolio;
