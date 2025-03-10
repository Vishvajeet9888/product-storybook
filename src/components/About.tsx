import React from 'react';
import { useIntersectionObserver } from '../utils/animations';
import ParticleBackground from './ParticleBackground';

const About: React.FC = () => {
  const containerRef = useIntersectionObserver();

  return (
    <section id="about" className="section-container relative" ref={containerRef}>
      <ParticleBackground className="opacity-30" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
        <div className="order-2 md:order-1">
          <div className="reveal-item">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-blue/10 text-brand-blue mb-6">
              About Me
            </div>
            <h2 className="section-heading">Hi 🙋🏻‍♂️, I am Vishvajeet Patil, a Product Management enthusiast and Content Creator</h2>
            <p className="text-muted-foreground mb-6">
              I'm a passionate Product Manager with over 3 years of experience in driving growth at large-scale businesses. My expertise lies in user-centric design, data-driven decision-making, and agile methodologies. I've successfully led cross-functional teams to deliver innovative solutions that drive business growth and enhance user experience. Outside of work, I'm also a content creator, sharing my travel stories and everyday moments. With experience in photography, video production, editing, and sales, I've spent the past few years honing these creative skills alongside my professional journey.
            </p>
            <p className="text-muted-foreground mb-6">
              I believe true innovation goes beyond building products it's about solving real problems and creating meaningful impact. I combine strategic thinking with practical execution, always keeping the human experience at the center of my decisions. My passion lies in developing scalable solutions that not only enhance user satisfaction but also drive long-term business success.
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
                src="https://images.unsplash.com/photo-1741462969055-d5a9908ecbcf?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
