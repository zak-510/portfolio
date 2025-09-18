import React from 'react';
import { Github, Calendar, TrendingUp, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  const projects = [
    {
      title: "Tumor Classifier",
      period: "Aug. 2025",
      description: "Brain tumor classifier using PyTorch and ResNet-18 transfer learning on MRI images achieving 97.9% accuracy across 4 tumor types. Implemented end-to-end pipeline with data augmentation, learning rate scheduling, and early stopping.",
      highlights: [
        "Evaluation system with separate test sets and performance breakdowns per tumor type",
        "F1-scores: 96.5%-99.4% across all categories (glioma, meningioma, pituitary, healthy)",
        "Data augmentation pipeline: rotation, flipping, brightness adjustments for robustness",
        "Learning rate scheduling and early stopping for optimal training convergence"
      ],
      techStack: ["PyTorch", "ResNet-18", "Transfer Learning", "Medical Imaging", "Data Augmentation", "Early Stopping", "Learning Rate Scheduling"],
      github: "https://github.com/zak-510/bt-mri"
    },
    {
      title: "xView2 Building Damage Assessment",
      period: "Jul. 2025",
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
      title: "BerkeleyBets, CalHacks Hackathon",
      period: "Jun. 2025",
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
      className={`py-20 bg-transparent smooth-scroll-animate ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono text-white mb-4 cursor-pointer hover:opacity-80 transition-opacity">
              Featured Projects
            </h2>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => {
              return (
                <div
                  key={index}
                  className="group relative pl-8 py-6 transition-all duration-300 hover:translate-x-2"
                >
                  {/* White accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-white"></div>
                  
                  <div className="space-y-4">
                    {/* Header with title and links */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-medium mb-1 text-white">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3">
                          {project.period}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg transition-all hover:scale-110 text-gray-400 hover:text-white hover:bg-gray-800/50"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg transition-all hover:scale-110 text-gray-400 hover:text-white hover:bg-gray-800/50"
                        >
                          <Github size={16} />
                        </a>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      {/* Key highlights */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-300 mb-2">Key Highlights</h4>
                        <ul className="space-y-1">
                          {project.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="text-xs text-gray-400 flex items-start">
                              <span className="text-white mr-2 mt-1">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Tech stack */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs text-gray-500 bg-gray-800/20 px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
