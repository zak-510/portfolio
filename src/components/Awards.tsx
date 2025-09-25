import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Awards = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const awards = [
    {
      title: "Regents' and Chancellor's Scholarship",
      date: "Aug. 2025 - May 2029",
      description: "The Regents' and Chancellor's Scholarship is the most prestigious scholarship offered by UC Berkeley to the top 1-2% entering undergraduate students for their creativity, leadership, service, and a strong commitment to excellence.",
      link: "https://financialaid.berkeley.edu/types-of-aid-at-berkeley/scholarships/regents-and-chancellors-scholarship/",
      logo: "/RCSA_Logo.png"
    },
    {
      title: "Leaders for Tomorrow Scholarship",
      date: "Aug. 2025 - May 2029",
      description: "The Leaders for Tomorrow Scholarship is a national award presented by the Annexstad Family Foundation in partnership with UC Berkeley. I was selected as one of two students in my incoming class to receive this scholarship, which recognizes individuals who have demonstrated perseverance in the face of adversity and exceptional leadership potential.",
      link: "https://annexstadfamilyfoundation.org/pages/scholarship-programs-leaders-for-tomorrow#:~:text=Since%202012%2C%20the%20Leaders%20for,leadership%20potential%20across%20the%20nation.",
      logo: "/AnnexstadLogo.png"
    }
  ];

  return (
    <section 
      id="awards" 
      ref={elementRef}
      className={`page bg-transparent py-20 smooth-scroll-animate ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono text-white mb-4 cursor-pointer hover:opacity-80 transition-opacity">
              Awards & Honors
            </h2>
          </div>
          
          <div className="space-y-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group relative pl-8 py-6 transition-all duration-300 hover:translate-x-2"
              >
                {/* White accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-white"></div>
                
                <div className="space-y-4">
                  {/* Header with logo and title */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <img 
                          src={award.logo} 
                          alt={`${award.title} logo`}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-medium mb-1 text-white">
                          {award.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3">
                          {award.date}
                        </p>
                      </div>
                    </div>
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg transition-all hover:scale-110 text-gray-400 hover:text-white hover:bg-gray-800/50"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  {/* Description */}
                  <div className="ml-20">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {award.description}
                    </p>
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

export default Awards; 