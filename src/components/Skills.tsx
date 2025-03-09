
import React from 'react';
import { useIntersectionObserver } from '../utils/animations';
import { 
  Figma, 
  Github, 
  FileSpreadsheet, 
  Presentation 
} from 'lucide-react';

interface SkillCategory {
  title: string;
  color: string;
  skills: string[];
  position: string;
  icon?: React.ReactNode;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Strategic Planning",
    color: "bg-brand-blue/10 text-brand-blue",
    skills: [
      "Product Development",
      "Product Roadmapping", 
      "Market Research & Analysis"
    ],
    position: "top-0 left-1/2 -translate-x-1/2 -translate-y-[130%]"
  },
  {
    title: "Technical Proficiency",
    color: "bg-brand-purple/10 text-brand-purple",
    skills: [
      "SQL",
      "ETL Development",
      "Pipeline Designing (Informatica)",
      "Data Warehousing"
    ],
    position: "top-1/4 right-0 translate-x-[130%]"
  },
  {
    title: "Agile & Stakeholder Management",
    color: "bg-brand-green/10 text-brand-green",
    skills: [
      "Business Analysis",
      "Product Backlog Grooming",
      "Workshop Facilitation",
      "Cross-Functional Collaboration",
      "Conflict Resolution"
    ],
    position: "bottom-0 right-1/4 translate-x-[40%] translate-y-[120%]"
  },
  {
    title: "UX & User Research",
    color: "bg-brand-orange/10 text-brand-orange",
    skills: [
      "Wireframing",
      "Feature Prioritisation",
      "Usability Testing",
      "Persona Development",
      "User Journey Mapping",
      "A/B Testing",
      "User Interviews"
    ],
    position: "bottom-0 left-1/4 -translate-x-[40%] translate-y-[120%]"
  },
  {
    title: "Tools",
    color: "bg-brand-teal/10 text-brand-teal",
    skills: [
      "Jira",
      "Figma/Whimsical",
      "Notion",
      "Lucid Chart",
      "Miro",
      "Github",
      "Microsoft Office"
    ],
    position: "top-1/4 left-0 -translate-x-[130%]",
    icon: (
      <div className="flex flex-wrap gap-2 justify-center mt-2">
        <div className="p-1.5 bg-white rounded-full shadow-sm">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#2684FF"/>
            <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" fill="#2684FF"/>
          </svg>
        </div>
        <div className="p-1.5 bg-white rounded-full shadow-sm">
          <Figma size={20} color="#F24E1E" />
        </div>
        <div className="p-1.5 bg-white rounded-full shadow-sm">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 5.5C4 4.11929 5.11929 3 6.5 3H17.5C18.8807 3 20 4.11929 20 5.5V18.5C20 19.8807 18.8807 21 17.5 21H6.5C5.11929 21 4 19.8807 4 18.5V5.5Z" fill="#000000" fillOpacity="0.08"/>
            <path d="M16.5 8C16.5 9.65685 15.1569 11 13.5 11C15.1569 11 16.5 12.3431 16.5 14C16.5 15.6569 15.1569 17 13.5 17H8.5V8H13.5C15.1569 8 16.5 6.65685 16.5 5C16.5 6.65685 17.8431 8 19.5 8H16.5Z" fill="#000000" fillOpacity="0.08"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.5 17.5V7.5H13.5C14.3284 7.5 15 6.82843 15 6C15 5.17157 14.3284 4.5 13.5 4.5C12.6716 4.5 12 5.17157 12 6H10.5C10.5 4.34315 11.8431 3 13.5 3C15.1569 3 16.5 4.34315 16.5 6C16.5 7.12661 15.9174 8.11142 15.0458 8.66318C15.3295 8.73382 15.5991 8.84877 15.8451 8.99998C16.0911 9.15119 16.3097 9.33608 16.4923 9.54771C16.6749 9.75934 16.8187 9.99499 16.9177 10.2465C17.0168 10.4981 17.0697 10.7618 17.0736 11.0278C17.0775 11.2939 17.0323 11.5587 16.9406 11.8131C16.8489 12.0674 16.7119 12.3075 16.5351 12.5244C16.3583 12.7414 16.1444 12.9325 15.9024 13.0906C15.6603 13.2487 15.3936 13.3715 15.1124 13.4507C15.6168 13.9418 15.9337 14.6151 15.9982 15.3346C16.0626 16.0541 15.8704 16.7747 15.4544 17.3743C15.0385 17.9739 14.4277 18.4105 13.7285 18.6071C13.0293 18.8037 12.2876 18.7475 11.6252 18.4484C10.9628 18.1493 10.4215 17.6284 10.0953 16.979H8.5V15.5H10C10 16.3284 10.6716 17 11.5 17H13.5C14.3284 17 15 16.3284 15 15.5C15 14.6716 14.3284 14 13.5 14H11.5V12.5H13.5C14.3284 12.5 15 11.8284 15 11C15 10.1716 14.3284 9.5 13.5 9.5H10V8H13.5C14.3284 8 15 8.67157 15 9.5H16.5C16.5 8.67157 17.1716 8 18 8C18.8284 8 19.5 8.67157 19.5 9.5V11C19.5 11.8284 18.8284 12.5 18 12.5C18.8284 12.5 19.5 13.1716 19.5 14V15.5C19.5 16.3284 18.8284 17 18 17C17.1716 17 16.5 16.3284 16.5 15.5H15.9551C15.7185 16.6242 14.6993 17.5 13.5 17.5H8.5Z" fill="#2E3440"/>
          </svg>
        </div>
        <div className="p-1.5 bg-white rounded-full shadow-sm">
          <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9996 20.9999H3.99957C3.47014 21.0026 2.96133 20.7889 2.58636 20.414C2.2114 20.039 2.00109 19.5321 1.99957 19.0026V4.99999C1.99983 4.47026 2.21014 3.96085 2.5854 3.58561C2.96065 3.21036 3.47005 3.00005 3.99979 2.99979H19.9998C20.5296 3.00005 21.039 3.21036 21.4142 3.58561C21.7895 3.96085 21.9998 4.47026 22 4.99999V19.0026C21.9985 19.5321 21.7882 20.039 21.4132 20.414C21.0383 20.7889 20.5293 21.0026 19.9998 20.9999" fill="#FF0000"/>
            <path d="M9.99881 7.50033L15.0033 12.0003L9.99881 16.5003V7.50033Z" fill="white"/>
          </svg>
        </div>
        <div className="p-1.5 bg-white rounded-full shadow-sm">
          <Github size={20} color="#333" />
        </div>
        <div className="p-1.5 bg-white rounded-full shadow-sm">
          <FileSpreadsheet size={20} color="#217346" />
        </div>
        <div className="p-1.5 bg-white rounded-full shadow-sm">
          <Presentation size={20} color="#B7472A" />
        </div>
      </div>
    )
  }
];

