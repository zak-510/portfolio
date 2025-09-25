import React, { useState, useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typewriterText, setTypewriterText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = [
    "Data Science student",
    "AI & ML enthusiast",
    "Regents' and Chancellor's Scholar"
  ]
  
  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    });

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < 80; i++) {
        particles.push(createParticle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.fillStyle = `rgba(245, 245, 245, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

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
      {/* Canvas for particles */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1, pointerEvents: 'none' }}
      />
      
      <div className="container mx-auto px-4 hero-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative flex flex-col items-center">
            {/* Name - Centered with viewport-based sizing */}
            <div className="relative mb-2">
              {/* Greeting - Positioned above and aligned with the Z */}
              <div className="absolute -top-6 sm:-top-8" style={{ left: '4px' }}>
                <p className="text-sm sm:text-lg text-gray-300 font-light" style={{ fontFamily: 'Roboto Mono, monospace' }}>
                  Hi, I'm
                </p>
              </div>

              <h1 className="hero-name text-white font-mono">
                Zakaria Al-Alie
              </h1>

              {/* Typewriter - Positioned below right edge of name */}
              <div className="absolute -bottom-6 sm:-bottom-8 right-0">
                <p className="text-sm sm:text-lg md:text-xl text-gray-300 font-light" style={{ fontFamily: 'Roboto Mono, monospace' }}>
                  {typewriterText}<span className="animate-pulse text-white">|</span>
                </p>
              </div>

              {/* Resume Link - Positioned below typewriter */}
              <div className="absolute -bottom-12 sm:-bottom-16 right-0">
                <a 
                  href="/Zakaria_Al-Alie_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300 font-light"
                  style={{ fontFamily: 'Roboto Mono, monospace' }}
                >
                  View Resume →
                </a>
              </div>
            </div>
          </div>
          
          {/* Add spacing for the absolute positioned elements */}
          <div className="mb-32 h-8"></div>

          {/* Scroll Down Indicator - centered under name */}
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