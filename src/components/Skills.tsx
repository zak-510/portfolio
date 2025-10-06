import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Search, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [searchTerm, setSearchTerm] = useState('');
  const [showSkills, setShowSkills] = useState(false);

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      ]
    },
    {
      title: "Technologies",
      skills: [
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      ]
    }
  ];

  // Create a flattened array of all skills for the horizontal scroll
  const allSkills = skillCategories.flatMap(category => category.skills);
  const techLogos = allSkills.map(skill => ({
    name: skill.name,
    logo: skill.logo
  }));

  // Filter skills based on search term
  const filteredCategories = skillCategories.map(category => ({
    ...category,
    skills: category.skills.filter(skill =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.skills.length > 0);

  return (
    <section 
      id="skills" 
      ref={elementRef}
      className={`page py-12 bg-transparent smooth-scroll-animate ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono text-white mb-4 cursor-pointer hover:opacity-80 transition-opacity">
              Technical Skills
            </h2>
          </div>

          {/* Always visible horizontal flowing tech skills */}
          <div className="relative mb-8 overflow-hidden">
            <div className="flex space-x-4 animate-scroll-fast">
              {[...techLogos, ...techLogos].map((tech, index) => (
                <div
                  key={index}
                  className="tech-logo-container flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 p-2"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain relative z-10"
                    title={tech.name}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* View Stack Button */}
          <div className="text-center">
            <button
              onClick={() => setShowSkills(true)}
              className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300 font-light inline-block"
              style={{ fontFamily: 'Roboto Mono, monospace' }}
            >
              View Full Stack →
            </button>
          </div>
        </div>
      </div>

      {/* Skills Overlay Modal */}
      {showSkills && createPortal(
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[2000] font-mono">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto relative animate-fade-in glass">
            {/* Close Button */}
            <button
              onClick={() => setShowSkills(false)}
              className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  <span className="sm:hidden">Technical<br/>Stack</span>
                  <span className="hidden sm:inline">Technical Stack</span>
                </h3>
              </div>

              {/* Search Bar */}
              <div className="relative mb-8 max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-500" />
                </div>
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-10 py-3 bg-transparent border border-white/20 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>

              {/* Skills Categories */}
              <div className="space-y-6">
                {filteredCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h4 className="text-xl font-semibold text-white mb-4 border-b border-white/10 pb-2">
                      {category.title}
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                        >
                          <div className="w-8 h-8 flex items-center justify-center">
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              className="w-6 h-6 object-contain"
                            />
                          </div>
                          <span className="text-gray-300 text-sm">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {searchTerm && filteredCategories.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-gray-500 text-lg">
                    No skills found matching "{searchTerm}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Skills;