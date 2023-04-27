// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 py-6">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-semibold">
            Your App Name
          </div>
          <nav className="space-x-4">
            <a
              href="#"
              className="text-white font-semibold hover:text-blue-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white font-semibold hover:text-blue-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-white font-semibold hover:text-blue-300"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white font-semibold hover:text-blue-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
