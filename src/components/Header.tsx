import React from 'react';
import { Github, Linkedin, Menu, X, Instagram } from 'lucide-react';

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
                className="p-2 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/zakaria-al-alie-82a43b354/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/510.zh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://leetcode.com/u/zak510/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z"/>
                </svg>
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
                className="p-2 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/zakaria-al-alie-82a43b354/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/510.zh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://leetcode.com/u/zak510/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z"/>
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;