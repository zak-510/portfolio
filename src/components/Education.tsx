import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Education: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  const education = [
    {
      school: "University of California, Berkeley",
      degree: "Bachelor of Arts in Data Science",
      period: "May 2029",
      gpa: "",
      courses: [
        "Foundations of Data Science",
        "Program Structures",
        "Data Structures",
        "Calculus II",
        "Multivariable Calculus"
      ],
      isPlanned: true
    },
    {
      school: "Merritt College, Oakland",
      degree: "Dual Enrollment",
      period: "Dec. 2024",
      gpa: "",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Education
            </h2>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl glass hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full mr-4 bg-blue-500/20">
                        <GraduationCap size={24} className="text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {edu.school}
                        </h3>
                        <p className="text-lg text-gray-300">
                          {edu.degree}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Award size={16} />
                        <span>{edu.gpa}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center text-white">
                        <BookOpen size={20} className="mr-2" />
                        {edu.isPlanned ? 'Planned Relevant Coursework' : 'Relevant Coursework'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 bg-gray-700 text-gray-300 hover:bg-gray-600"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
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