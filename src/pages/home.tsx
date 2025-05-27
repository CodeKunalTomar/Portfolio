import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { PixelButton } from "../components/pixel-button";
import { PixelCard } from "../components/pixel-card";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-pixel text-primary text-2xl sm:text-3xl md:text-4xl mb-4">
            <span className="block">KUNAL TOMAR</span>
            <span className="block text-foreground-500">AI ENGINEER</span>
          </h1>
          
          <p className="mb-6 text-lg">
            B.Tech student specializing in Computer Science and Engineering with a focus on 
            <span className="text-primary"> Artificial Intelligence</span>.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/terminal">
              <PixelButton>
                <span className="flex items-center">
                  <Icon icon="lucide:terminal" className="mr-2" />
                  Open Terminal
                </span>
              </PixelButton>
            </Link>
            
            <Link to="/projects">
              <PixelButton>
                <span className="flex items-center">
                  <Icon icon="lucide:code" className="mr-2" />
                  View Projects
                </span>
              </PixelButton>
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full h-64 md:h-80 relative overflow-hidden pixel-corners border-2 border-primary">
            <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
            <img 
              src="https://img.heroui.chat/image/ai?w=600&h=400&u=1" 
              alt="AI Visualization" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 grid-rows-4 z-20 pointer-events-none">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="border border-primary opacity-20"></div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3 z-30">
              <p className="text-primary font-pixel text-xs">AI.ENGINEER // SYSTEM.READY</p>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary bg-black z-30 pixel-corners flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Icon icon="lucide:cpu" className="text-primary text-4xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <PixelCard title="SKILLS" className="h-full">
          <ul className="space-y-2">
            <li className="flex items-center">
              <Icon icon="lucide:code" className="mr-2 text-primary" />
              Python, C, C++, R
            </li>
            <li className="flex items-center">
              <Icon icon="lucide:brain" className="mr-2 text-primary" />
              Machine Learning
            </li>
            <li className="flex items-center">
              <Icon icon="lucide:bar-chart" className="mr-2 text-primary" />
              Data Analysis
            </li>
            <li className="flex items-center">
              <Icon icon="lucide:globe" className="mr-2 text-primary" />
              Web Technologies
            </li>
          </ul>
        </PixelCard>
        
        <PixelCard title="EDUCATION" className="h-full">
          <div className="flex flex-col h-full">
            <p className="font-bold">Medicaps University</p>
            <p className="text-sm">B.Tech in CSE (AI)</p>
            <p className="text-xs text-foreground-500">2022–2026</p>
            <div className="mt-auto flex items-center">
              <span className="text-primary font-bold">CGPA:</span>
              <div className="ml-2 bg-black border border-primary w-full h-4 pixel-corners">
                <div className="bg-primary h-full" style={{ width: '87.1%' }}></div>
              </div>
              <span className="ml-2">8.71</span>
            </div>
          </div>
        </PixelCard>
        
        <PixelCard title="INTERESTS" className="h-full">
          <ul className="space-y-2">
            <li className="flex items-center">
              <Icon icon="lucide:database" className="mr-2 text-primary" />
              Data Analytics
            </li>
            <li className="flex items-center">
              <Icon icon="lucide:eye" className="mr-2 text-primary" />
              Computer Vision
            </li>
            <li className="flex items-center">
              <Icon icon="lucide:lightbulb" className="mr-2 text-primary" />
              AI-driven Solutions
            </li>
            <li className="flex items-center">
              <Icon icon="lucide:trending-up" className="mr-2 text-primary" />
              Predictive Modeling
            </li>
          </ul>
        </PixelCard>
        
        <PixelCard title="CONNECT" className="h-full">
          <div className="flex flex-col space-y-3">
            <a href="mailto:kunaltomarmu26@gmail.com" className="flex items-center hover:text-primary transition-colors">
              <Icon icon="lucide:mail" className="mr-2 text-primary" />
              Email
            </a>
            <a href="https://github.com/CodeKunalTomar" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
              <Icon icon="lucide:github" className="mr-2 text-primary" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/kunal-tomar-ab0960248/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
              <Icon icon="lucide:linkedin" className="mr-2 text-primary" />
              LinkedIn
            </a>
            <Link to="/contact" className="flex items-center hover:text-primary transition-colors">
              <Icon icon="lucide:message-square" className="mr-2 text-primary" />
              Contact Form
            </Link>
          </div>
        </PixelCard>
      </div>
    </div>
  );
};
