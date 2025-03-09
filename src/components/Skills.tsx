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
    // Icon removed for Tools category
  }
];

const Skills: React.FC = () => {
  // Predefined positions for a pentagon layout (desktop)
  // Positions are percentages relative to a container with position: relative.
  const pentagonPositions = [
    { left: "50%", top: "15%" },   // Top (Category 0)
    { left: "83.3%", top: "39.2%" }, // Right Upper (Category 1)
    { left: "70.6%", top: "78.3%" }, // Right Lower (Category 2)
    { left: "29.4%", top: "78.3%" }, // Left Lower (Category 3)
    { left: "16.7%", top: "39.2%" }  // Left Upper (Category 4)
  ];

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

        {/* Desktop Pentagon Layout */}
        <div className="hidden md:block relative w-full h-[500px]">
          {skillCategories.map((category, index) => {
            const pos = pentagonPositions[index];
            return (
              <div
                key={index}
                style={{
                  position: "absolute",
                  left: pos.left,
                  top: pos.top,
                  transform: "translate(-50%, -50%)",
                }}
                className="bg-white rounded-xl p-4 shadow-md max-w-xs"
              >
                <div className="mb-2">
                  <div className={`px-2 py-1 rounded-full ${category.color} text-xs font-medium`}>
                    {category.title}
                  </div>
                </div>
                <ul className="space-y-1 text-xs">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-1 text-gray-700">
                      <CheckCircle size={12} className="text-opacity-70" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Mobile Layout: Simple Grid */}
        <div className="block md:hidden grid gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-md">
              <div className="mb-2 flex items-center gap-2">
                <div className={`px-2 py-1 rounded-full ${category.color} text-xs font-medium`}>
                  {category.title}
                </div>
                {category.title !== "Tools" && category.icon && (
                  <div className="text-xs">{category.icon}</div>
                )}
              </div>
              <ul className="space-y-1 text-xs">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-1 text-gray-700">
                    <CheckCircle size={12} className="text-opacity-70" />
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
