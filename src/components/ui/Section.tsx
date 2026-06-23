import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'primary' | 'dark' | 'light';
}

const Section: React.FC<SectionProps> = ({ children, className, id, variant = 'default' }) => {
  const variants = {
    default: 'bg-white',
    primary: 'bg-[#96e3d8]/10',
    dark: 'bg-black text-white',
    light: 'bg-gray-50',
  };

  return (
    <section
      id={id}
      className={cn('py-20 md:py-32', variants[variant], className)}
    >
      {children}
    </section>
  );
};

export default Section;
