import React from "react";
import { motion } from "framer-motion";

interface PixelCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const PixelCard: React.FC<PixelCardProps> = ({ title, children, className = "" }) => {
  return (
    <motion.div 
      className={`bg-content1 border-2 border-primary pixel-corners shadow-[0_0_10px_rgba(0,255,0,0.2)] ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ boxShadow: "0 0 15px rgba(0,255,0,0.3)" }}
    >
      {title && (
        <div className="border-b-2 border-primary px-4 py-2 bg-black">
          <h3 className="font-pixel text-primary text-sm">{title}</h3>
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
    </motion.div>
  );
};
