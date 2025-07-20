import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const ConsultingLandingPage = () => {
  const [selectedService, setSelectedService] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const services = [
    'Web Development',
    'Digital Marketing',
    'Business Consulting',
    'SEO Optimization',
    'Brand Strategy',
    'Content Creation'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
    
      {/* 
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                WHY CHOOSE US
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Join <span className="text-blue-600">500+</span><br />
              companies<br />
              trusting us
            </h1>
            
            <button className="inline-flex items-center px-6 py-3 border-2 border-blue-400 text-gray-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors group">
              Get Started
              <ArrowUpRight className="ml-2 h-5 w-5 text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Right Side - Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-blue-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Get Free Consulting
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                  
                  {/* Custom Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-left text-white focus:outline-none focus:border-teal-400 transition-colors flex items-center justify-between"
                    >
                      <span className={selectedService ? 'text-white' : 'text-gray-400'}>
                        {selectedService || 'Select Services'}
                      </span>
                      <ChevronDown className={`h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-600 rounded-lg z-10">
                        {services.map((service, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              setSelectedService(service);
                              setIsDropdownOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left text-white hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg transition-colors"
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center group"
                >
                  Send Message
                  <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default ConsultingLandingPage;