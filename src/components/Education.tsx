import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Education: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  const education = [
    {
      school: "University of California, Berkeley",
      degree: "Bachelor of Arts in Data Science",
      period: "Aug. 2025 - May 2029",
      gpa: "",
      logo: "/uc-berkeley-logo.png",
      courses: [
        "Foundations of Data Science",
        "Program Structures",
        "Data Structures",
        "Calculus II",
        "Linear Algebra and Differential Equations"
      ],
      isPlanned: true
    },
    {
      school: "Merritt College, Oakland",
      degree: "Dual Enrollment",
      period: "Jan. 2024 - Jan. 2025",
      gpa: "",
      logo: "/Merritt_College_logo.svg.png",
      courses: [
        "Applications in Info Security",
        "Secure Coding in JAVA and .NET",
        "Python Application Programming",
        "Introduction to Computer Programming",
        "Introduction to Physics"
      ],
      isPlanned: false
    }
  ];

  return (
    <section 
      id="education" 
      ref={elementRef}
      className={`page bg-transparent py-20 px-4 sm:px-6 lg:px-8 smooth-scroll-animate ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono text-white mb-4 cursor-default">
              Education
            </h2>
          </div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="grid md:grid-cols-4 gap-x-6">
                {/* Period */}
                <div className="md:col-span-1 mb-4 md:mb-0">
                  <p className="text-sm text-gray-400 font-mono whitespace-nowrap">{edu.period}</p>
                </div>
                
                {/* Details */}
                <div className="md:col-span-3">
                  {/* School and Degree */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 pt-1">
                       <img 
                        src={edu.logo} 
                        alt={`${edu.school} logo`}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white">
                        {edu.school}
                      </h3>
                      <p className="text-gray-300 font-light text-lg">
                        {edu.degree}
                      </p>
                    </div>
                  </div>
                  
                  {/* Coursework */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-3 font-mono">
                      {edu.isPlanned ? 'Planned Coursework' : 'Relevant Coursework'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="text-xs text-gray-400 border border-white/20 bg-white/5 px-2 py-1 rounded-full"
                        >
                          {course}
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

export default Education;