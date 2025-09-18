import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const Skills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSkills, setShowSkills] = useState(false);

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
      ]
    },
    {
      title: "Libraries/Frameworks",
      skills: [
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "OpenCV", logo: "https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_black_.png" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "Matplotlib", logo: "https://matplotlib.org/stable/_images/sphx_glr_logos2_003.png" }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "REST APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Jupyter Notebook", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        { name: "Google Colab", logo: "https://colab.research.google.com/img/colab_favicon_256px.png" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "NoSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
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
    <section id="skills" className="py-12 bg-transparent">
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
                  className="tech-logo-container flex-shrink-0 w-20 h-20 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 p-2"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-14 h-14 object-contain relative z-10"
                    title={tech.name}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Skills Overlay Modal */}
      {showSkills && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-6">
          {/* Starry background for modal */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="stars-layer opacity-30"></div>
            <div className="stars-layer opacity-20"></div>
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="particle opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${Math.random() * 4 + 4}s`,
                }}
              />
            ))}
          </div>
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl max-w-5xl w-full max-h-[80vh] overflow-y-auto relative animate-fade-in">
            {/* Close Button */}
            <button
              onClick={() => setShowSkills(false)}
              className="absolute top-4 right-4 z-10 p-2 border-2 border-red-500 text-white hover:bg-red-500 hover:text-white rounded-lg transition-all duration-300"
            >
              <X size={24} />
            </button>

            <div className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Technologies
                </h3>
              </div>

              {/* Search Bar */}
              <div className="relative mb-6 max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>

              {/* Skills Categories */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCategories.map((category, categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className="glass rounded-xl p-4 hover:scale-[1.02] transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold text-white mb-4">
                      {category.title}
                    </h4>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex items-center p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                        >
                          <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center p-1 mr-3">
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-white text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {searchTerm && filteredCategories.length === 0 && (
                <div className="text-center py-6">
                  <p className="text-gray-400 text-lg">
                    No skills found matching "{searchTerm}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;