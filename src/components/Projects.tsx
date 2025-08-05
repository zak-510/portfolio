import React from 'react';
import { Github, Calendar, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  const projects = [
    {
      title: "xView2 Building Damage Assessment",
      period: "Apr. 2025 - June 2025",
      description: "Automated building damage assessment from Maxar satellite imagery using PyTorch, processing 850K+ buildings across 15 countries and 6 disaster types. Created a two-stage deep learning architecture achieving 84.4% weighted F1 with strong performance on critical categories.",
      highlights: [
        "U-Net building localization and CNN damage classifier",
        "84.4% weighted F1 score (92% F1 undamaged, 72% F1 destroyed)",
        "CUDA-supported inference with evaluation metrics",
        "Disaster visualizations for humanitarian response"
      ],
      techStack: ["PyTorch", "OpenCV", "NumPy", "pandas", "Matplotlib", "CUDA"],
      github: "https://github.com/zak-510/disaster-classifier"
    },
    {
      title: "BerkeleyBets",
      period: "CalHacks Hackathon, June 2025",
      description: "Full-stack sports analytics platform serving 150+ athletes across NBA, NFL, and MLB. Built with React (8 components, 4 pages) and Express.js REST API, processing extensive player data with advanced machine learning models.",
      highlights: [
        "Processed 15,000+ samples from 1,419 player-seasons (2023–2024) using position-specific Random Forest models",
        "Implemented temporal validation techniques to prevent overfitting in predictive models",
        "Real-time player lookup system with fuzzy search capabilities (Fuse.js) and dynamic routing",
        "Predictive analytics dashboard featuring live simulation betting and performance tracking"
      ],
      techStack: ["React", "Express.js", "Firebase", "scikit-learn", "Fuse.js", "React Router", "Random Forest"],
      github: "https://github.com/zak-510/BerkeleyBets"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={elementRef}
      className={`py-12 sm:py-16 lg:py-20 bg-transparent smooth-scroll-animate ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              Featured Projects
            </h2>
          </div>

          <div className="grid lg:grid-cols-1 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] glass"
              >
                <div className="lg:flex">
                  
                  <div className="w-full p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3 sm:gap-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <div className="flex space-x-3 self-start sm:self-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-600"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center mb-4 text-sm text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      <span>{project.period}</span>
                    </div>

                    <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {project.description}
                    </p>

                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Key Highlights</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="text-gray-300 flex items-start text-sm sm:text-base">
                            <TrendingUp size={14} className="text-blue-400 mr-2 sm:mr-3 mt-1 flex-shrink-0 sm:w-4 sm:h-4" />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-600 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;