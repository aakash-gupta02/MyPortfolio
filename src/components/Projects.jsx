import React from 'react'

const Projects = () => {
  return (
    <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20ecommerce%20website%20interface%20with%20dark%20theme%20showing%20product%20grid%20and%20shopping%20cart%2C%20professional%20UI%20design%20with%20clean%20layout%20and%20minimal%20style&width=600&height=400&seq=2&orientation=landscape"
                  alt="E-Commerce Platform"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    E-Commerce Platform
                  </h3>
                  <p className="text-gray-300 mb-4">
                    A full-featured online store with product catalog, user
                    authentication, shopping cart, and secure payment
                    processing.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      MongoDB
                    </span>
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      Stripe
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <i className="fab fa-github mr-2"></i>Code
                    </a>
                    <a
                      href="#"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=task%20management%20dashboard%20interface%20with%20dark%20theme%20showing%20kanban%20board%20and%20team%20collaboration%20features%2C%20professional%20UI%20design%20with%20clean%20layout%20and%20minimal%20style&width=600&height=400&seq=3&orientation=landscape"
                  alt="Task Management App"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Task Management App
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Real-time collaborative task management with drag-and-drop
                    interface, notifications, and team permissions.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      Express
                    </span>
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      Socket.io
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <i className="fab fa-github mr-2"></i>Code
                    </a>
                    <a
                      href="#"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=weather%20dashboard%20interface%20with%20dark%20theme%20showing%20weather%20data%20visualization%20and%20forecast%20charts%2C%20professional%20UI%20design%20with%20clean%20layout%20and%20minimal%20style&width=600&height=400&seq=4&orientation=landscape"
                  alt="Weather Dashboard"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Weather Dashboard</h3>
                  <p className="text-gray-300 mb-4">
                    Interactive weather application with location search, 7-day
                    forecasts, and data visualization.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      Chart.js
                    </span>
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      API
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <i className="fab fa-github mr-2"></i>Code
                    </a>
                    <a
                      href="#"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>  )
}

export default Projects