import React from 'react';
import { Github, Calendar, TrendingUp } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "xView2 Building Damage Assessment",
      period: "Apr. 2025 - Present",
      description: "Automated building damage assessment from Maxar satellite imagery using PyTorch, processing 850K+ buildings across 15 countries and 6 disaster types. Created a two-stage deep learning architecture achieving 94.4% weighted F1 with strong performance on critical categories.",
      highlights: [
        "U-Net building localization and CNN damage classifier",
        "94.4% weighted F1 score (92% F1 undamaged, 72% F1 destroyed)",
        "CUDA-supported inference with evaluation metrics",
        "Disaster visualizations for humanitarian response"
      ],
      techStack: ["PyTorch", "OpenCV", "NumPy", "pandas", "Matplotlib", "CUDA"],
      github: "https://github.com/zak-510/disaster-classifier"
    },
    {
      title: "BerkeleyBets",
      period: "June 2025",
      description: "Full-stack web application using React, Express.js, and Firebase for sports performance prediction and analytics across NBA, NFL, and MLB. Developed REST API backend integrated with scikit-learn ML models trained on multi-season player statistics.",
      highlights: [
        "Real-time player lookup with fuzzy search capabilities",
        "Dynamic routing with React Router",
        "Predictive analytics dashboard with performance tracking",
        "Multi-sport analytics across NBA, NFL, and MLB"
      ],
      techStack: ["React", "Express.js", "Firebase", "scikit-learn", "Fuse.js", "React Router", "Node.js"],
      github: "https://github.com/zak-510/BerkeleyBets"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Featured Projects
            </h2>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] bg-gray-800 hover:bg-gray-700"
              >
                <div className="lg:flex">
                  
                  <div className="w-full p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <div className="flex space-x-3">
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

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="text-gray-300 flex items-start">
                            <TrendingUp size={16} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors"
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