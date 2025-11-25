import React from 'react';
import { Github, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  const projects = [
    {
      title: "NeurIPS 2025 Open Polymer Challenge",
      period: "Oct. 2025",
      summary: "Fine-tuned a 77M-parameter ChemBERTa Transformer for polymer property prediction, significantly improving performance over baselines.",
      description: [
        "Fine-tuned a 77M-parameter ChemBERTa Transformer for 5 polymer properties (Tg, Tc, Density, Rg, FFV) on 94% sparse labels, improving weighted R² by 29% over single-task baselines",
        "Optimized training loop with mixed-precision and batch sizing, achieving 40% faster convergence",
        "Applied SMILES augmentation to expand training data by 3×, improving validation RMSE by 12%"
      ],
      techStack: ["PyTorch", "Transformers", "RDKit"],
      github: "https://github.com/zak-510/neurips-polymer-prediction"
    },
    {
      title: "xView2: Building Damage Assessment",
      period: "Jul. 2025",
      summary: "Scaled inference throughput 12× for building damage assessment using PyTorch and custom batching across 15 countries.",
      description: [
        "Scaled inference throughput 12× (900 → 12,000 tiles/hr) with fp16 and custom batching, processing 850K+ buildings across 15 countries",
        "Boosted critical “destroyed” detection recall from 70% → 86%, reducing life-critical false negatives by 40%",
        "Increased GPU utilization from 40% → 95% via optimized data pipelines and automated hyperparameter tuning"
      ],
      techStack: ["PyTorch", "OpenCV", "CUDA", "pandas"],
      github: "https://github.com/zak-510/disaster-classifier"
    },
    {
      title: "BerkeleyBets, CalHacks",
      period: "Jun. 2025",
      summary: "Built a real-time sports analytics platform with sub-300ms latency and high model accuracy using Random Forests.",
      description: [
        "Built real-time sports analytics predictions for NBA, NFL, and MLB with sub-300ms latency",
        "Boosted model accuracy to 72.8% R² (vs. 0.40 baseline) using position-specific Random Forests",
        "Cut player lookup latency by 85% with Fuse.js fuzzy search and a dynamic React dashboard"
      ],
      techStack: ["scikit-learn", "React", "Express.js"],
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

                    <p className="text-gray-300 text-sm leading-relaxed font-light mb-4">
                      {project.summary}
                    </p>
                    
                    <h4 className="text-gray-200 text-sm font-semibold mb-2">Key Highlights:</h4>
                    <ul className="text-gray-300 text-sm font-light mb-4 space-y-3">
                      {project.description.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight size={16} className="mr-3 mt-1 text-gray-400 flex-shrink-0" />
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
