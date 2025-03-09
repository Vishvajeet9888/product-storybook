import React from 'react';
import { Linkedin, Mail, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="font-display font-bold text-2xl mb-4">Portfolio</div>
            <p className="text-gray-300 mb-6 max-w-md">
              A product management enthusiast focused on creating user-centered digital experiences that drive business growth and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Site Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-300">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a>
              </li>
              <li>
                <a href="#education" className="text-gray-300 hover:text-white transition-colors duration-300">Education</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Download</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://drive.google.com/drive/folders/1jIhMOQTi6MUcGvIqfYjKxYuUrSltbbSj?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Vishvajeet Patil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
