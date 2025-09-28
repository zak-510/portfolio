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
          <div className="text-left mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono text-white mb-4 cursor-default text-center sm:text-left">
              Awards & Honors
            </h2>
          </div>
          
          <div className="space-y-12">
            {awards.map((award, index) => (
              <div key={index} className="grid md:grid-cols-4 gap-x-6">
                {/* Date */}
                <div className="md:col-span-1 mb-4 md:mb-0">
                  <p className="text-sm text-gray-400 font-mono">{award.date}</p>
                </div>

                {/* Details */}
                <div className="md:col-span-3">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 pt-1">
                      <img 
                        src={award.logo} 
                        alt={`${award.title} logo`}
                        className="w-14 h-14 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1">
                        {award.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed font-light mb-2">
                        {award.description}
                      </p>
                      <a 
                        href={award.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-400 hover:text-white transition-colors duration-300 font-mono group"
                      >
                        Learn More <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                      </a>
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

export default Awards; 