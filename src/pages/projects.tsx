import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { PixelCard } from "../components/pixel-card";
import { PixelButton } from "../components/pixel-button";
import { Connect4 } from "../components/connect4";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  details: React.ReactNode;
}

export const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "OptiConnect – AI Solver",
      description: "AI-driven Connect-4 web application that simulates intelligent gameplay using recursive evaluation and heuristic scoring.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Heuristic AI", "Recursive Search Algorithms"],
      image: "https://i.imgur.com/krYZkYu.png", // This would be replaced with the actual image in a real implementation
      details: (
        <div>
          <h3 className="font-bold text-lg mb-2">Project Overview</h3>
          <p className="mb-4">
            Connect-4, a classic alignment game, has captivated players since its commercialization in 1974. 
            This project explores its computational and strategic depth through an AI opponent built using 
            Minimax with Alpha-Beta pruning and adaptive difficulty levels.
          </p>
          
          <h3 className="font-bold text-lg mb-2">Key Features</h3>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Implemented depth-limited search and board-state heuristics to mimic strategic planning and opponent prediction</li>
            <li>Built a dynamic difficulty module that adjusts AI behavior based on selected challenge levels, enhancing user engagement</li>
            <li>Modeled decision-making patterns inspired by game theory and Minimax-style algorithms under real-time constraints</li>
          </ul>
          
          <h3 className="font-bold text-lg mb-2">Technical Implementation</h3>
          <p className="mb-4">
            The AI uses Minimax with Alpha-Beta pruning to evaluate potential moves, with a scoring heuristic 
            that considers both immediate threats and strategic positioning. The algorithm is implemented with 
            iterative deepening to provide adjustable difficulty levels.
          </p>
          
          <div className="bg-black p-4 rounded-sm mb-4 overflow-x-auto">
            <pre className="text-primary text-sm">
{`function think(node, player, recursionsRemaining) {
  for (let col = 0; col < TOTAL_COLUMNS; col++) {
    const childNode = new GameState(node);
    childNode.makeMove(player, col);
    if (recursionsRemaining > 0) {
      think(childNode, nextPlayer, recursionsRemaining - 1);
    }
    // Alpha-beta pruning
    if (player === 2 && childNode.score > node.score) {
      node.score = childNode.score; // Maximizer
    } else if (player === 1 && childNode.score < node.score) {
      node.score = childNode.score; // Minimizer
    }
  }
}`}
            </pre>
          </div>
          
          <h3 className="font-bold text-lg mb-2">Adaptive Difficulty</h3>
          <p>
            The AI features five difficulty levels, implemented through iterative deepening:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Level 1: Depth=2 (fast, weak)</li>
            <li>Level 2: Depth=3 (beginner-friendly)</li>
            <li>Level 3: Depth=4 (moderate challenge)</li>
            <li>Level 4: Depth=5 (advanced)</li>
            <li>Level 5: Depth=6 (unbeatable)</li>
          </ul>
        </div>
      )
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      <motion.h1 
        className="font-pixel text-primary text-2xl sm:text-3xl mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        PROJECTS.LIST
      </motion.h1>
      
      {selectedProject ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="mb-4">
            <PixelButton 
              onClick={() => setSelectedProject(null)}
              className="flex items-center"
            >
              <Icon icon="lucide:arrow-left" className="mr-2" />
              Back to Projects
            </PixelButton>
          </div>
          
          <PixelCard>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <div className="relative border-2 border-primary overflow-hidden pixel-corners">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 grid-rows-4 pointer-events-none">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="border border-primary opacity-20"></div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="font-bold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 border border-primary text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Keep the Connect4 component but it now only shows the Play OptiConnect button */}
                {selectedProject.id === 1 && (
                  <div className="mt-6">
                    <h3 className="font-bold mb-2">Interactive Demo</h3>
                    <Connect4 className="mt-2" />
                  </div>
                )}
              </div>
              
              <div className="w-full md:w-2/3">
                <h2 className="font-pixel text-primary text-xl mb-4">{selectedProject.title}</h2>
                {selectedProject.details}
              </div>
            </div>
          </PixelCard>
        </motion.div>
      ) : (
        <motion.div 
          className="grid grid-cols-1 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <PixelCard className="h-full">
                <div className="relative border-2 border-primary overflow-hidden pixel-corners mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 grid-rows-4 pointer-events-none">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="border border-primary opacity-20"></div>
                    ))}
                  </div>
                </div>
                
                <h2 className="font-pixel text-primary text-lg mb-2">{project.title}</h2>
                <p className="mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 border border-primary text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 border border-primary text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <PixelButton onClick={() => setSelectedProject(project)}>
                  <span className="flex items-center">
                    <Icon icon="lucide:info" className="mr-2" />
                    View Details
                  </span>
                </PixelButton>
              </PixelCard>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};
