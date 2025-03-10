
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
    description: "Contributing towards product strategy and execution for the company's financial services client project, overseeing a cross-functional team of designers, engineers, and data analysts.",
    achievements: [
      "Launched the MVP feature for Internal Financial Data Management System for a US Client, achieving 50% of the projected target of the first quarter of launch.",
      "Designed process mapping for automating repetitive tasks of trade batch processing, reducing the data processing time by 30%.",
      "Led the successful launch of feature reducing the the Budget data discrepancy by 90%.",      
    ],
    color: "bg-brand-blue border-brand-blue", // Changed to brand-blue from Hero section
  },
  {
    title: "Content Creator and Social Media Marketing",
    company: "Self Employed",
    period: "2020 - Present",
    description: "Developed and posted content on Instagram and Youtube in the travel domain and marketed own products for brand visibility.",
    achievements: [
      "Created and developed content to enable effective storytelling, improved audience by 5x.",
      "Conducted market research to identify travel content trends and customer preferences, enhanced user engagement by 75%",
      "Created online community groups to support early creators and helped with content strategy and ideas.",
    ],
    color: "bg-brand-purple/10 border-brand-purple/20", // Changed to brand-purple from Hero section
  },
  {
    title: "Associate Project Manager",
    company: "Guru Gajanan Builders and Developers",
    period: "2020 - 2021",
    description: "Managed the development of large-scale real estate projects development plan and optimising client relationship.",
    achievements: [
      "Spearheaded the development of new projects and focused on creating sustainable development.",
      "Analysed market trends and competitor strategies to identify new business opportunities leading to 10M+ INR investment from partners.",
      "Managed and optimized client relationships, increasing customer retention and leading to 50% more business.",
    ],
    color: "bg-brand-blue/10 border-brand-blue/20", // Changed to brand-blue from Hero section
  },
  {
    title: "Product Analyst Intern",
    company: "CodeInfinity",
    period: "Dec 2019 – Mar 2020",
    description: "Supported product development initiatives by integrating data-driven insights into a scalable recommendation engine. Collaborated with data, UX, and engineering teams to enhance user engagement and streamline feature delivery.",
    achievements: [
      "Developed a scalable location recommendation system that increased user engagement by 25%.",
      "Defined the product roadmap and prioritized key features, improving recommendation speed by 30%.",
      "Worked cross-functionally to implement real-time, location-based search functionality, boosting user satisfaction by 15%."
    ],
    color: "bg-brand-purple/10 border-brand-purple/20", // Changed to brand-purple from Hero section
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
          <h2 className="section-heading text-black">Professional Experience</h2>
          <p className="section-subheading text-black">
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
                  <h3 className="text-xl font-display font-semibold text-black">{job.title}</h3>
                  <div className="text-lg text-black">{job.company}</div>
                </div>
                <div className="mt-2 md:mt-0 text-sm font-medium bg-white/50 px-3 py-1 rounded-full inline-flex text-black">
                  {job.period}
                </div>
              </div>
              
              <p className="text-black mb-6">
                {job.description}
              </p>
              
              <h4 className="font-medium mb-4 text-black">Key Achievements:</h4>
              <ul className="space-y-3">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2 mr-3"></span>
                    <span className="text-black">{achievement}</span>
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
