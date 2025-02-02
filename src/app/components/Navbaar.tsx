import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-serif italic">
        JG Aesthetic Art
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-black hover:text-gray-600 font-medium">
          HOME
        </Link>
        <Link href="/services" className="text-gray-400 hover:text-gray-600 font-medium">
          SERVICES
        </Link>
        <Link href="/about" className="text-gray-400 hover:text-gray-600 font-medium">
          ABOUT US
        </Link>
        <div className="relative group">
          <Link href="/gallery" className="text-gray-400 hover:text-gray-600 font-medium flex items-center">
            GALLERY
            <svg 
              className="w-4 h-4 ml-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </Link>
        </div>
        <Link href="/testimonials" className="text-gray-400 hover:text-gray-600 font-medium">
          TESTIMONIALS
        </Link>
        <Link href="/contact" className="text-gray-400 hover:text-gray-600 font-medium">
          CONTACT US
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;