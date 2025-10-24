import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 md:py-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <h1 className="text-netflix-red text-2xl md:text-4xl font-bold tracking-tight">
            NETFLIX
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select className="language-select appearance-none bg-transparent border border-gray-400 rounded px-3 py-1 pr-8 text-white text-sm focus:outline-none focus:border-white">
              <option value="en" className="bg-black">English</option>
              <option value="sv" className="bg-black">Svenska</option>
            </select>
            <Globe className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
          </div>
          
          <button className="sign-in-btn px-4 py-1 rounded text-white text-sm font-medium">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;