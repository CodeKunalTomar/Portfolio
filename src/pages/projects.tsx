import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // Ensure AnimatePresence is imported
import { Icon } from "@iconify/react";
import { PixelCard } from "../components/pixel-card";
import { PixelButton } from "../components/pixel-button";
import { Project, projectsData } from "../data/projects-data";

export const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

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

  const imageContainerVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.3 } }
  };
  const overlayVariants = {
    rest: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.05 } }
  };
  const linkPopupVariant = {
    rest: { opacity: 0, scale: 0.9 },
    hover: { opacity: 1, scale: 1 }
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

      <AnimatePresence mode="wait">
        {selectedProject ? (
          <motion.div
            key="project-detail" // Add key for AnimatePresence
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
                    <motion.img // Changed to motion.img, added layoutId and layout
                      layoutId={`project-image-${selectedProject.id}`}
                      layout
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

                  {selectedProject.liveDemoUrl && selectedProject.liveDemoUrl !== "#" && (
                    <div className="mt-6">
                       <h3 className="font-bold mb-2">Live Demo</h3>
                       <PixelButton
                          onClick={() => window.open(selectedProject.liveDemoUrl, "_blank")}
                          className="mt-2"
                        >
                         <Icon icon="lucide:play" className="mr-2" />
                         View Live Demo
                       </PixelButton>
                    </div>
                  )}
                   {selectedProject.githubUrl && (
                    <div className="mt-4">
                       <h3 className="font-bold mb-2">Source Code</h3>
                       <PixelButton
                          onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                          className="mt-2"
                        >
                         <Icon icon="lucide:github" className="mr-2" />
                         View on GitHub
                       </PixelButton>
                    </div>
                  )}
                </div>

                <div className="w-full md:w-2/3">
                  <motion.h2 // Changed to motion.h2, added layoutId and layout
                    layoutId={`project-title-${selectedProject.id}`}
                    layout
                    className="font-pixel text-primary text-xl mb-4"
                  >
                    {selectedProject.title}
                  </motion.h2>
                  {selectedProject.details}
                </div>
              </div>
            </PixelCard>
          </motion.div>
        ) : (
          <motion.div
            key="project-list" // Add key for AnimatePresence
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }} // Added exit for list view
          >
            {projectsData.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <PixelCard className="h-full flex flex-col">
                  <motion.div // Image container - Added layoutId and layout
                    layoutId={`project-image-${project.id}`}
                    layout
                    className="relative border-2 border-primary overflow-hidden pixel-corners mb-4"
                    variants={imageContainerVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 grid-rows-4 pointer-events-none">
                      {Array.from({ length: 16 }).map((_, i) => (<div key={i} className="border border-primary opacity-20"></div>))}
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center gap-2 p-2"
                      variants={overlayVariants}
                    >
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variants={linkPopupVariant}
                          className="w-full px-2"
                        >
                          <PixelButton className="text-xs px-3 py-1.5 w-full">
                            <Icon icon="lucide:github" className="mr-1.5" /> GitHub
                          </PixelButton>
                        </motion.a>
                      )}
                      {project.liveDemoUrl && project.liveDemoUrl !== "#" && (
                        <motion.a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variants={linkPopupVariant}
                          className="w-full px-2"
                        >
                          <PixelButton className="text-xs px-3 py-1.5 w-full">
                            <Icon icon="lucide:external-link" className="mr-1.5" /> Live Demo
                          </PixelButton>
                        </motion.a>
                      )}
                    </motion.div>
                  </motion.div>

                  <div className="p-4 pt-0 flex flex-col flex-grow">
                    <p className="text-xs text-primary mb-1 font-pixel tracking-wider">{project.category.toUpperCase()}</p>
                    <motion.h2 // Changed to motion.h2, added layoutId and layout
                      layoutId={`project-title-${project.id}`}
                      layout
                      className="font-pixel text-primary text-lg mb-2"
                    >
                      {project.title}
                    </motion.h2>
                    <p className="text-sm mb-3 h-12 overflow-hidden text-ellipsis">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="px-1.5 py-0.5 border border-primary text-xs bg-black bg-opacity-30">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-1.5 py-0.5 border border-primary text-xs bg-black bg-opacity-30">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="mt-auto">
                      <PixelButton onClick={() => setSelectedProject(project)} className="w-full">
                        <span className="flex items-center justify-center">
                          <Icon icon="lucide:info" className="mr-2" />
                          View Details
                        </span>
                      </PixelButton>
                    </div>
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
