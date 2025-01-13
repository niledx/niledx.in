import React from 'react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-6 py-24 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Backend Developer
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            A motivated and confident Backend Developer with over 3 years of practical experience in building and deploying server-side applications and RESTful APIs.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/niledx" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              View GitHub
            </a>
            <a href="https://linkedin.com/in/niledx" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}