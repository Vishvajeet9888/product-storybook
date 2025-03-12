
import React, { useRef, useEffect } from 'react';
import { CheckCircle, Code, BarChart, Users, Lightbulb, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/utils/animations';
import ParticleBackground from './ParticleBackground';

interface SkillCategory {
  title: string;
  color: string;
  icon: React.ReactNode;
  skills: Array<{
    name: string;
    logo?: string;
  }>;
  bgClass?: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Strategic Planning",
    color: "text-brand-blue",
    bgClass: "bg-brand-blue/10 border-brand-blue/30",
    skills: [
      { name: "Product Development" },
      { name: "Product Roadmapping" },
      { name: "Market Research & Analysis" }
    ],
    icon: <BarChart className="text-brand-blue" size={24} />
  },
  {
    title: "Technical Proficiency",
    color: "text-brand-purple",
    bgClass: "bg-brand-purple/10 border-brand-purple/30",
    skills: [
      { name: "SQL" },
      { name: "ETL Development" },
      { name: "Pipeline Designing" },
      { name: "Data Warehousing" }
    ],
    icon: <Code className="text-brand-purple" size={24} />
  },
  {
    title: "Agile Project Management",
    color: "text-brand-green",
    bgClass: "bg-brand-green/10 border-brand-green/30",
    skills: [
      { name: "Business Analysis" },
      { name: "Product Backlog Grooming" },
      { name: "Workshop Facilitation" },
      { name: "Cross-Functional Collaboration" }
    ],
    icon: <Users className="text-brand-green" size={24} />
  },
  {
    title: "UX & User Research",
    color: "text-brand-orange",
    bgClass: "bg-brand-orange/10 border-brand-orange/30",
    skills: [
      { name: "Wireframing" },
      { name: "Feature Prioritisation" },
      { name: "Usability Testing" },
      { name: "Persona Development" }
    ],
    icon: <Lightbulb className="text-brand-orange" size={24} />
  },
  {
    title: "Tools",
    color: "text-brand-teal",
    bgClass: "bg-brand-teal/10 border-brand-teal/30",
    skills: [
      { name: "Jira", logo: "https://w7.pngwing.com/pngs/992/738/png-transparent-jira-hd-logo-thumbnail.png" },
      { name: "Figma/Whimsical", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png" },
      { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png" },
      { name: "Lucid Chart", logo: "https://e7.pngegg.com/pngimages/625/214/png-clipart-lucidchart-logo-thumbnail-tech-companies-thumbnail.png" },
      { name: "Miro", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBpyf4fNQhCsja9bE93KwwHVgtb1ku2azvg&s" },
      { name: "Github", logo: "https://banner2.cleanpng.com/20180418/siw/kisspng-github-pages-random-icons-5ad6e9863397c7.5716118315240339262113.jpg" }
    ],
    icon: <Wrench className="text-brand-teal" size={24} />
  }
];

const Skills: React.FC = () => {
  const containerRef = useIntersectionObserver();

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <ParticleBackground className="opacity-30" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I combine strategic vision with technical execution to create products that deliver exceptional user experiences and business results.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={cn(
                "reveal-item opacity-0 rounded-xl p-6 border backdrop-blur-sm transition-all duration-500",
                "hover:shadow-lg hover:-translate-y-1",
                category.bgClass
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className={cn(
                  "flex-shrink-0 p-3 rounded-lg",
                  "bg-white shadow-sm"
                )}>
                  {category.icon}
                </div>
                
                <div>
                  <h3 className={cn("text-xl font-bold mb-3", category.color)}>
                    {category.title}
                  </h3>
                  
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className={cn("h-4 w-4", category.color)} />
                        <span className="transition-transform duration-300">
                          {skill.name}
                        </span>
                        {skill.logo && (
                          <img 
                            src={skill.logo} 
                            alt={`${skill.name} logo`} 
                            className="h-4 w-4 object-contain"
                          />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 reveal-item opacity-0">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold mb-8 text-center">Proficiency Overview</h3>
            
            <div className="space-y-6">
              {[
                { name: "Strategic Planning", value: 95, color: "bg-brand-blue" },
                { name: "Technical Skills", value: 85, color: "bg-brand-purple" },
                { name: "Agile & Project Management", value: 90, color: "bg-brand-green" },
                { name: "UX & User Research", value: 92, color: "bg-brand-orange" },
                { name: "Tools & Platforms", value: 88, color: "bg-brand-teal" }
              ].map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm font-semibold">{skill.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} skill-bar rounded-full`}
                      style={{ 
                        width: `${skill.value}%`,
                        animation: `progress-animation 1.5s ease-out forwards ${i * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes progress-animation {
            from { width: 0; }
            to { width: var(--width); }
          }
          
          .skill-bar {
            --width: 0%;
            width: var(--width);
            transition: width 1.5s ease-out;
          }
          
          .reveal-item {
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }
          
          .reveal-item.reveal {
            opacity: 1;
            transform: translateY(0);
          }
          
          @media (hover: hover) {
            .reveal-item:hover {
              transform: translateY(-5px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
