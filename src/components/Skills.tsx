import React, { useState } from 'react';
import { Search, X, Code2, ChevronDown, ChevronUp } from 'lucide-react';

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
    <section id="skills" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Technical Skills
            </h2>
          </div>

          {/* Always visible horizontal flowing tech skills */}
          <div className="relative mb-8 overflow-hidden">
            <div className="flex space-x-4 animate-scroll-fast">
              {[...techLogos, ...techLogos].map((tech, index) => (
                <div
                  key={index}
                  className="tech-logo-container flex-shrink-0 w-16 h-16 rounded-lg bg-gray-800 flex items-center justify-center shadow-md transform hover:scale-110 transition-transform duration-300 p-2"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-10 h-10 object-contain relative z-10"
                    title={tech.name}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* View Tech Button */}
          <div className="text-center mb-8">
            <button
              onClick={() => setShowSkills(!showSkills)}
              className="mx-auto flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg text-sm sm:text-base font-medium hover:from-blue-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Technologies</span>
            </button>
          </div>
        </div>
      </div>

      {/* Skills Overlay Modal */}
      {showSkills && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-6">
          <div className="bg-gray-900 rounded-xl max-w-5xl w-full max-h-[80vh] overflow-y-auto relative animate-fade-in">
            {/* Close Button */}
            <button
              onClick={() => setShowSkills(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-6">


              {/* Search Bar */}
              <div className="relative mb-6 max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search technologies..."
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