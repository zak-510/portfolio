import React, { useState, useEffect } from 'react';
import { Github, Linkedin, MapPin, Mail, Phone, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = "Regents' & Chancellor's Scholar at UC Berkeley studying Data Science.\nAspiring AI/ML and Software Engineer for social impact, equitable resource access, and healthcare.";
  
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
                    src="/IMG_7517.png" 
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono text-white mb-4 cursor-pointer hover:opacity-80 transition-opacity break-words" style={{opacity: 1, transform: 'none'}}>
              Zakaria Al-Alie
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-3 flex-grow leading-relaxed min-h-[3.5rem] md:min-h-[4rem] font-jetbrains">
              {typewriterText.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < typewriterText.split('\n').length - 1 && <br />}
                </span>
              ))}
              <span className="animate-pulse">|</span>
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-300 font-jetbrains">
              <MapPin size={18} />
              <span>Berkeley, CA</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-8 text-sm text-gray-300 font-jetbrains">
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
              className="group p-4 rounded-full transition-all duration-300 hover:scale-110 text-gray-300 opacity-60 hover:opacity-100 hover:text-white"
            >
              <Github size={24} className="transition-transform group-hover:rotate-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/zakaria-al-alie-82a43b354/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full transition-all duration-300 hover:scale-110 text-gray-300 opacity-60 hover:opacity-100 hover:text-blue-400"
            >
              <Linkedin size={24} className="transition-transform group-hover:rotate-12" />
            </a>
            <a
              href="https://instagram.com/510.zh"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full transition-all duration-300 hover:scale-110 text-gray-300 opacity-60 hover:opacity-100 hover:text-pink-400"
            >
              <Instagram size={24} className="transition-transform group-hover:rotate-12" />
            </a>
            <a
              href="https://leetcode.com/u/zak510/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full transition-all duration-300 hover:scale-110 text-gray-300 opacity-60 hover:opacity-100 hover:text-yellow-400"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="transition-transform group-hover:rotate-12">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z"/>
              </svg>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md mx-auto">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg text-sm sm:text-base font-jetbrains-medium hover:from-blue-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              <span>Let's Connect!</span>
            </button>
            <a
              href="/Zakaria_Al-Alie_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg text-sm sm:text-base font-jetbrains-medium hover:from-blue-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              <span>View Resume</span>
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-300 hover:text-white transition-colors group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white animate-bounce group-hover:text-yellow-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;