
import React from 'react';
import { useIntersectionObserver } from '../utils/animations';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  color: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  color: string;
}

const educationItems: Education[] = [
  {
    degree: "Msc in Management",
    institution: "UCD Michael Smurfit Graduate Business School, Ireland",
    period: "2023 - 2024",
    description: "Focused on project management, strategic management and digital innovation. Graduated with honors and received the Global Leadership Programme Award for Leadership initiatives.",
    color: "bg-brand-blue/10 border-brand-blue/20",
  },
  {
    degree: "BE in Information Technology",
    institution: "University of Pune, India",
    period: "2016 - 2020",
    description: "Focused on Software Development, DBMS, UX/UI. Youth Support Leader at Prayas Youth Forum (National NGO), India (2018 - 2021). Promoted educational and fundraising events to support youth development in underprivileged areas.",
    color: "bg-brand-purple/10 border-brand-purple/20",
  }
];

const certifications: Certification[] = [
  {
    name: "Certified Scrum Product Owner (CSPO)",
    issuer: "Scrum Alliance",
    year: "2024",
    color: "bg-brand-green/10",
  },
  {
    name: "AI for Product Management Certification",
    issuer: "Pendo/Mind the product",
    year: "2024",
    color: "bg-brand-orange/10",
  },
  {
    name: "Bloomberg Finance Fundamentals",
    issuer: "Bloomberg",
    year: "2025",
    color: "bg-brand-blue/10",
  },
];

const Education: React.FC = () => {
  const containerRef = useIntersectionObserver();

  return (
    <section id="education" className="section-container" ref={containerRef}>
      <div className="text-center max-w-3xl mx-auto mb-16 reveal-item">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-foreground mb-6">
          Academic Background
        </div>
        <h2 className="section-heading">Education & Certifications</h2>
        <p className="section-subheading">
          My educational foundation combined with continuous professional development keeps me at the forefront of product innovation.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-8 reveal-item">
          <h3 className="text-2xl font-display font-semibold mb-8">Formal Education</h3>
          
          {educationItems.map((item, index) => (
            <div key={index} className={`glass-card p-8 border ${item.color}`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-medium">{item.degree}</h4>
                  <div className="text-muted-foreground">{item.institution}</div>
                </div>
                <div className="mt-2 md:mt-0 text-sm font-medium bg-white/50 px-3 py-1 rounded-full inline-flex">
                  {item.period}
                </div>
              </div>
              
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="reveal-item" style={{ animationDelay: '200ms' }}>
          <h3 className="text-2xl font-display font-semibold mb-8">Professional Certifications</h3>
          
          <div className="glass-card p-8">
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className={`${cert.color} rounded-xl p-6`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-lg font-medium">{cert.name}</h4>
                      <div className="text-muted-foreground text-sm">{cert.issuer}</div>
                    </div>
                    <div className="mt-2 md:mt-0 text-sm font-medium bg-white/70 px-3 py-1 rounded-full inline-flex">
                      {cert.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
              <h4 className="text-lg font-medium mb-2">Continuous Learning</h4>
              <p className="text-muted-foreground text-sm">
                In addition to formal certifications, I regularly participate in product management workshops, industry conferences, and online courses to stay updated with the latest trends and methodologies in product development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
