import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Code, MapPin, Mail, Phone, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = "Regents' & Chancellor's Scholar at UC Berkeley studying Data Science.\nAspiring AI/ML and Software Engineer for healthcare, environment sustainability, and social impact.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50); // Adjust speed here (lower = faster)

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              {/* Outer border with gradient background */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 gradient-border-blue-gold">
                <div className="w-full h-full rounded-full p-1 bg-black overflow-hidden">
                  <img 
                    src="/portfolio/IMG_7517.png" 
                    alt="Zakaria Al-Alie" 
                    className="w-full h-full rounded-full object-cover shadow-lg"
                  />
                </div>
              </div>
              {/* Subtle glow effect for profile picture */}
              <div className="absolute inset-0 rounded-full border-4 border-white opacity-20 blur-sm"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-white break-words" style={{opacity: 1, transform: 'none'}}>
              Zakaria Al-Alie
            </h1>
            <p className="text-lg md:text-xl mb-3 leading-relaxed text-gray-300 min-h-[3.5rem] md:min-h-[4rem]">
              {typewriterText.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < typewriterText.split('\n').length - 1 && <br />}
                </span>
              ))}
              <span className="animate-pulse">|</span>
            </p>
            <div className="flex items-center justify-center space-x-2 text-base text-gray-400">
              <MapPin size={18} />
              <span>Berkeley, CA</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>zakaria.al-alie@berkeley.edu</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>(510) 909-0553</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/zak-510"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full transition-all duration-300 hover:scale-110 bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 hover:text-white"
            >
              <Github size={24} className="transition-transform group-hover:rotate-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/zakaria-al-alie-82a43b354/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full transition-all duration-300 hover:scale-110 bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 hover:text-white"
            >
              <Linkedin size={24} className="transition-transform group-hover:rotate-12" />
            </a>
            <a
              href="https://instagram.com/510.zh"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full transition-all duration-300 hover:scale-110 bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 hover:text-white"
            >
              <Instagram size={24} className="transition-transform group-hover:rotate-12" />
            </a>
            <a
              href="https://leetcode.com/u/zak510/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full transition-all duration-300 hover:scale-110 bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 hover:text-white"
            >
              <Code size={24} className="transition-transform group-hover:rotate-12" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md mx-auto">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg text-sm sm:text-base font-medium hover:from-blue-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              <span>Let's Connect!</span>
            </button>
            <a
              href="/portfolio/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg text-sm sm:text-base font-medium hover:from-blue-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              <span>View Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;