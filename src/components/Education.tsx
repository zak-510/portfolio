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
      className={`py-20 bg-transparent smooth-scroll-animate ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono text-white mb-4 cursor-pointer hover:opacity-80 transition-opacity">
              Education
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative pl-8 py-6 transition-all duration-300 hover:translate-x-2"
              >
                {/* White accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-white"></div>
                
                <div className="space-y-4">
                  {/* Header with logo and title */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <img 
                        src={edu.logo} 
                        alt={`${edu.school} logo`}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium mb-1 text-white">
                        {edu.school}
                      </h3>
                      <p className="text-gray-300 font-medium text-lg">
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  {/* Period */}
                  <div className="ml-12">
                    <p className="text-gray-400 text-sm mb-4">
                      {edu.period}
                    </p>
                  </div>

                  {/* Coursework */}
                  <div className="ml-12">
                    <h4 className="text-sm font-medium text-gray-300 mb-3">
                      {edu.isPlanned ? 'Planned Relevant Coursework' : 'Relevant Coursework'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="text-xs text-gray-400 bg-gray-800/30 px-2 py-1 rounded"
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