import React from 'react';
import { Download, Globe, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Enjoy on your TV',
      description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
      icon: Globe,
      image: '/images/tv-feature.png'
    },
    {
      title: 'Download your series to watch offline',
      description: 'Save your favourites easily and always have something to watch.',
      icon: Download,
      image: '/images/download-feature.png'
    },
    {
      title: 'Watch everywhere',
      description: 'Stream unlimited films and series on your phone, tablet, laptop and TV.',
      icon: Globe,
      image: '/images/devices-feature.png'
    },
    {
      title: 'Create profiles for children',
      description: 'Send children on adventures with their favourite characters in a space made just for them — free with your membership.',
      icon: Users,
      image: '/images/kids-feature.png'
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">More reasons to join</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-6 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{feature.description}</p>
                </div>
                
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="absolute inset-0 opacity-10">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;