
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-radial from-brand-blue/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 text-center relative z-10">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-foreground animate-fade-in-down">
            <span className="animate-pulse inline-block w-2 h-2 rounded-full bg-brand-green mr-2"></span>
            Vishvajeet Patil Portfolio
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 max-w-5xl animate-fade-in">
            Crafting Digital <span className="text-brand-blue">Experiences</span> That <span className="text-brand-purple">People Love</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 animate-fade-in animation-delay-200">
            A strategic product management enthusiast focused on building intuitive products that solve real problems and deliver measurable business results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
            <a href="#projects" className="cta-button">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#about" className="secondary-button">
              Learn More About Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground">
          <span>Scroll Down</span>
          <svg className="w-6 h-6 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
