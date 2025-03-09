import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

const navigation: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoImageUrl = "https://png.pngtree.com/png-vector/20230816/ourmid/pngtree-sticker-mcfly-boy-character-vector-sticker-clipart-png-image_6977746.png";
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 md:p-6" aria-label="Global">
        <div className="flex">
          <a href="#" className="flex items-center">
            <img src={logoImageUrl} alt="Portfolio Logo" className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="p-2 text-gray-700 rounded-md"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary/80 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="cta-button text-sm"
          >
            Get in Touch
          </a>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex justify-between items-center p-6">
          <a href="#" className="flex items-center">
            <img src={logoImageUrl} alt="Portfolio Logo" className="h-8 w-auto" />
          </a>
          <button
            type="button"
            className="p-2 text-gray-700 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-col gap-y-8 p-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="cta-button text-sm w-full mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
