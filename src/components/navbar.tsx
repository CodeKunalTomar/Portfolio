import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const Navbar: React.FC = () => {
  const location = useLocation();
  
  const links = [
    { path: "/", label: "Home", icon: "lucide:home" },
    { path: "/about", label: "About", icon: "lucide:user" },
    { path: "/projects", label: "Projects", icon: "lucide:code" },
    { path: "/terminal", label: "Terminal", icon: "lucide:terminal" },
    { path: "/contact", label: "Contact", icon: "lucide:mail" },
  ];

  return (
    <header className="border-b-2 border-primary bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary flex items-center justify-center group-hover:animate-pulse">
              <span className="font-pixel text-black text-lg">KT</span>
            </div>
            <span className="font-pixel text-primary text-xl hidden sm:block group-hover:animate-glitch">KUNAL.DEV</span>
          </Link>
          
          <nav>
            <ul className="flex space-x-1 sm:space-x-4">
              {links.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className={`relative px-2 py-2 flex flex-col items-center text-xs sm:text-sm ${
                      location.pathname === link.path 
                        ? "text-primary" 
                        : "text-foreground-500 hover:text-primary"
                    }`}
                  >
                    <Icon icon={link.icon} className="text-xl mb-1" />
                    <span className="hidden sm:block">{link.label}</span>
                    {location.pathname === link.path && (
                      <motion.div 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                        layoutId="navbar-indicator"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
