import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedPageWrapperProps {
  children: React.ReactNode;
  className?: string; // Optional className prop
}

export const AnimatedPageWrapper: React.FC<AnimatedPageWrapperProps> = ({ children, className }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.95, // Start slightly scaled down and blurred
      filter: 'blur(4px)'
    },
    in: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)', // Transition to clear
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    },
    out: {
      opacity: 0,
      scale: 0.95, // Scale down on exit
      x: [0, 3, -3, 3, 0], // A quick side-to-side shake, 5 values
      filter: ['blur(0px)', 'blur(1px)', 'blur(2px)', 'blur(3px)', 'blur(4px)'], // Progressively blur out, 5 values
      transition: {
        duration: 0.35, // Short and sharp
        ease: 'easeIn'
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className={className} // Apply optional className
    >
      {children}
    </motion.div>
  );
};
