import React from 'react';
import { Github, Calendar, TrendingUp, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  const projects = [
    {
      title: "Brain Tumor Classifier",
      period: "Aug. 2025",
      description: "Brain tumor classifier using PyTorch and ResNet-18 transfer learning on MRI images achieving 97.9% accuracy across 4 tumor types. Implemented end-to-end pipeline with data augmentation, learning rate scheduling, and early stopping.",
      highlights: [
        "Evaluation system with separate test sets and performance breakdowns per tumor type",
        "F1-scores: 96.5%-99.4% across all categories (glioma, meningioma, pituitary, healthy)",
        "Data augmentation pipeline: rotation, flipping, brightness adjustments for robustness",
        "Learning rate scheduling and early stopping for optimal training convergence"
      ],
      techStack: ["PyTorch", "ResNet-18", "Transfer Learning", "Medical Imaging", "Data Augmentation", "Early Stopping", "Learning Rate Scheduling"],
      github: "https://github.com/zak-510/brain-tumor-classifier"
    },
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
      title: "BerkeleyBets, CalHacks Hackathon",
      period: "June 2025",
      description: "Full-stack sports analytics platform serving 150+ athletes across NBA, NFL, and MLB. Built with React (8 components, 4 pages) and Express.js REST API, processing extensive player data with advanced machine learning models.",
      highlights: [
        "Processed 15,000+ samples from 1,419 player-seasons (2023–2024) using position-specific Random Forest models",
        "Implemented temporal validation techniques to prevent overfitting in predictive models",
        "Real-time player lookup system with fuzzy search capabilities (Fuse.js) and dynamic routing",
        "Predictive analytics dashboard featuring live simulation betting and performance tracking"
      ],
      techStack: ["React", "Express.js", "Firebase", "scikit-learn", "Fuse.js", "React Router", "Random Forest"],
      github: "https://github.com/zak-510/BerkeleyBets"
    },
    {
      title: "Candidate Recommendation Engine",
      period: "Aug. 2025",
      description: "Built an AI-powered resume screening tool that ranks candidates based on semantic similarity to job descriptions using NLP and sentence embeddings. Developed an interactive Streamlit web app that supports batch resume uploads, real-time candidate scoring, and AI-generated summaries.",
      highlights: [
        "Uses cosine similarity calculations via scikit-learn to get percentage match scores between candidate qualifications and job requirements",
        "Leverages the 24B parameter Mistral Small 3.1 model through OpenRouter API to generate personalized 2-3 sentence explanations of why each candidate fits the role",
        "Implemented PyMuPDF which extracts and processes text content from uploaded PDF resumes",
        "Integrated Hugging Face and transformer-based models MiniLM for the semantic matching engine"
      ],
      techStack: ["Streamlit", "Hugging Face", "MiniLM", "Sentence Transformers", "scikit-learn", "PyMuPDF", "OpenRouter API", "Mistral AI"],
      github: "https://github.com/zak-510/Candidate-Recommendation-Engine",
      demo: "https://candidate-rec.streamlit.app/"
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

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] glass"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl md:text-2xl font-jetbrains-medium text-white cursor-pointer hover:opacity-80 transition-opacity pr-4">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2 flex-shrink-0">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 py-1 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-600 flex items-center space-x-1"
                        >
                          <ExternalLink size={14} />
                          <span className="text-xs font-jetbrains">Demo</span>
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-600"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center mb-3 text-sm text-gray-400 font-jetbrains">
                    <Calendar size={14} className="mr-2" />
                    <span>{project.period}</span>
                  </div>

                  <p className="text-base text-gray-300 mb-4 flex-grow leading-relaxed font-jetbrains">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-base font-light text-white mb-2 font-mono">Key Highlights</h4>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-gray-300 flex items-start text-sm font-jetbrains">
                          <TrendingUp size={14} className="text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base font-jetbrains-medium text-white mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-jetbrains hover:bg-gray-600 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
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