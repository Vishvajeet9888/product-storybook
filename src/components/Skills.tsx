
import React, { useRef } from 'react';
import { useIntersectionObserver } from '../utils/animations';
import { 
  Figma, 
  Github, 
  FileSpreadsheet, 
  Presentation,
  CheckCircle
} from 'lucide-react';

interface SkillCategory {
  title: string;
  color: string;
  skills: string[];
  icon?: React.ReactNode;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Strategic Planning",
    color: "bg-brand-blue/10 text-brand-blue border-brand-blue/30",
    skills: [
      "Product Development",
      "Product Roadmapping", 
      "Market Research & Analysis"
    ],
    icon: <CheckCircle className="text-brand-blue" size={18} />
  },
  {
    title: "Technical Proficiency",
    color: "bg-brand-purple/10 text-brand-purple border-brand-purple/30",
    skills: [
      "SQL",
      "ETL Development",
      "Pipeline Designing (Informatica)",
      "Data Warehousing"
    ],
    icon: <CheckCircle className="text-brand-purple" size={18} />
  },
  {
    title: "Agile & Stakeholder Management",
    color: "bg-brand-green/10 text-brand-green border-brand-green/30",
    skills: [
      "Business Analysis",
      "Product Backlog Grooming",
      "Workshop Facilitation",
      "Cross-Functional Collaboration",
      "Conflict Resolution"
    ],
    icon: <CheckCircle className="text-brand-green" size={18} />
  },
  {
    title: "UX & User Research",
    color: "bg-brand-orange/10 text-brand-orange border-brand-orange/30",
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
    color: "bg-brand-teal/10 text-brand-teal border-brand-teal/30",
    skills: [
      "Jira",
      "Figma/Whimsical",
      "Notion",
      "Lucid Chart",
      "Miro",
      "Github",
      "Microsoft Office"
    ],
    icon: (
      <div className="flex flex-wrap gap-1.5 justify-center mt-3">
        <div className="p-1 bg-white rounded-full shadow-sm">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#2684FF"/>
            <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" fill="#2684FF"/>
          </svg>
        </div>
        <div className="p-1 bg-white rounded-full shadow-sm">
          <Figma size={16} color="#F24E1E" />
        </div>
        <div className="p-1 bg-white rounded-full shadow-sm">
          <Github size={16} color="#333" />
        </div>
        <div className="p-1 bg-white rounded-full shadow-sm">
          <FileSpreadsheet size={16} color="#217346" />
        </div>
        <div className="p-1 bg-white rounded-full shadow-sm">
          <Presentation size={16} color="#B7472A" />
        </div>
      </div>
    )
  }
];

const Skills: React.FC = () => {
  const containerRef = useIntersectionObserver({
    threshold: 0.05,
    rootMargin: "-10% 0px -10% 0px",
  });

  return (
    <section id="skills" className="bg-secondary/50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6" ref={containerRef}>
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-item">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-foreground mb-6">
            My Expertise
          </div>
          <h2 className="section-heading">Product Management Skills</h2>
          <p className="section-subheading">
            I combine strategic vision with technical execution to create products that deliver exceptional user experiences and business results.
          </p>
        </div>

        <div className="space-y-6 md:space-y-12 relative">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="reveal-item bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-300 border-l-4 hover:translate-y-[-8px]"
              style={{ 
                animationDelay: `${index * 150}ms`,
                borderLeftColor: `var(--color-${category.title.toLowerCase().replace(/\s+/g, "-")})`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className={`px-4 py-2 rounded-xl ${category.color} border w-fit font-medium mb-2 md:mb-0 text-sm md:text-base`}>
                  {category.title}
                </div>
                
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      {category.icon || <CheckCircle className="text-muted-foreground" size={16} />}
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {category.title === "Tools" && (
                <div className="mt-4 flex justify-center md:justify-start">
                  {category.icon}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
