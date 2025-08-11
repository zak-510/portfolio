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
          {/* Left side - Logo/Brand (empty for now) */}
          <div className="flex-1 md:flex-none">
            {/* This space can be used for a logo later */}
          </div>

          {/* Center - Desktop Navigation (Absolutely positioned for perfect centering) */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection('education')}
              className="hover:text-yellow-400 transition-colors font-jetbrains text-gray-200 focus:outline-none"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('awards')}
              className="hover:text-yellow-400 transition-colors font-jetbrains text-gray-200 focus:outline-none"
            >
              Awards
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="hover:text-yellow-400 transition-colors font-jetbrains text-gray-200 focus:outline-none"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-yellow-400 transition-colors font-jetbrains text-gray-200 focus:outline-none"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-yellow-400 transition-colors font-jetbrains text-gray-200 focus:outline-none"
            >
              Contact
            </button>
          </nav>

          {/* Right side - Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-1 lg:flex-none justify-end">
            {/* Mobile Menu Toggle */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Use requestAnimationFrame to ensure the state update happens
                requestAnimationFrame(() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                });
              }}
              className="md:hidden p-1.5 lg:p-3 min-w-[36px] min-h-[36px] lg:min-w-[44px] lg:min-h-[44px] rounded-full transition-all text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none active:bg-gray-600 touch-manipulation flex items-center justify-center"
            >
              {mobileMenuOpen ? <X size={18} className="lg:w-5 lg:h-5" /> : <Menu size={18} className="lg:w-5 lg:h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 lg:mt-6 lg:py-6 border-t border-gray-700 transition-all duration-300 bg-black/80 backdrop-blur-lg rounded-lg">
            <nav className="flex flex-col space-y-2 lg:space-y-4">
              <button
                onClick={() => scrollToSection('education')}
                className="text-left hover:text-yellow-400 transition-colors text-gray-200 focus:outline-none font-jetbrains"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('awards')}
                className="text-left hover:text-yellow-400 transition-colors text-gray-200 focus:outline-none font-jetbrains"
              >
                Awards
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left hover:text-yellow-400 transition-colors text-gray-200 focus:outline-none font-jetbrains"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left hover:text-yellow-400 transition-colors text-gray-200 focus:outline-none font-jetbrains"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left hover:text-yellow-400 transition-colors text-gray-200 focus:outline-none font-jetbrains"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;