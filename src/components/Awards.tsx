import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Awards = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const awards = [
    {
      title: "Regents' and Chancellor's Scholarship, UC Berkeley",
      date: "2025 - 2029",
      description: "The Regents' and Chancellor's Scholarship is the most prestigious scholarship offered by UC Berkeley to the top 1-2% entering undergraduate students.",
      link: "https://financialaid.berkeley.edu/types-of-aid-at-berkeley/scholarships/regents-and-chancellors-scholarship/"
    },
    {
      title: "Leaders for Tomorrow Scholar, Annexstad Family Foundation",
      date: "2025 - 2029",
      description: "Selected as one of 110 scholars nationwide across 75+ partner universities. This national scholarship, awarded in partnership with UC Berkeley, recognizes students who have demonstrated perseverance in the face of adversity and exceptional leadership potential.",
      link: "https://annexstadfamilyfoundation.org/pages/scholarship-programs-leaders-for-tomorrow#:~:text=Since%202012%2C%20the%20Leaders%20for,leadership%20potential%20across%20the%20nation."
    }
  ];

  return (
    <section 
      id="awards" 
      ref={elementRef}
      className={`py-20 bg-transparent smooth-scroll-animate ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Awards & Honors
            </h2>
          </div>
          
          <div className="space-y-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl glass hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {award.title}
                  </h3>
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all hover:scale-110 text-gray-300 hover:text-white hover:bg-gray-600"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <div className="flex items-center mb-4 text-sm text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span>{award.date}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards; 