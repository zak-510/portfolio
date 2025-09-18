import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = [
    "Full-stack Developer",
    "AI & ML Enthusiast", 
    "Let's Connect!"
  ]
  
  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timer = setInterval(() => {
      if (!isDeleting) {
        // Typing
        if (index < currentPhrase.length) {
          setTypewriterText(currentPhrase.slice(0, index + 1));
          index++;
        } else {
          // Pause before deleting
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }
      } else {
        // Deleting
        if (index > 0) {
          setTypewriterText(currentPhrase.slice(0, index - 1));
          index--;
        } else {
          // Move to next phrase
          isDeleting = false;
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 75 : 150);

    return () => clearInterval(timer);
  }, [currentPhraseIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting and Name */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4">
              Hi, I am <span className="text-red-500 font-medium">Zakaria</span>
            </h1>
          </div>

          {/* Subtitle with typewriter */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              {typewriterText}<span className="animate-pulse text-red-500">|</span>
            </h2>
          </div>

          {/* Description */}
          <div className="mb-16 max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light text-center">
              Regents' and Chancellor's Scholar at UC Berkeley studying Data Science. 
              Aspiring AI/ML and software engineering for social impact, robotics, and healthcare.
            </p>
          </div>


          {/* Social Links - Transparent Icons */}
          <div className="flex justify-center space-x-3 sm:space-x-4 mb-12 sm:mb-16">
            <a
              href="https://instagram.com/510.zh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://github.com/zak-510"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/zakaria-al-alie-82a43b354/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://leetcode.com/u/zak510/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:scale-110 transition-all duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z"/>
              </svg>
            </a>
            <a
              href="mailto:zakaria.al-alie@berkeley.edu"
              className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-red-400 hover:scale-110 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="flex justify-center">
            <button
              onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white hover:text-red-500 transition-colors group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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