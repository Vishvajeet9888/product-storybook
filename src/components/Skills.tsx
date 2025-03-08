
import React from 'react';
import { useIntersectionObserver } from '../utils/animations';

interface SkillCategory {
  title: string;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Strategic Planning",
    color: "bg-brand-blue/10 text-brand-blue",
    skills: [
      "Product Roadmapping",
      "Market Analysis", 
      "Go-to-Market Strategy",
      "Competitive Analysis",
      "KPI Definition",
      "Business Models",
      "Product Vision",
    ]
  },
  {
    title: "User Research",
    color: "bg-brand-purple/10 text-brand-purple",
    skills: [
      "User Interviews",
      "Usability Testing",
      "Persona Development",
      "Customer Journey Mapping",
      "User Flows",
      "A/B Testing",
      "Survey Design",
    ]
  },
  {
    title: "Data Analysis",
    color: "bg-brand-green/10 text-brand-green",
    skills: [
      "SQL & Database Queries",
      "Analytics Tools",
      "Metrics Interpretation",
      "Product Analytics",
      "Growth Analysis",
      "Conversion Optimization",
      "Retention Analysis",
    ]
  },
  {
    title: "Stakeholder Management",
    color: "bg-brand-orange/10 text-brand-orange",
    skills: [
      "Cross-functional Leadership",
      "Executive Communication",
      "Team Collaboration",
      "Agile Methodologies",
      "Project Management",
      "Resource Planning",
      "Conflict Resolution",
    ]
  },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-8 reveal-item" style={{ animationDelay: `${index * 100}ms` }}>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${category.color} mb-4`}>
                {category.title}
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 bg-white rounded-full text-sm font-medium shadow-sm border border-gray-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
