'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'flip';
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '' 
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animations = {
    'fade-up': 'translate-y-12 opacity-0',
    'fade-down': '-translate-y-12 opacity-0',
    'fade-left': 'translate-x-12 opacity-0',
    'fade-right': '-translate-x-12 opacity-0',
    'zoom-in': 'scale-90 opacity-0',
    'flip': 'rotateX-90 opacity-0',
  };

  const visibleState = 'translate-y-0 translate-x-0 scale-100 opacity-100';

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? visibleState : animations[animation]
      } ${className}`}
      style={{ 
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
}

