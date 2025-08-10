import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
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
            <p className="text-lg text-gray-200 mb-8 flex-grow leading-relaxed max-w-2xl mx-auto font-jetbrains">
              I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi, my inbox is always open.
            </p>
            
            {/* Say Hello Button */}
            <button
              onClick={handleEmailClick}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg text-lg font-jetbrains-medium text-white hover:from-blue-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg mb-3"
            >
              Say Hello
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/zakaria-al-alie-82a43b354/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-blue-500/10 opacity-60 hover:opacity-100"
            >
              <Linkedin size={28} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/zak-510"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-gray-500/10 opacity-60 hover:opacity-100"
            >
              <Github size={28} className="text-gray-300 group-hover:text-white transition-colors" />
            </a>

            {/* Email */}
            <button
              onClick={handleEmailClick}
              className="group p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-yellow-500/10 opacity-60 hover:opacity-100"
            >
              <Mail size={28} className="text-gray-300 group-hover:text-yellow-400 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;