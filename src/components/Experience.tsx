import React from 'react';
import { useIntersectionObserver } from '../utils/animations';

interface Job {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  color: string;
}

const jobs: Job[] = [
  {
    title: "Product Analyst",
    company: "Tata Consultancy Services, Ltd",
    period: "2021 - 2024",
    description: "Leading product strategy and execution for the company's flagship fintech solution, overseeing a cross-functional team of designers, engineers, and data analysts.",
    achievements: [
      "Increased monthly active users by 45% through targeted feature enhancements and UX improvements",
      "Led the successful launch of three major product releases generating $4.2M in new revenue",
      "Implemented a data-driven product development process that reduced time-to-market by 30%",      
    ],
    color: "bg-blue-500 border-blue-500", // Solid blue
  },
  {
    title: "Content Creator and Social Media Marketing",
    company: "Self Employed",
    period: "2020 - Present",
    description: "Managed the development of patient-facing healthcare applications focusing on telehealth and electronic health records.",
    achievements: [
      "Spearheaded the development of a telemedicine platform used by over 200 healthcare providers",
      "Reduced patient onboarding time by 65% through streamlined UX and automated processes",
      "Conducted extensive user research resulting in a redesign that improved patient satisfaction by 35%",
    ],
    color: "bg-purple-500 border-purple-500", // Solid purple
  },
  {
    title: "Associate Project Manager",
    company: "Guru Gajanan Builders and Developers",
    period: "2020 - 2021",
    description: "Managed the development of patient-facing healthcare applications focusing on telehealth and electronic health records.",
    achievements: [
      "Spearheaded the development of a telemedicine platform used by over 200 healthcare providers",
      "Reduced patient onboarding time by 65% through streamlined UX and automated processes",
      "Conducted extensive user research resulting in a redesign that improved patient satisfaction by 35%",
    ],
    color: "bg-blue-500 border-blue-500", // Solid blue
  },
  {
    title: "Product Analyst Intern",
    company: "CodeInfinity",
    period: "Dec 2019 – Mar 2020",
    description: "Supported product development initiatives by integrating data-driven insights into a scalable recommendation engine. Collaborated with data, UX, and engineering teams to enhance user engagement and streamline feature delivery.",
    achievements: [
      "Developed a scalable location recommendation system that increased user engagement by 25%",
      "Defined the product roadmap and prioritized key features, improving recommendation speed by 30%",
      "Worked cross-functionally to implement real-time, location-based search functionality, boosting user satisfaction by 15%"
    ],
    color: "bg-purple-500 border-purple-500", // Solid purple
  }
];

const Experience: React.FC = () => {
  const containerRef = useIntersectionObserver();

  return (
    <section id="experience" className="bg-secondary/50">
      <div className="section-container" ref={containerRef}>
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-item">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-foreground mb-6">
            Work History
          </div>
          <h2 className="section-heading">Professional Experience</h2>
          <p className="section-subheading">
            My career journey has equipped me with diverse experience across industries and product types.
          </p>
        </div>
        
        <div className="space-y-12">
          {jobs.map((job, index) => (
            <div 
              key={index} 
              className={`glass-card p-8 border reveal-item ${job.color}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-display font-semibold text-black">
                    {job.title}
                  </h3>
                  <div className="text-lg text-muted-foreground">{job.company}</div>
                </div>
                <div className="mt-2 md:mt-0 text-sm font-medium bg-white/50 px-3 py-1 rounded-full inline-flex">
                  {job.period}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                {job.description}
              </p>
              
              <h4 className="font-medium mb-4">Key Achievements:</h4>
              <ul className="space-y-3">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2 mr-3"></span>
                    <span className="text-muted-foreground">{achievement}</span>
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

export default Experience;
