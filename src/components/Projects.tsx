
import React from 'react';
import { useIntersectionObserver } from '../utils/animations';
import { ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  role: string;
  challenge: string;
  solution: string;
  outcome: string;
  image: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "FinTech Mobile App Redesign",
    description: "Led the redesign of a mobile banking application to improve user experience and increase engagement.",
    role: "Senior Product Manager",
    challenge: "The existing app had poor user retention and high drop-off rates during key financial transactions.",
    solution: "Conducted extensive user research to identify pain points and developed a simplified user flow with improved navigation and visual design.",
    outcome: "40% increase in daily active users, 25% reduction in support tickets, and 35% improvement in transaction completion rates.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    color: "bg-brand-blue/10 border-brand-blue/20",
  },
  {
    title: "Healthcare Patient Portal",
    description: "Developed a patient portal for a major healthcare provider to streamline appointment scheduling and medical record access.",
    role: "Product Manager",
    challenge: "The existing system required patients to navigate multiple platforms and created confusion and frustration.",
    solution: "Created a unified portal with intuitive interfaces for appointment booking, telehealth, and medical records access.",
    outcome: "90% patient satisfaction rating, 50% reduction in missed appointments, and $2.3M annual savings in operational costs.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    color: "bg-brand-purple/10 border-brand-purple/20",
  },
];

const Projects: React.FC = () => {
  const containerRef = useIntersectionObserver();

  return (
    <section id="projects" className="section-container" ref={containerRef}>
      <div className="text-center max-w-3xl mx-auto mb-16 reveal-item">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-foreground mb-6">
          Portfolio Showcase
        </div>
        <h2 className="section-heading">Projects & Case Studies</h2>
        <p className="section-subheading">
          A selection of my best work that demonstrates my approach to product management and problem-solving.
        </p>
      </div>
      
      <div className="space-y-24">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center reveal-item"
          >
            <div className={index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
              <div className={`rounded-3xl overflow-hidden border ${project.color}`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-80 object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>
            
            <div className={index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
              <h3 className="text-2xl font-display font-semibold mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Role</h4>
                  <p className="text-muted-foreground">{project.role}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Challenge</h4>
                  <p className="text-muted-foreground">{project.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Solution</h4>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Outcome</h4>
                  <p className="text-muted-foreground">{project.outcome}</p>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="group inline-flex items-center text-sm font-medium text-foreground hover:text-primary/80 transition-all duration-300">
                  View Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
