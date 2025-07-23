import React from 'react';
import { Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Awards = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const awards = [
    {
      title: "Regents' and Chancellor's Scholarship",
      date: "2025 - 2029",
      description: "The Regents' and Chancellor's Scholarship is the most prestigious scholarship offered by UC Berkeley to the top 1-2% entering undergraduate students."
    },
    {
      title: "Leaders for Tomorrow Scholarship",
      date: "2025 - 2029",
      description: "This 4-year national scholarship, awarded by the Annexstad Family Foundation in partnership with UC Berkeley, recognizes students who have demonstrated perseverance in the face of adversity and strong leadership potential. I am honored to be selected as one of only 110 scholars nationwide across a network of 75+ partner universities."
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
                <h3 className="text-2xl font-bold text-white mb-4">
                  {award.title}
                </h3>
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