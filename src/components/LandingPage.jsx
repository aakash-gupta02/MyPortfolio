import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm py-4 px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">BioLink</div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition">Testimonials</a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition">Pricing</a>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          Build Your Link in Bio <span className="text-indigo-600">with One Click</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          The ultimate solution for creators and professionals to showcase all their important links in one beautiful page.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition font-medium">
            Create Your Bio Now
          </button>
          <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50 transition font-medium">
            See How It Works
          </button>
        </div>
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-indigo-50 to-blue-50 p-1 rounded-xl">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
              BioLink Preview
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 md:px-12 lg:px-24 bg-indigo-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Powerful Features for Enhanced <span className="text-indigo-600">Personal Branding</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">AI-Powered Bio Theme Generator</h3>
              <p className="text-gray-600">
                Our AI creates stunning bio themes tailored to your personality and brand in seconds.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Seamless Social Media Integration</h3>
              <p className="text-gray-600">
                Connect all your social profiles and display them beautifully in one place.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Integrated Analytics Dashboard</h3>
              <p className="text-gray-600">
                Track your visitors and clicks with our powerful, data-driven analytics.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Profile Optimization Tools</h3>
              <p className="text-gray-600">
                Get expert recommendations to optimize your profile for maximum engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Digital Success Stories <span className="text-indigo-600">From Our Creators</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-indigo-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">Content Creator</p>
                </div>
              </div>
              <p className="text-gray-600">
                "BioLink helped me triple my Instagram traffic by consolidating all my links in one beautiful page. The analytics helped me understand my audience better!"
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-indigo-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Michael Chen</h4>
                  <p className="text-gray-500 text-sm">Entrepreneur</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As a business owner, having a professional link in bio was crucial. BioLink's AI theme generator created the perfect look that matches my brand identity."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Unlock the Power of AI</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Create your SmartBio now and take your personal branding to the next level.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-md hover:bg-indigo-50 transition font-medium">
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">BioLink</h3>
            <p className="text-gray-400">
              The ultimate link in bio solution for creators, entrepreneurs, and professionals.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Examples</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Tutorials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2023 BioLink. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;