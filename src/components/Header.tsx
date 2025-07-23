import React from 'react';
import { Github, Linkedin, Code, Menu, X, Instagram } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b bg-black/10 border-white/10 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between relative">
          {/* Left side - Logo/Brand (empty for now) */}
          <div className="flex-1 md:flex-none">
            {/* This space can be used for a logo later */}
          </div>

          {/* Center - Desktop Navigation (Absolutely positioned for perfect centering) */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection('education')}
              className="hover:text-yellow-400 transition-colors font-medium text-gray-300 focus:outline-none"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('awards')}
              className="hover:text-yellow-400 transition-colors font-medium text-gray-300 focus:outline-none"
            >
              Awards
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="hover:text-yellow-400 transition-colors font-medium text-gray-300 focus:outline-none"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-yellow-400 transition-colors font-medium text-gray-300 focus:outline-none"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-yellow-400 transition-colors font-medium text-gray-300 focus:outline-none"
            >
              Contact
            </button>
          </nav>

          {/* Right side - Social Links */}
          <div className="flex items-center space-x-4 flex-1 md:flex-none justify-end">
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href="https://github.com/zak-510"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/zakaria-al-alie-82a43b354/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/510.zh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://leetcode.com/u/zak510/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Code size={20} />
              </a>
            </div>

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
              className="md:hidden p-3 min-w-[44px] min-h-[44px] rounded-full transition-all text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none active:bg-gray-600 touch-manipulation flex items-center justify-center"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-700 transition-all duration-300">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('education')}
                className="text-left hover:text-yellow-400 transition-colors text-gray-300 focus:outline-none"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('awards')}
                className="text-left hover:text-yellow-400 transition-colors text-gray-300 focus:outline-none"
              >
                Awards
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left hover:text-yellow-400 transition-colors text-gray-300 focus:outline-none"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left hover:text-yellow-400 transition-colors text-gray-300 focus:outline-none"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left hover:text-yellow-400 transition-colors text-gray-300 focus:outline-none"
              >
                Contact
              </button>
            </nav>
            
            <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-gray-700">
              <a
                href="https://github.com/zak-510"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/zakaria-al-alie-82a43b354/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/510.zh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://leetcode.com/u/zak510/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Code size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;