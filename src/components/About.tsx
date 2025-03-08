
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
            <h2 className="section-heading">Hi, I am Vishvajeet Patil, a product management enthusiast and content creator</h2>
            <p className="text-muted-foreground mb-6">
              I'm a passionate Product Manager with over 3 years of experience in driving growth at large-scale businesses. My expertise lies in user-centric design, data-driven decision-making, and agile methodologies. I've successfully led cross-functional teams to deliver innovative solutions that drive business growth and enhance user experience. The other side of me also does Content Creation, where I post about my travel experiences and day-to-day life. I have experience in photography, video production/editing and sales, which I have been doing for a couple of years.
            </p>
            <p className="text-muted-foreground mb-6">
              I believe that true innovation isn't just about creating products; it's about addressing genuine needs and making a lasting impact. I blend thoughtful, strategic insight with practical, hands-on action, always ensuring that the human experience remains at the heart of every decision. My passion is in developing scalable solutions that not only delight users but also drive sustainable business success.
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
                src="https://images.unsplash.com/photo-1741446225398-5be662763387?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
