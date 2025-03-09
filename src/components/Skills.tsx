import React from 'react';
import { motion } from 'framer-motion';
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
      <div className="flex flex-wrap gap-1.5 justify-center">
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

// Animation variants for the container and cards using Framer Motion
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    }
  }
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Product Management Skills
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            I combine strategic vision with technical execution to create products that deliver exceptional user experiences and business results.
          </motion.p>
        </div>

        {/* Grid of skill cards */}
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="relative bg-white rounded-xl p-6 shadow-md transform transition duration-500 hover:-translate-y-2"
              variants={cardVariants}
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
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-opacity-70" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
              {category.title === "Tools" && (
                <div className="mt-6 flex justify-center">
                  {category.icon}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
