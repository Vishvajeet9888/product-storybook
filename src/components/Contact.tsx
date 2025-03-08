
import React from 'react';
import { useIntersectionObserver } from '../utils/animations';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const containerRef = useIntersectionObserver();

  return (
    <section id="contact" className="bg-secondary/50">
      <div className="section-container" ref={containerRef}>
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-item">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-foreground mb-6">
            Get In Touch
          </div>
          <h2 className="section-heading">Contact Details</h2>
          <p className="section-subheading">
            Interested in working together? I'd love to hear from you. Reach out through any of the channels below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="glass-card p-8 reveal-item">
            <h3 className="text-2xl font-display font-semibold mb-8">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300"
                  required
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="cta-button w-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div className="space-y-8 reveal-item" style={{ animationDelay: '200ms' }}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-display font-semibold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Email</h4>
                    <a href="mailto:contact@productmanager.com" className="text-lg hover:text-brand-blue transition-colors duration-300">
                      contact@productmanager.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">LinkedIn</h4>
                    <a href="https://linkedin.com/in/productmanager" target="_blank" rel="noreferrer" className="text-lg hover:text-brand-purple transition-colors duration-300">
                      linkedin.com/in/productmanager
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Phone</h4>
                    <a href="tel:+11234567890" className="text-lg hover:text-brand-green transition-colors duration-300">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Location</h4>
                    <p className="text-lg">
                      San Francisco, California
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-xl font-display font-semibold mb-6">Office Hours</h3>
              <p className="text-muted-foreground mb-4">
                I'm available for calls and meetings during the following hours:
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekends</span>
                  <span>By appointment</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-brand-blue/10 rounded-xl">
              <p className="text-center text-muted-foreground">
                Looking forward to connecting and discussing how I can help bring your product vision to life!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