const Skills: React.FC = () => {
  const containerRef = useIntersectionObserver();

  return (
    <section id="skills" className="bg-secondary/50">
      <div className="section-container" ref={containerRef}>
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-item">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-foreground mb-6">
            My Expertise
          </div>
          <h2 className="section-heading">Product Management Skills</h2>
          <p className="section-subheading">
            I combine strategic vision with technical execution to create products that deliver exceptional user experiences and business results.
          </p>
        </div>

        <div className="flex justify-center items-center mb-20">
          <div className="relative w-[650px] h-[650px] max-w-full">
            {/* Pentagon background shape */}
            <div className="absolute inset-0">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon 
                  points="50,0 100,38 82,100 18,100 0,38" 
                  fill="transparent" 
                  stroke="#e2e8f0" 
                  strokeWidth="1" 
                  className="transform scale-90"
                />
              </svg>
            </div>
            
            {/* Skill boxes positioned around pentagon */}
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className={`absolute ${category.position} glass-card p-3 shadow-lg w-[220px] reveal-item`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${category.color} mb-2`}>
                  {category.title}
                </div>
                <div className="flex flex-col gap-1.5">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="px-2 py-0.5 bg-white/80 rounded-md text-xs font-medium shadow-sm border border-gray-100"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
                {category.icon && category.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
