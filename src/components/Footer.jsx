import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <blockquote className="text-xl italic mb-8 text-center">
            "Be the change that you want to see in the world."
          </blockquote>
          <p className="text-sm">© 2024 Nilesh Ranjan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}