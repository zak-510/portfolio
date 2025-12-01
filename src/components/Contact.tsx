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
      className={`page bg-transparent py-20 smooth-scroll-animate ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono text-white mb-4 cursor-pointer hover:opacity-80 transition-opacity">
              Get in Touch
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light text-center mb-8 max-w-2xl mx-auto">
              I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi, my inbox is always open.
            </p>
            
            {/* Say Hello Link */}
            <div className="flex flex-row flex-wrap gap-6 items-center justify-center w-full">
              <button
                onClick={handleEmailClick}
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300 font-light touch-manipulation"
                style={{ fontFamily: 'Roboto Mono, monospace' }}
              >
                Say Hello →
              </button>

              {/* Clash Royale Link */}
              <a
                href="https://link.clashroyale.com/invite/friend/en?tag=J0URGG2YY&token=abbkbg3t&platform=iOS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300 font-light touch-manipulation"
                style={{ fontFamily: 'Roboto Mono, monospace' }}
              >
                Clash Royale →
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;