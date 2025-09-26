import React from 'react';
import { Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  const projects = [
    {
      title: "Tumor Classifier",
      period: "Aug. 2025",
      description: "Brain tumor classifier using PyTorch and ResNet-18 transfer learning on MRI images achieving 97.9% accuracy across 4 tumor types. Implemented data augmentation, learning rate scheduling, and early stopping.",
      highlights: [
        "Evaluation system with separate test sets and performance breakdowns per tumor type",
        "F1-scores: 96.5%-99.4% across all categories (glioma, meningioma, pituitary, healthy)",
        "Data augmentation pipeline: rotation, flipping, brightness adjustments for robustness",
        "Learning rate scheduling and early stopping for optimal training convergence"
      ],
      techStack: ["PyTorch", "ResNet-18", "scikit-learn", "NumPy", "OpenCV", "Matplotlib"],
      github: "https://github.com/zak-510/bt-mri"
    },
    {
      title: "xView2 Building Damage Assessment",
      period: "Jul. 2025",
      description: "Automated building damage assessment from Maxar satellite imagery using PyTorch, processing 850K+ buildings across 15 countries and 6 disaster types.",
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
      description: "Full-stack sports analytics platform serving 150+ athletes across NBA, NFL, and MLB. Built with React (8 components, 4 pages) and Express.js REST API.",
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
      className={`page bg-transparent py-20 smooth-scroll-animate ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono text-white mb-4 cursor-default text-center sm:text-left">
              Featured Projects
            </h2>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => {
              return (
                <div key={index} className="grid md:grid-cols-4 gap-x-6 border-b border-white/10 pb-12 md:border-none md:pb-0 last:border-none last:pb-0">
                  {/* Period */}
                  <div className="md:col-span-1 mb-4 md:mb-0">
                    <p className="text-sm text-gray-400 font-mono">{project.period}</p>
                  </div>

                  {/* Details */}
                  <div className="md:col-span-3">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-medium text-white">
                        {project.title}
                      </h3>
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed font-light mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs text-gray-400 border border-white/20 bg-white/5 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
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
