import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-background min-h-screen flex items-center justify-center relative">
      <div className="text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Unlimited films,<br />
          series and more
        </h1>
        
        <p className="text-lg md:text-xl mb-4">
          Starts at 109 kr. Cancel at any time.
        </p>
        
        <p className="text-base md:text-lg mb-8">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-4 py-3 bg-black bg-opacity-70 border border-gray-400 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white min-w-0 w-full sm:w-auto"
          />
          <button className="get-started-btn px-6 py-3 rounded text-white font-medium flex items-center gap-2 whitespace-nowrap">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;