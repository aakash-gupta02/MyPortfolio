import React, { useEffect, useState } from "react";
import { FiEye, FiGithub, FiExternalLink, FiX } from "react-icons/fi";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
 window.scrollTo(0,0)

  }, [])
  

  const projects = [
    {
      title: "Phone Price Comparison App",
      category: "mern",
      image:
        "https://cdn.dribbble.com/userupload/39630429/file/original-c5b7dad6cbb12b0deb5b19640e3c0c05.jpg?format=webp&resize=400x300&vertical=center",
      description:
        "A full-stack application that compares phone prices across multiple retailers with user accounts and wishlist functionality.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "#",
      liveLink: "#",
    },
        {
      title: "Your Docs - AI",
      category: "mern",
      image:
        "https://cdn.dribbble.com/userupload/39630429/file/original-c5b7dad6cbb12b0deb5b19640e3c0c05.jpg?format=webp&resize=400x300&vertical=center",
      description:
        "An AI Impowered Docs Application that stores docs efficently with AI, It can Summarize, Improve the Docs, Plan things on your Behalf.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Gemini"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "MERN Blog Platform",
      category: "mern",
      image:
        "https://static.wixstatic.com/media/0784b1_1d0aba6b9f0b4610a08cd3e9c8e62ce4~mv2.jpg/v1/fill/w_1200,h_628,al_c/0784b1_1d0aba6b9f0b4610a08cd3e9c8e62ce4~mv2.jpg",
      description:
        "Feature-rich blogging platform with markdown support, user authentication, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      githubLink: "#",
      liveLink: "#",
    },

    // ... other projects with added details
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            onClick={() => setSelectedProject(project)}
            className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2"> {project.title} </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.githubLink}
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <i className="fab fa-github mr-2"></i>Code
                </a>
                <a
                  href={project.liveLink}
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80  z-50 flex items-center justify-center p-4">
          <div
            className="bg-[#222222] rounded-xl max-w-6xl w-full max-h-[120vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#2a2a2a] hover:bg-gray-700 transition-colors"
            >
              <FiX className="text-xl" />
            </button>

            {/* Modal Content */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project Image */}
              <div className="md:sticky md:top-0 h-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-80 md:h-full object-cover bg-[#2a2a2a] rounded-t-xl md:rounded-l-xl md:rounded-tr-none transition-transform duration-500 hover:scale-110 "
                />
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="mb-6">
                  <span className="text-sm px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-300 inline-block mb-3">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-300">{selectedProject.description}</p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 rounded-full bg-[#2a2a2a] text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-[#161613] hover:bg-indigo-600 rounded-lg transition-colors"
                    >
                      <FiGithub className="text-lg" />
                      View Code
                    </a>
                  )}
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
                    >
                      <FiExternalLink className="text-lg" />
                      Live Demo
                    </a>
                  )}
                </div>
                {/* 
                <div className=" flex  gap-2 my-5 ">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-80 md:h-full object-cover bg-[#2a2a2a] rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                  />
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-100 md:h-fit object-cover bg-[#2a2a2a] rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                  />{" "}
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-80 md:h-full object-cover bg-[#2a2a2a] rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
