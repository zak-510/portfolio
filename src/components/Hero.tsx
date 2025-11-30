import React, { useState, useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = [
    "Data Science student",
    "AI & ML enthusiast",
    "Regents' and Chancellor's Scholar"
  ]
  
  // Typewriter effect
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
    }, isDeleting ? 50 : 100);

    return () => clearInterval(timer);
  }, [currentPhraseIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent page">
      
      <div className="container mx-auto px-4 hero-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative flex flex-col items-center">

            {/* --- MOBILE VIEW --- */}
            <div className="sm:hidden w-full flex flex-col items-center">
              <div className="relative inline-block">
                <p className="absolute text-sm text-gray-300 font-light" style={{ fontFamily: 'Roboto Mono, monospace', top: '-1.25rem', left: '0.25rem' }}>
                  Hi, I'm
                </p>
                <h1 className="hero-name text-white font-mono text-center">
                  Zakaria Al-Alie
                </h1>
                <div className="absolute w-max text-right" style={{ fontFamily: 'Roboto Mono, monospace', bottom: '-3.5rem', right: '0' }}>
                  <p className="text-sm text-gray-300 font-light">
                    {typewriterText}<span className="animate-pulse text-white">|</span>
                  </p>
                  <a
                    href="https://github.com/zak-510"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:text-white transition-colors duration-300 font-light inline-block mt-2"
                  >
                    View My Work →
                  </a>
                </div>
              </div>
            </div>

            {/* --- DESKTOP VIEW (Original Code) --- */}
            <div className="hidden sm:block">
              <div className="relative mb-2 flex flex-col items-center">
                <div className="sm:absolute sm:-top-8" style={{ left: '4px' }}>
                  <p className="text-sm sm:text-lg text-gray-300 font-light" style={{ fontFamily: 'Roboto Mono, monospace' }}>
                    Hi, I'm
                  </p>
                </div>
                <h1 className="hero-name text-white font-mono text-center sm:text-left">
                  Zakaria Al-Alie
                </h1>
                <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-16 w-full text-center sm:text-right">
                  <p className="text-sm sm:text-lg md:text-xl text-gray-300 font-light" style={{ fontFamily: 'Roboto Mono, monospace' }}>
                    {typewriterText}<span className="animate-pulse text-white">|</span>
                  </p>
                  <a
                    href="https://github.com/zak-510"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300 font-light inline-block mt-2"
                    style={{ fontFamily: 'Roboto Mono, monospace' }}
                  >
                    View My Work →
                  </a>
                </div>
              </div>
            </div>
            
          </div>
          
          <div className="mb-32 h-16 sm:h-8"></div>

          <div className="flex justify-center">
            <button
              onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white hover:text-gray-300 transition-colors group"
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