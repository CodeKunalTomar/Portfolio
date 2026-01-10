import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const AboutPage: React.FC = () => {
  const experience = [
    {
      title: "Research Intern",
      company: "Indian Institute of Technology Mandi",
      period: "January 1, 2026 - Present",
      description: [
        "Project: Immersive VR for Multi-Hazard Preparedness: Landslides, Floods, and Earthquakes.",
        "Focus: Leveraging Extended Reality (XR) to enhance disaster resilience and training.",
        "Tech Stack: Unity Engine, OpenXR, Blender, Unity ML-Agents (Reinforcement Learning).",
      ],
    },
    {
      title: "AI and Robotics Intern",
      company: "Indian Institute Of Information Technology Allahabad",
      period: "June 2025 - August 2025",
      description: [
        "Developed and validated an autonomous UAV navigation system for GPS-denied environments.",
        "Integrated PX4 Autopilot with ROS2 using Offboard Mode for 10 Hz trajectory control.",
        "Engineered sensor-noise filtering and safety-override mechanisms using OpenCV and C++.",
        "Designed and optimized AI-driven robotic systems using Python, ROS2, and Gazebo.",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="font-pixel text-3xl sm:text-4xl text-primary mb-4 sm:mb-0">ABOUT.ME</h1>
          <a
            href="https://drive.google.com/file/d/1B169jTyNRNM3GWP7UO1Rhlb0SsdE0qDi/view"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary/10 text-primary border border-primary px-4 py-2 hover:bg-primary hover:text-black transition-colors font-pixel text-xs sm:text-sm"
          >
            <Icon icon="lucide:file-text" className="text-lg" />
            VIEW RESUME
          </a>
        </div>
        <div className="bg-black border-2 border-primary p-6 relative pixel-corners">
          <p className="leading-relaxed mb-4 text-lg">
            Final-year Computer Science student specializing in Artificial Intelligence, with hands-on experience in ROS2-based autonomous systems, scalable software development, and machine learning pipelines. Skilled in Python, C++, computer vision, algorithms, and deep learning frameworks (TensorFlow, PyTorch).
          </p>
          <p className="leading-relaxed mb-4 text-lg">
            Developed end-to-end projects in multi-robot coordination, UAV navigation, and real-time AI applications, demonstrating reliability, innovation, and technical leadership. Strong coding standards, analytical reasoning, and research-driven problem solving applied to deliver high-quality solutions in complex, interdisciplinary environments.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col h-full"
        >
          <h2 className="font-pixel text-2xl text-primary mb-4 flex items-center">
            <Icon icon="lucide:graduation-cap" className="mr-3" />
            EDUCATION
          </h2>
          <div className="bg-black border border-primary p-4 flex-1">
            <h3 className="text-xl font-bold mb-1">Medicaps University</h3>
            <p className="text-primary text-sm mb-2">Aug 2022 - April 2026 (expected)</p>
            <p className="mb-2">B.Tech in Computer Science and Engineering</p>
            <p className="text-sm text-foreground-500">CGPA: 8.81/10</p>
            <p className="text-sm mt-2">Indore, MP</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col h-full"
        >
          <h2 className="font-pixel text-2xl text-primary mb-4 flex items-center">
            <Icon icon="lucide:trophy" className="mr-3" />
            ACHIEVEMENTS
          </h2>
          <div className="bg-black border border-primary p-4 flex-1">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-bold text-primary">NPTEL Elite + Gold (Top 1%)</span>
                <br />Mobile Virtual Reality and AI (93%)
              </li>
              <li>
                <span className="font-bold text-primary">Amazon ML Challenge 2025</span>
                <br />Top 4% (Rank 3,270 of 82,790 teams)
              </li>
              <li>
                <span className="font-bold text-primary">CodeKaze 2023</span>
                <br />Rank 19 (top 0.5%)
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="font-pixel text-2xl text-primary mb-6 flex items-center">
          <Icon icon="lucide:briefcase" className="mr-3" />
          EXPERIENCE
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="bg-black border border-primary p-6 relative">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                  <p className="text-foreground-500">{exp.company}</p>
                </div>
                <span className="text-sm bg-primary/20 px-3 py-1 rounded mt-2 sm:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-foreground-400">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="font-pixel text-2xl text-primary mb-6 flex items-center">
          <Icon icon="lucide:code" className="mr-3" />
          SKILLS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            // Languages
            { name: "Python", icon: "logos:python" },
            { name: "C++", icon: "logos:c-plus-plus" },
            { name: "C", icon: "logos:c" },
            { name: "SQL", icon: "logos:mysql" },
            { name: "R", icon: "logos:r-lang" },

            // Frameworks & Platforms
            { name: "ROS2", icon: "simple-icons:ros" },
            { name: "TensorFlow", icon: "logos:tensorflow" },
            { name: "PyTorch", icon: "logos:pytorch-icon" },

            // Libraries
            { name: "NumPy", icon: "logos:numpy" },
            { name: "Pandas", icon: "logos:pandas" },
            { name: "OpenCV", icon: "logos:opencv" },
            { name: "Scikit-learn", icon: "devicon:scikitlearn" },
            { name: "Matplotlib", icon: "logos:matplotlib-icon" },

            // Simulation & Robotics
            { name: "Gazebo", icon: "simple-icons:gazebo" },
            { name: "Unity 3D", icon: "logos:unity" },
            { name: "PyBullet", icon: "mdi:robot-industrial" }, // Generic robot arm icon for PyBullet
            { name: "PX4", icon: "simple-icons:px4" },

            // Tools
            { name: "Git", icon: "logos:git-icon" },
            { name: "GitHub", icon: "logos:github-icon" },
            { name: "VS Code", icon: "logos:visual-studio-code" },
            { name: "Jupyter", icon: "logos:jupyter" },
            { name: "Linux", icon: "logos:linux-tux" },
            { name: "Anaconda", icon: "simple-icons:anaconda" },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-black border border-primary p-4 flex flex-col items-center justify-center hover:bg-white/5 transition-colors group h-32"
            >
              <Icon
                icon={skill.icon}
                className="text-4xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <span className="font-pixel text-xs text-primary text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
