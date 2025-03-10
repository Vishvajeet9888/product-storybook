
import React, { useRef, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SkillCategory {
  title: string;
  color: string;
  skills: string[];
  icon?: React.ReactNode;
  bgClass?: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Strategic Planning",
    color: "text-brand-blue",
    bgClass: "bg-brand-blue/5 border-brand-blue/20",
    skills: ["Product Development", "Product Roadmapping", "Market Research & Analysis"],
    icon: <CheckCircle className="text-brand-blue" size={18} />
  },
  {
    title: "Technical Proficiency",
    color: "text-brand-purple",
    bgClass: "bg-brand-purple/5 border-brand-purple/20",
    skills: ["SQL", "ETL Development", "Pipeline Designing (Informatica)", "Data Warehousing"],
    icon: <CheckCircle className="text-brand-purple" size={18} />
  },
  {
    title: "Agile Project Management",
    color: "text-brand-green",
    bgClass: "bg-brand-green/5 border-brand-green/20",
    skills: [
      "Business Analysis",
      "Product Backlog Grooming",
      "Workshop Facilitation",
      "Cross-Functional Collaboration",
      "Conflict Resolution",
      "Stakeholder Management"
    ],
    icon: <CheckCircle className="text-brand-green" size={18} />
  },
  {
    title: "UX & User Research",
    color: "text-brand-orange",
    bgClass: "bg-brand-orange/5 border-brand-orange/20",
    skills: [
      "Wireframing",
      "Feature Prioritisation",
      "Usability Testing",
      "Persona Development",
      "User Journey Mapping",
      "A/B Testing",
      "User Interviews"
    ],
    icon: <CheckCircle className="text-brand-orange" size={18} />
  },
  {
    title: "Tools",
    color: "text-brand-teal",
    bgClass: "bg-brand-teal/5 border-brand-teal/20",
    skills: ["Jira", "Figma/Whimsical", "Notion", "Lucid Chart", "Miro", "Github", "Microsoft Office"],
    icon: <CheckCircle className="text-brand-teal" size={18} />
  }
];

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillCards = containerRef.current?.querySelectorAll('.skill-card');
    skillCards?.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      skillCards?.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I combine strategic vision with technical execution to create products that deliver exceptional user experiences and business results.
          </p>
        </div>

        <div className="skill-container relative" ref={containerRef}>
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={cn(
                "skill-card opacity-0 translate-y-8 transition-all duration-700 ease-out",
                "bg-white rounded-2xl p-6 md:p-8 shadow-lg border",
                "mb-8 md:mb-12 w-full max-w-4xl mx-auto",
                category.bgClass,
                `delay-${index * 100}`
              )}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transform: `translateY(${30 * (index + 1)}px)`,
                zIndex: skillCategories.length - index
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="mb-4 md:mb-0">
                  <div className={cn(
                    "inline-flex items-center justify-center rounded-xl",
                    "h-12 w-12 md:h-16 md:w-16",
                    "bg-white shadow-sm border",
                    category.bgClass
                  )}>
                    <span className={cn("text-2xl md:text-3xl font-bold", category.color)}>
                      {index + 1}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className={cn("text-xl md:text-2xl font-bold mb-3", category.color)}>
                    {category.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {category.skills.map((skill, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 text-gray-700 group"
                      >
                        <CheckCircle className={cn("h-4 w-4", category.color)} />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
        .skill-card {
          opacity: 0;
          transform: translateY(30px);
        }
        
        .skill-card.show {
          opacity: 1;
          transform: translateY(0);
        }
        
        @media (hover: hover) {
          .skill-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
        }
        `}
      </style>
    </section>
  );
};

export default Skills;
