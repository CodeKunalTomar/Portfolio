import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
// Lazy load the RobotModel
const RobotModel = React.lazy(() => import('../components/RobotModel'));
import { PixelCard } from "../components/pixel-card";

export const HomePage = () => {
  const containerRef = useRef(null);

  const socialLinks = [
    { icon: "lucide:github", href: "https://github.com/kunaltomarmu26", label: "GitHub" },
    { icon: "lucide:linkedin", href: "https://www.linkedin.com/in/kunal-tomar-2026mu/", label: "LinkedIn" },
    { icon: "lucide:mail", href: "mailto:kunaltomarmu26@gmail.com", label: "Email" },
  ];

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col items-center justify-start p-4 relative overflow-x-hidden">

      {/* HERO SECTION */}
      <main className="z-10 container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 mt-10 md:mt-20 mb-20">

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h2 className="text-xl md:text-2xl text-primary font-pixel">HELLO_WORLD</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter glitch-text" data-text="KUNAL TOMAR">
              KUNAL TOMAR
            </h1>
            <h3 className="text-xl md:text-2xl text-foreground-500 font-pixel mt-2">
              FINAL-YEAR CS STUDENT & <br />
              <span className="text-primary">AI & ROBOTICS ENGINEER</span>
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-foreground-400 max-w-lg text-sm md:text-base leading-relaxed border-l-2 border-primary pl-4"
          >
            Passionate about building intelligent systems.
            Merging <strong className="text-foreground">Computer Vision</strong>,
            <strong className="text-foreground"> ROS2</strong>, and
            <strong className="text-foreground"> Machine Learning</strong> to create autonomous solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link
              to="/projects"
              className="px-6 py-3 bg-primary text-background font-bold font-pixel hover:bg-opacity-80 transition-all transform hover:scale-105"
            >
              VIEW_PROJECTS
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-primary text-primary font-bold font-pixel hover:bg-primary hover:text-background transition-all"
            >
              CONTACT_ME
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex gap-4 pt-8"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-500 hover:text-primary transition-colors hover:scale-110 transform"
                title={link.label}
              >
                <Icon icon={link.icon} width="24" height="24" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* 3D Model */}
        <div className="w-full md:w-1/2 flex justify-center items-center h-[300px] md:h-[400px] mb-8 md:mb-0 relative z-20">
          <React.Suspense fallback={<div className="flex items-center justify-center h-full w-full border border-primary/30 bg-primary/5 text-primary font-pixel animate-pulse"> INITIALIZING_SYSTEM... </div>}>
            <RobotModel />
          </React.Suspense>
        </div>

      </main>

      {/* SKILLS GRID (Preserved) */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <PixelCard title="SKILLS" className="h-full">
          <ul className="space-y-2">
            <li className="flex items-center">
              <Icon icon="lucide:code" className="mr-2 text-primary" />
              Python, C++, C, SQL
            </li>
            <li className="flex items-center">
              <Icon icon="lucide:cpu" className="mr-2 text-primary" />
              ROS2, TensorFlow, PyTorch
            </li>
            <li className="flex items-center">
              <Icon icon="lucide:eye" className="mr-2 text-primary" />
              OpenCV, Computer Vision
            </li>
            <li className="flex items-center">
              <Icon icon="lucide:box" className="mr-2 text-primary" />
              PyBullet, Gazebo
            </li>
          </ul>
        </PixelCard>

        <PixelCard title="EDUCATION" className="h-full">
          <div className="flex flex-col h-full">
            <p className="font-bold">Medicaps University</p>
            <p className="text-sm">B.Tech in CSE</p>
            <p className="text-xs text-foreground-500">2022–2026</p>
            <div className="mt-auto flex items-center">
              <span className="text-primary font-bold">CGPA:</span>
              <div className="ml-2 bg-black border border-primary w-full h-4 pixel-corners">
                <div className="bg-primary h-full" style={{ width: '88.1%' }}></div>
              </div>
              <span className="ml-2">8.81</span>
            </div>
          </div>
        </PixelCard>

        <PixelCard title="INTERESTS" className="h-full">
          <ul className="space-y-2">
            <li className="flex items-center">
              <Icon icon="lucide:bot" className="mr-2 text-primary" />
              Autonomous Systems
            </li>
            <li className="flex items-center">
              <Icon icon="lucide:plane" className="mr-2 text-primary" />
              UAV Navigation
            </li>
            <li className="flex items-center">
              <Icon icon="lucide:brain" className="mr-2 text-primary" />
              Deep Learning
            </li>
            <li className="flex items-center">
              <Icon icon="lucide:users" className="mr-2 text-primary" />
              Multi-Robot Coordination
            </li>
          </ul>
        </PixelCard>

        <PixelCard title="CONNECT" className="h-full">
          <div className="flex flex-col space-y-3">
            <a href="mailto:kunaltomarmu26@gmail.com" className="flex items-center hover:text-primary transition-colors">
              <Icon icon="lucide:mail" className="mr-2 text-primary" />
              Email Me
            </a>
            <a href="https://github.com/CodeKunalTomar" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
              <Icon icon="lucide:github" className="mr-2 text-primary" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/kunal-tomar1" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
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

      {/* Decorative Elements */}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block pointer-events-none">
        <Icon icon="lucide:arrow-down" className="text-primary text-2xl opacity-50" />
      </div>

    </div>
  );
};
