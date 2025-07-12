import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Apply dark mode class permanently to document
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
  }, []);

  useEffect(() => {
    // Close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest('header')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen relative">
      {/* Shooting Stars Background */}
      <div className="shooting-stars-bg">
        {/* Twinkling stars layer */}
        <div className="stars"></div>
        
        {/* Multiple shooting stars with different trajectories */}
        <div className="shooting-star" style={{ width: '300px' }}></div>
        <div className="shooting-star" style={{ width: '250px' }}></div>
        <div className="shooting-star" style={{ width: '400px' }}></div>
        <div className="shooting-star" style={{ width: '350px' }}></div>
        <div className="shooting-star" style={{ width: '200px' }}></div>
        <div className="shooting-star" style={{ width: '450px' }}></div>
        <div className="shooting-star" style={{ width: '320px' }}></div>
        <div className="shooting-star" style={{ width: '280px' }}></div>
      </div>
      
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main className="pt-16 relative z-10">
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;