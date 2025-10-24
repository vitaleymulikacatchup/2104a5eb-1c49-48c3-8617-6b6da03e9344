import React, { useState } from 'react';
import { Plus, ArrowRight } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    {
      question: 'What is Netflix?',
      answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV series, films and documentaries on thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price. There\'s always something new to discover, and new TV series and films are added every week!'
    },
    {
      question: 'How much does Netflix cost?',
      answer: 'Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one fixed monthly fee. Plans range from 109 kr to 179 kr a month. No extra costs, no contracts.'
    },
    {
      question: 'Where can I watch?',
      answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.'
    },
    {
      question: 'How do I cancel?',
      answer: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
    },
    {
      question: 'What can I watch on Netflix?',
      answer: 'Netflix has an extensive library of feature films, documentaries, TV series, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
    },
    {
      question: 'Is Netflix good for children?',
      answer: 'The Netflix experience is included in your membership to give parents control while children enjoy family-friendly TV series and films in their own space. Children\'s profiles come with PIN-protected parental controls that let you restrict the maturity rating of content children can watch and block specific titles you don\'t want children to see.'
    }
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleItem(index)}
                className="faq-button w-full bg-netflix-gray hover:bg-gray-600 p-6 text-left flex items-center justify-between text-lg md:text-xl font-medium"
              >
                <span>{item.question}</span>
                <Plus 
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openItem === index ? 'rotate-45' : ''
                  }`} 
                />
              </button>
              
              {openItem === index && (
                <div className="bg-netflix-gray p-6 text-lg leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg mb-6">
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
      </div>
    </section>
  );
};

export default FAQ;