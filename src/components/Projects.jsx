import React, { useState, useEffect } from "react";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
import { projects } from "../assets/ProjectsArray";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  return (
    <div className="space-y-8 p-4 md:p-1">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-indigo-600 text-white"
                : "bg-[#2a2a2a] text-gray-300 hover:bg-[#3a3a3a]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects
          .filter(
            (project) =>
              selectedCategory === "All" ||
              project.category === selectedCategory
          )
          .map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-sm px-2 py-1 rounded bg-indigo-600 text-white">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

           <div className="flex space-x-4">
  {project.githubLink && (
    <a
      href={project.githubLink}
      onClick={(e) => e.stopPropagation()}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center px-3 py-1.5 rounded-md bg-indigo-900/30 hover:bg-indigo-900/50 border border-indigo-400/30 hover:border-indigo-400/50 text-indigo-300 hover:text-white transition-all duration-200 group"
    >
      <FiGithub className="mr-2 group-hover:scale-110 transition-transform" />
      <span className="text-sm font-medium">Code</span>
    </a>
  )}
  {project.liveLink && (
    <a
      href={project.liveLink}
      onClick={(e) => e.stopPropagation()}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center px-3 py-1.5 rounded-md bg-emerald-900/20 hover:bg-emerald-900/40 border border-emerald-400/30 hover:border-emerald-400/50 text-emerald-300 hover:text-white transition-all duration-200 group"
    >
      <FiExternalLink className="mr-2 group-hover:scale-110 transition-transform" />
      <span className="text-sm font-medium">Live Demo</span>
    </a>
  )}
</div>


              </div>
            </div>
          ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div
            className="bg-[#1e1e1e] rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl border border-[#333]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors z-10"
            >
              <FiX className="text-xl" />
            </button>

            {/* Modal Content */}
            <div className="grid md:grid-cols-2 gap-0">
              {/* Project Gallery (Left Side) */}
              <div className="relative h-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[60vh] object-cover sticky top-0"
                />
                {/* Additional Images (if any) */}
                {selectedProject.images?.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 p-4 bg-[#2a2a2a]">
                    {selectedProject.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Screenshot ${i + 1}`}
                        className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() =>
                          setSelectedProject({ ...selectedProject, image: img })
                        }
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Project Details (Right Side) */}
              <div className="p-8">
                <div className="mb-6">
                  <span className="text-sm px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-300 inline-block mb-3">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3 text-white">
                    Built With
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-[#2a2a2a] text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                {selectedProject.features && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-white">
                      Key Features
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-[#161613] hover:bg-indigo-600 rounded-lg transition-colors text-sm font-medium"
                    >
                      <FiGithub />
                      View Code
                    </a>
                  )}
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors text-sm font-medium"
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                  )}
                </div>



              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
