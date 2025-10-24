import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Questions? Contact us.',
      links: []
    },
    {
      title: '',
      links: [
        'FAQ',
        'Investor Relations',
        'Ways to Watch',
        'Corporate Information',
        'Legal Notices'
      ]
    },
    {
      title: '',
      links: [
        'Help Centre',
        'Jobs',
        'Terms of Use',
        'Contact Us',
        'Only on Netflix'
      ]
    },
    {
      title: '',
      links: [
        'Account',
        'Redeem gift cards',
        'Privacy',
        'Speed Test',
        'Advert choices'
      ]
    },
    {
      title: '',
      links: [
        'Media Centre',
        'Buy gift cards',
        'Cookie Preferences',
        'Legal Guarantee'
      ]
    }
  ];

  return (
    <footer className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <a href="#" className="text-gray-400 underline hover:no-underline">
            Questions? Contact us.
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="space-y-3">
            <a href="#" className="block text-gray-400 text-sm underline hover:no-underline">FAQ</a>
            <a href="#" className="block text-gray-400 text-sm underline hover:no-underline">Investor Relations</a>
            <a href="#" className="block text-gray-400 text-sm underline hover:no-underline">Ways to Watch</a>
            <a href="#" className="block text-gray-400 text-sm underline hover:no-underline">Corporate Information</a>
            <a href="#" className="block text-gray-400 text-sm underline hover:no-underline">Legal Notices</a>
          </div>
          
          <div className="space-y-3">
            <a href="#" className="block text-gray-400 text-sm underline hover:no-underline">Help Centre</a>
            <a href="#" className="block text-gray-400 text-sm underline hover:no-underline">Jobs</a>
            <a href="#" className="block text-gray-400 text-sm underline hover:no-underline">Terms of Use</a>
            <a href="#" className="block text-gray-400 text-sm underline hover:no-underline">Contact Us</a>
            <a href="#" className="block text-gray-400 text-sm underline hover:no-underline">Only on Netflix</a>
          </div>
          
          <div className="space-y-3">
            <a href="#" className="block text-gray-400 text-sm underline hover:no-underline">Account</a>
            <a href="#" className="block text-gray-400 text-sm underline hover:no-underline">Redeem gift cards</a>
            <a href="#" className="block text-gray-400 text-sm underline hover:no-underline">Privacy</a>
            <a href="#" className="block text-gray-400 text-sm underline hover:no-underline">Speed Test</a>
            <a href="#" className="block text-gray-400 text-sm underline hover:no-underline">Advert choices</a>
          </div>
          
          <div className="space-y-3">
            <a href="#" className="block text-gray-400 text-sm underline hover:no-underline">Media Centre</a>
            <a href="#" className="block text-gray-400 text-sm underline hover:no-underline">Buy gift cards</a>
            <a href="#" className="block text-gray-400 text-sm underline hover:no-underline">Cookie Preferences</a>
            <a href="#" className="block text-gray-400 text-sm underline hover:no-underline">Legal Guarantee</a>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="relative inline-block">
            <select className="language-select appearance-none bg-transparent border border-gray-400 rounded px-8 py-2 pr-10 text-white text-sm focus:outline-none focus:border-white">
              <option value="en" className="bg-black">English</option>
              <option value="sv" className="bg-black">Svenska</option>
            </select>
            <Globe className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
          </div>
        </div>
        
        <div className="text-gray-400 text-sm space-y-2">
          <p>Netflix Sweden</p>
          <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className="text-blue-500 underline hover:no-underline">Learn more.</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;