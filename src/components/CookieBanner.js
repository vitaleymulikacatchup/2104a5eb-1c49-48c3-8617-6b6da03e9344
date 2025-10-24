import React, { useState } from 'react';
import { X } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-white text-black p-4 z-50 border-b">
      <div className="max-w-7xl mx-auto flex items-start justify-between">
        <div className="flex-1 pr-4">
          <p className="text-sm leading-relaxed">
            Netflix and third parties use <strong>cookies and similar technologies</strong> on this website to collect information about your browsing activities, which we use to analyse your use of the website, personalise our services and customise our online advertisements. You can accept, reject, or personalise your choices by selecting 'Learn more'. Netflix supports the Digital Advertising Alliance Principles.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="text-sm text-gray-600 underline hover:no-underline">
              Learn more
            </button>
            <button className="bg-netflix-red text-white px-4 py-1 rounded text-sm font-medium hover:bg-red-700">
              Accept
            </button>
            <button className="border border-gray-400 px-4 py-1 rounded text-sm hover:border-gray-600">
              Reject
            </button>
          </div>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-600 hover:text-black flex-shrink-0"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;