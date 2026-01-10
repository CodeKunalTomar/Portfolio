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
      id: 3,
      title: "Autonomous GPS-Denied Drone Navigation",
      description: "Production-ready autonomous navigation system featuring real-time obstacle detection and PX4 integration.",
      technologies: ["ROS2", "PX4", "OpenCV", "Python", "C++"],
      image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      details: (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-500/20 text-green-500 px-3 py-1 text-sm font-bold border border-green-500">
              COMPLETE & TESTED
            </span>
          </div>

          <h3 className="font-bold text-lg mb-2">Project Overview</h3>
          <p className="mb-4">
            A production-ready autonomous navigation system for drones operating in GPS-denied environments. Features real-time obstacle detection, intelligent path planning, and direct PX4 autopilot integration.
          </p>

          <h3 className="font-bold text-lg mb-2">System Capabilities</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Real-Time Obstacle Detection:</strong> 10Hz processing with &lt;100ms emergency avoidance response.</li>
            <li><strong>GPS-Denied Navigation:</strong> Autonomous waypoint following and dynamic path planning.</li>
            <li><strong>PX4 Integration:</strong> Direct ROS2 bridge for trajectory setpoint control.</li>
            <li><strong>Safety Critical:</strong> Obstacle detection override capabilities for safe operation.</li>
          </ul>

          <h3 className="font-bold text-lg mb-2">Architecture</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Core:</strong> ROS2 Humble, PX4 Autopilot</li>
            <li><strong>Vision:</strong> OpenCV + cv_bridge (Depth image analysis)</li>
            <li><strong>Mapping:</strong> rtabmap (Visual SLAM)</li>
          </ul>

          <div className="mt-6">
            <h3 className="font-bold mb-2">Links</h3>
            <a
              href="https://github.com/CodeKunalTomar/autonomous-gps-denied-drone-navigation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center"
            >
              <Icon icon="lucide:github" className="mr-2" />
              GitHub Repository
            </a>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Autonomous Multi-Robot Coordination System",
      description: "A ROS2-based system for synchronized control of dual 7-DOF robotic arms with real-time computer vision.",
      technologies: ["Python", "C++", "ROS2", "OpenCV", "PyBullet"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      details: (
        <div>
          <h3 className="font-bold text-lg mb-2">Project Overview</h3>
          <p className="mb-4">
            Designed and developed an autonomous multi-robot coordination system integrating ROS2-based communication, real-time computer vision, and inverse kinematics for synchronized control of dual 7-DOF robotic arms in a PyBullet simulation environment.
          </p>

          <h3 className="font-bold text-lg mb-2">Key Features</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Implemented a multi-camera vision pipeline using OpenCV, Hough transforms, and Bayesian confidence scoring, enabling robust object detection and spatial awareness.</li>
            <li>Developed a ROS2 communication architecture with custom message definitions and optimized QoS configurations for reliable multi-robot operation.</li>
            <li>Engineered a damped least squares inverse kinematics solver and collision-avoidance framework, achieving smooth trajectory planning and safe cooperative motion.</li>
            <li>Achieved synchronized control of dual 7-DOF robotic arms in simulation.</li>
          </ul>
        </div>
      )
    },
    {
      id: 2,
      title: "OptiConnect: Connect-4 AI",
      description: "Browser-based Connect-4 game with non-blocking AI opponent using Web Workers and Minimax algorithm.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Web Workers", "Minimax"],
      image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      details: (
        <div>
          <h3 className="font-bold text-lg mb-2">Project Overview</h3>
          <p className="mb-4">
            Built a browser-based 7x7 Connect-4 game with an AI opponent, using JavaScript and Web Workers to enable concurrent computation while keeping the interface smooth and responsive.
          </p>

          <h3 className="font-bold text-lg mb-2">Key Features</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Designed a modular architecture separating UI handling and background computation using Web Workers.</li>
            <li>Implemented a depth-limited minimax algorithm with randomized tie-breaking for decision quality and performance.</li>
            <li>Optimized for large search spaces with efficient tree traversal.</li>
            <li>Delivered a polished user experience with animated chip drops and real-time win highlighting.</li>
          </ul>

          <div className="mt-6">
            <h3 className="font-bold mb-2">Links</h3>
            <a
              href="https://opticonnect.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center"
            >
              <Icon icon="lucide:external-link" className="mr-2" />
              Live Demo
            </a>
          </div>
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

                {selectedProject.id === 2 && (
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
