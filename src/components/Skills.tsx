import React from 'react';
import { CheckCircle } from 'lucide-react';

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
    ]
    // Removed icon for Tools category
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Product Management Skills
          </h2>
          <p className="text-lg text-gray-600">
            I combine strategic vision with technical execution to create products that deliver exceptional user experiences and business results.
          </p>
        </div>

        {/* Grid of Skill Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md"
              style={{ borderLeft: `4px solid var(--color-${category.title.toLowerCase().replace(/\s+/g, "-")})` }}
            >
              <div className="mb-4 flex items-center gap-2">
                <div className={`px-3 py-1 rounded-full ${category.color} text-sm font-medium`}>
                  {category.title}
                </div>
                {category.title !== "Tools" && category.icon && (
                  <div className="text-xl">
                    {category.icon}
                  </div>
                )}
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-opacity-70" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
