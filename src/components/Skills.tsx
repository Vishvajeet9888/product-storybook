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
    skills: ["Product Development", "Product Roadmapping", "Market Research & Analysis"],
    icon: <CheckCircle className="text-brand-blue" size={18} />
  },
  {
    title: "Technical Proficiency",
    color: "bg-brand-purple/10 text-brand-purple border-brand-purple/30",
    skills: ["SQL", "ETL Development", "Pipeline Designing (Informatica)", "Data Warehousing"],
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
    skills: ["Jira", "Figma/Whimsical", "Notion", "Lucid Chart", "Miro", "Github", "Microsoft Office"]
  }
];

const Skills: React.FC = () => {
  const pentagonPositions = [
    { left: "50%", top: "5%" },     // Top (Strategic Planning)
    { left: "85%", top: "35%" },    // Upper Right (Technical Proficiency)
    { left: "65%", top: "80%" },    // Lower Right (Agile & Stakeholder Management)
    { left: "35%", top: "80%" },    // Lower Left (UX & User Research) --> Moved slightly
    { left: "15%", top: "35%" }     // Upper Left (Tools)
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Product Management Skills
          </h2>
          <p className="text-lg text-gray-600">
            I combine strategic vision with technical execution to create products that deliver exceptional user experiences and business results.
          </p>
        </div>

        {/* Pentagon Layout for All Devices */}
        <div className="relative w-full h-[280px] md:h-[500px]">
          {/* Pentagon Shape */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-[60%] md:w-full h-[60%] md:h-full mx-auto"
          >
            <polygon
              points="50,10 90,40 75,85 25,85 10,40"
              className="fill-none stroke-gray-300 stroke-[1.5] md:stroke-2"
            />
          </svg>

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
                className="bg-white rounded-xl p-2 md:p-4 shadow-md max-w-[75px] md:max-w-xs"
              >
                <div className="mb-1 md:mb-2">
                  <div
                    className={`px-1 py-0.5 md:px-2 md:py-1 rounded-full ${category.color} text-[9px] md:text-xs font-medium`}
                  >
                    {category.title}
                  </div>
                </div>
                <ul className="space-y-0.5 md:space-y-1 text-[8px] md:text-xs">
                  {category.skills.slice(0, 4).map((skill, i) => (
                    <li key={i} className="flex items-center gap-1 text-gray-700">
                      <CheckCircle size={10} className="text-opacity-70" />
                      <span>{skill}</span>
                    </li>
                  ))}
                  {category.skills.length > 4 && (
                    <li className="text-gray-500 italic text-[7px] md:text-xs">
                      + More Skills
                    </li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
