import React from 'react';
import { Github, Linkedin, Code, MapPin, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Tech Accent */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              {/* Floating code brackets with subtle animation */}
              <div className="flex items-center space-x-4 text-blue-400 opacity-80">
                <div className="text-4xl md:text-5xl font-mono animate-pulse">{'<'}</div>
                <div className="flex flex-col space-y-1">
                  <div className="h-0.5 w-16 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse delay-300"></div>
                  <div className="h-0.5 w-8 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse delay-700"></div>
                </div>
                <div className="text-4xl md:text-5xl font-mono animate-pulse delay-500">{'/>'}</div>
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 blur-lg opacity-30">
                <div className="flex items-center justify-center space-x-4 text-blue-400">
                  <div className="text-4xl md:text-5xl font-mono">{'<'}</div>
                  <div className="w-16 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded"></div>
                  <div className="text-4xl md:text-5xl font-mono">{'/>'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Zakaria Al-Alie
            </h1>
            <p className="text-lg md:text-xl mb-3 leading-relaxed text-gray-300">
              Regents' & Chancellor's Scholar at UC Berkeley studying Data Science.<br />
              Aspiring ML/AI and Software Engineer for healthcare and social impact.
            </p>
            <div className="flex items-center justify-center space-x-2 text-base text-gray-400">
              <MapPin size={18} />
              <span>Oakland, CA</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-8 text-sm text-gray-400">
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
              className="group p-4 rounded-full transition-all duration-300 hover:scale-110 bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 hover:text-white"
            >
              <Github size={24} className="transition-transform group-hover:rotate-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/zakaria-al-alie-82a43b354/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full transition-all duration-300 hover:scale-110 bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 hover:text-white"
            >
              <Linkedin size={24} className="transition-transform group-hover:rotate-12" />
            </a>
            <a
              href="https://leetcode.com/u/zak510/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full transition-all duration-300 hover:scale-110 bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 hover:text-white"
            >
              <Code size={24} className="transition-transform group-hover:rotate-12" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md mx-auto transform translate-x-4">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
            >
              Let's Connect
            </button>
            <a
              href="/Zakaria_Al-Alie_Resume_Technical.pdf"
              download="Zakaria_Al-Alie_Resume_Technical.pdf"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;