import React from 'react';
import { Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  const projects = [
    {
      title: "NeurIPS 2025 Open Polymer Challenge",
      period: "Oct. 2025",
      description: [
        "Built multi-task transformer model (ChemBERTa, 77M parameters) to predict 5 polymer properties (Tg, Tc, Density, Rg, FFV) from SMILES molecular structures",
        "Achieved R2 = 0.535 & RMSE = 19.53, a 29% improvement over baseline on sparse data (94% missing labels)",
        "Applied transfer learning from 77M-molecule pretraining with masked loss functions for multi-task regression",
        "Implemented SMILES augmentation (2–3× data expansion) and mixed-precision training (FP16) for improved model efficiency"
      ],
      techStack: ["PyTorch", "Transformers", "RDKit", "ChemBERTa"],
      github: "https://github.com/zak-510/neurips-polymer-prediction"
    },
    {
      title: "Neuroimaging for Tumor Diagnosis",
      period: "Jul. 2025",
      description: [
        "Used PyTorch ResNet-18 transfer learning on MRI images, achieving 97.9% accuracy across 4 tumor types",
        "Achieved F1-scores of 96.5%-99.4% across all categories (glioma, meningioma, pituitary, no_tumor)",
        "Implemented data augmentation with rotation, flipping, and brightness adjustments along with learning rate scheduling and early stopping"
      ],
      techStack: ["PyTorch", "torchvision", "ResNet-18", "scikit-learn", "NumPy", "OpenCV", "Matplotlib"],
      github: "https://github.com/zak-510/bt-mri"
    },
    {
      title: "xView2: Building Damage Assessment",
      period: "Apr. 2025",
      description: [
        "Automated building damage assessment on 850K+ buildings across 15 countries using PyTorch",
        "Built U-Net for localization, CNN for four damage levels (undamaged, minor, major, destroyed)",
        "Achieved 84.4% weighted F1 (92% undamaged, 72% destroyed)",
        "Created CUDA-accelerated inference with precision/recall reporting and visualizations"
      ],
      techStack: ["PyTorch", "OpenCV", "NumPy", "pandas", "Matplotlib", "CUDA"],
      github: "https://github.com/zak-510/disaster-classifier"
    },
    {
      title: "BerkeleyBets",
      period: "Jun. 2025",
      description: [
        "Built full-stack sports analytics platform with 150+ NBA, NFL, MLB athletes using React (8 components, 4 pages) and Express.js backend",
        "Modeled 15K+ samples from 1,419 player-seasons using position-specific Random Forest with temporal validation",
        "Implemented real-time player lookup with Fuse.js fuzzy search and predictive analytics dashboard"
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
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                    
                    <ul className="text-gray-300 text-sm leading-relaxed font-light mb-4 space-y-2">
                      {project.description.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 text-gray-500">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

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
