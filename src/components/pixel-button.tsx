import React from "react";
import { motion } from "framer-motion";

interface PixelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const PixelButton: React.FC<PixelButtonProps> = ({ 
  children, 
  onClick, 
  className = "",
  type = "button"
}) => {
  return (
    <motion.button
      type={type}
      className={`pixel-btn ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.button>
  );
};
