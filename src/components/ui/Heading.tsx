import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeadingProps {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ level = 'h2', children, className, animate = true }) => {
  const baseStyles = 'font-bold tracking-tight text-black font-caveat';
  
  const sizes = {
    h1: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
    h2: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
    h3: 'text-2xl sm:text-3xl md:text-4xl',
    h4: 'text-xl sm:text-2xl md:text-3xl',
    h5: 'text-lg sm:text-xl md:text-2xl',
    h6: 'text-base sm:text-lg md:text-xl',
  };

  const Component = level;

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Component className={cn(baseStyles, sizes[level], className)}>
          {children}
        </Component>
      </motion.div>
    );
  }

  return (
    <Component className={cn(baseStyles, sizes[level], className)}>
      {children}
    </Component>
  );
};

export default Heading;
