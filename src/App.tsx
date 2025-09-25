import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Education from './components/Education';
import Awards from './components/Awards';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Apply dark mode class permanently to document
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
  }, []);

  return (
    <>
      <div className="min-h-screen relative">
        {/* Professional Background */}
        <div className="professional-bg"></div>
        
        <main className="relative z-10">
          <Hero />
          <Education />
          <Awards />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;