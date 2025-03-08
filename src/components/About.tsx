
import React from 'react';
import { useIntersectionObserver } from '../utils/animations';

const About: React.FC = () => {
  const containerRef = useIntersectionObserver();

  return (
    <section id="about" className="section-container" ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="order-2 md:order-1">
          <div className="reveal-item">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-blue/10 text-brand-blue mb-6">
              About Me
            </div>
            <h2 className="section-heading">Product Leader Focused on User-Centered Design</h2>
            <p className="text-muted-foreground mb-6">
              I'm a strategic product manager with over 8 years of experience building digital products that users love. My approach combines deep user empathy with data-driven decision making.
            </p>
            <p className="text-muted-foreground mb-6">
              Throughout my career, I've led cross-functional teams to deliver innovative solutions across fintech, healthcare, and e-commerce industries. I excel at identifying market opportunities, defining clear product roadmaps, and executing with precision.
            </p>
            <p className="text-muted-foreground mb-8">
              My passion lies in solving complex problems through elegant, intuitive designs that create meaningful impact for users and businesses alike.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="cta-button">
                Download Resume
              </div>
              <a href="#contact" className="secondary-button">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="reveal-item relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                alt="Professional headshot" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-purple/20 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-blue/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
