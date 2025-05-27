import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { PixelButton } from "./pixel-button";

interface Connect4Props {
  className?: string;
}

export const Connect4: React.FC<Connect4Props> = ({ className = "" }) => {
  return (
    <div className={`${className} flex flex-col items-center`}>
      <div className="flex items-center justify-center">
        <a 
          href="https://opticonnect.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="pixel-btn flex items-center"
        >
          <Icon icon="lucide:external-link" className="mr-2" />
          Play OptiConnect
        </a>
      </div>
    </div>
  );
};
