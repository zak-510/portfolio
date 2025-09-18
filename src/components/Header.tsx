import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-safe border-b ${
      isScrolled 
        ? 'backdrop-blur-lg bg-black/10 border-white/10' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 lg:py-6">
        <div className="flex items-center justify-between relative">
          {/* Left side - Empty */}
          <div className="flex-1 md:flex-none">
            {/* Empty space */}
          </div>

          {/* Center - Desktop Navigation (Absolutely positioned for perfect centering) */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-red-500 transition-colors font-mono text-gray-300 focus:outline-none"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="hover:text-red-500 transition-colors font-mono text-gray-300 focus:outline-none"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('awards')}
              className="hover:text-red-500 transition-colors font-mono text-gray-300 focus:outline-none"
            >
              Awards
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="hover:text-red-500 transition-colors font-mono text-gray-300 focus:outline-none"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-red-500 transition-colors font-mono text-gray-300 focus:outline-none"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-red-500 transition-colors font-mono text-gray-300 focus:outline-none"
            >
              Contact
            </button>
          </nav>

          {/* Right side - Resume Button & Mobile Menu */}
          <div className="flex items-center space-x-4 flex-1 lg:flex-none justify-end">
            <a
              href="/Zakaria_Al-Alie_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block px-4 py-2 border-2 border-red-500 text-white hover:bg-red-500 hover:text-white rounded-lg transition-all duration-300 font-medium text-sm"
            >
              Resume
            </a>
            {/* Mobile Menu Toggle */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                requestAnimationFrame(() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                });
              }}
              className="md:hidden p-2 border-2 border-red-500 text-white hover:bg-red-500 hover:text-white rounded-lg transition-all duration-300 focus:outline-none flex items-center justify-center"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-6 border-t border-red-500/20 transition-all duration-300 bg-transparent backdrop-blur-sm">
            <nav className="flex flex-col space-y-6">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-left hover:text-red-500 transition-colors text-gray-300 focus:outline-none font-mono"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-left hover:text-red-500 transition-colors text-gray-300 focus:outline-none font-mono"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('awards')}
                className="text-left hover:text-red-500 transition-colors text-gray-300 focus:outline-none font-mono"
              >
                Awards
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left hover:text-red-500 transition-colors text-gray-300 focus:outline-none font-mono"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left hover:text-red-500 transition-colors text-gray-300 focus:outline-none font-mono"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left hover:text-red-500 transition-colors text-gray-300 focus:outline-none font-mono"
              >
                Contact
              </button>
              <a
                href="/Zakaria_Al-Alie_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left hover:text-red-500 transition-colors text-gray-300 focus:outline-none font-mono"
              >
                Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;