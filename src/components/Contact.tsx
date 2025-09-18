import React from 'react';

import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Hello Zakaria!');
    const mailtoLink = `mailto:zakaria.al-alie@berkeley.edu?subject=${subject}`;
    window.location.href = mailtoLink;
  };

  return (
    <section 
      id="contact" 
      ref={elementRef}
      className={`py-20 bg-transparent smooth-scroll-animate ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono text-white mb-4 cursor-pointer hover:opacity-80 transition-opacity">
              Get in Touch
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light text-center mb-8 max-w-4xl mx-auto">
              I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi, my inbox is always open.
            </p>
            
            {/* Say Hello Button */}
            <button
              onClick={handleEmailClick}
              className="inline-flex items-center px-8 py-4 border-2 border-red-500 text-white hover:bg-red-500 hover:text-white rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg mb-3"
            >
              Say Hello
            </button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;