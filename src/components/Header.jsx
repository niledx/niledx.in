import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
              Nilesh Ranjan
            </h1>
            <h2 className="text-lg text-gray-600 font-medium">
              SOFTWARE ENGINEER · FULLSTACK DEVELOPER (BACKEND)
            </h2>
          </div>
          
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-3 text-sm text-gray-600">
            <a href="mailto:nile.dx@gmail.com" 
               className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <EnvelopeIcon className="h-4 w-4" />
              nile.dx@gmail.com
            </a>
            <a href="tel:+919800953285" 
               className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <PhoneIcon className="h-4 w-4" />
              (+91) 9800953285
            </a>
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 flex-shrink-0" />
              <span>Marathalli, Bangalore</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}