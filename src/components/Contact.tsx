
import React, { useState } from 'react';
import { useIntersectionObserver } from '../utils/animations';
import { Mail, Linkedin, Phone, MapPin, Instagram } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const containerRef = useIntersectionObserver();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using FormSubmit.co as a simple email forwarding service
      const response = await fetch(`https://formsubmit.co/vishvajeet.patil.work@gmail.com`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-secondary/50 relative">
      <ParticleBackground className="opacity-20" />
      <div className="section-container relative z-10" ref={containerRef}>
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
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                  value={formData.subject}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300"
                  required
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="cta-button w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
                    <a href="mailto:vishvajeet.patil.work@gmail.com" className="text-lg hover:text-brand-blue transition-colors duration-300">
                      vishvajeet.patil.work@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">LinkedIn</h4>
                    <a href="https://linkedin.com/in/vishvajeet-patil-ucd/" target="_blank" rel="noreferrer" className="text-lg hover:text-brand-purple transition-colors duration-300">
                      linkedin.com/in/vishvajeet-patil-ucd/
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Phone</h4>
                    <a href="tel:+353899522469" className="text-lg hover:text-brand-green transition-colors duration-300">
                      +353 0899522469
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500/10 text-pink-500">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Instagram</h4>
                    <a
                      href="https://www.instagram.com/iam__vishu___?igsh=MWtzdHd5bW50eDYyeA%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg hover:text-pink-500 transition-colors duration-300"
                    >
                      iam__vishu___
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
                      Dublin, Ireland
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
                <div className="flex justify-between items-center">
                  <span>Monday - Friday</span>
                  <span className="text-right">9:00 AM - 5:00 PM GMT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Weekends</span>
                  <span className="text-left">By appointment</span>
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
