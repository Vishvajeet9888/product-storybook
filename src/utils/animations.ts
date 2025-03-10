
import { useEffect, useRef } from 'react';

export function useIntersectionObserver(options = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          
          // Add a stacking effect for skills sections
          if (entry.target.parentElement?.classList.contains('space-y-6') || 
              entry.target.parentElement?.classList.contains('space-y-12')) {
            const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
            (entry.target as HTMLElement).style.zIndex = `${index + 1}`;
          }
        } else {
          // Optionally remove the class when out of view for re-animation when scrolling back up
          // entry.target.classList.remove('reveal');
        }
      });
    }, {
      threshold: 0.1,
      ...options,
    });
    
    const elements = containerRef.current?.querySelectorAll('.reveal-item');
    if (elements && elements.length > 0) {
      elements.forEach((el) => {
        el.classList.add('opacity-0');
        observer.observe(el);
      });
    }
    
    return () => {
      if (elements && elements.length > 0) {
        elements.forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, [options]);
  
  return containerRef;
}
