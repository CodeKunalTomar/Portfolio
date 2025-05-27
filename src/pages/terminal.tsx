import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Terminal } from "../components/terminal";

export const TerminalPage: React.FC = () => {
  return (
    <div>
      <motion.h1 
        className="font-pixel text-primary text-2xl sm:text-3xl mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        TERMINAL.ACCESS
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6"
      >
        <p className="flex items-center mb-4">
          <Icon icon="lucide:terminal" className="mr-2 text-primary" />
          Enter commands to interact with the system and retrieve information.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="px-3 py-1 bg-black border border-primary text-sm flex items-center">
            <span className="text-primary mr-2">$</span> help
          </div>
          <div className="px-3 py-1 bg-black border border-primary text-sm flex items-center">
            <span className="text-primary mr-2">$</span> about
          </div>
          <div className="px-3 py-1 bg-black border border-primary text-sm flex items-center">
            <span className="text-primary mr-2">$</span> skills
          </div>
          <div className="px-3 py-1 bg-black border border-primary text-sm flex items-center">
            <span className="text-primary mr-2">$</span> projects
          </div>
          <div className="px-3 py-1 bg-black border border-primary text-sm flex items-center">
            <span className="text-primary mr-2">$</span> contact
          </div>
          <div className="px-3 py-1 bg-black border border-primary text-sm flex items-center">
            <span className="text-primary mr-2">$</span> opticonnect
          </div>
          <div className="px-3 py-1 bg-black border border-primary text-sm flex items-center">
            <span className="text-primary mr-2">$</span> clear
          </div>
        </div>
      </motion.div>
      
      <Terminal />
      
      <motion.div 
        className="mt-8 bg-black border-2 border-primary p-4 pixel-corners"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="font-pixel text-primary text-lg mb-2">SYSTEM INFO</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="flex items-center">
              <span className="text-foreground-500 mr-2">OS:</span>
              <span>Portfolio.OS v1.0.0</span>
            </p>
            <p className="flex items-center">
              <span className="text-foreground-500 mr-2">Kernel:</span>
              <span>React 18.3.1</span>
            </p>
            <p className="flex items-center">
              <span className="text-foreground-500 mr-2">Shell:</span>
              <span>KT-Terminal 1.0.0</span>
            </p>
          </div>
          <div>
            <p className="flex items-center">
              <span className="text-foreground-500 mr-2">CPU:</span>
              <span>Brain Cortex Ultra</span>
            </p>
            <p className="flex items-center">
              <span className="text-foreground-500 mr-2">Memory:</span>
              <span>8.71 GB / 10.0 GB</span>
            </p>
            <p className="flex items-center">
              <span className="text-foreground-500 mr-2">Uptime:</span>
              <span>{Math.floor(Math.random() * 100)} days, {Math.floor(Math.random() * 24)} hours</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
