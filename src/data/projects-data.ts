import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  details: React.ReactNode;
}

export const projectsData: Project[] = [
  {
    id: 'opticonnect-ai-solver',
    title: "OptiConnect – AI Solver",
    description: "AI-driven Connect-4 web game with intelligent gameplay using Minimax and heuristic scoring.",
    category: "AI/ML Game",
    technologies: ["JavaScript", "HTML5", "CSS3", "Heuristic AI", "Minimax"],
    image: "https://i.imgur.com/krYZkYu.png",
    githubUrl: "https://github.com/CodeKunalTomar/OptiConnect",
    liveDemoUrl: "https://opticonnect.vercel.app/",
    details: (
      <div>
        <p>An AI driven Connect-4 game demonstrating strategic algorithms. Features adaptive difficulty levels based on Minimax search depth.</p>
        <p>Further details can include key learnings, challenges, and specific contributions if this were a real project description.</p>
      </div>
    )
  },
  {
    id: 'personal-portfolio-v2',
    title: "Interactive Developer Portfolio",
    description: "The very portfolio you are viewing, built with React, TypeScript, TailwindCSS, and Framer Motion, featuring a modern-retro theme.",
    category: "Web Development",
    technologies: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Vite"],
    image: "https://img.heroui.chat/image/webdev?w=600&h=400&u=2", // Placeholder image
    githubUrl: "https://github.com/CodeKunalTomar/Portfolio",
    liveDemoUrl: "#", // Links to current page or can be the actual deployment URL
    details: (
      <div>
        <p>A personal website designed to showcase projects and skills, emphasizing a unique user experience through animations and an interactive terminal.</p>
      </div>
    )
  }
];
