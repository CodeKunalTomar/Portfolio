
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useTheme } from "../context/ThemeContext";
import { useSound } from "../context/SoundContext";

const ThemeToggle = () => {
  const { currentTheme, setTheme, availableThemes } = useTheme();
  const { play } = useSound();

  const toggleTheme = () => {
    play('click');
    const currentIndex = availableThemes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % availableThemes.length;
    setTheme(availableThemes[nextIndex]);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center space-x-2 text-primary hover:text-white transition-colors p-2"
      title="Switch Theme"
    >
      <Icon icon="lucide:palette" className="text-xl" />
    </button>
  );
};

const SoundToggle = () => {
  const { isMuted, toggleMute, play } = useSound();

  const handleToggle = () => {
    toggleMute();
    if (isMuted) play('click');
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center space-x-2 text-primary hover:text-white transition-colors p-2"
      title={isMuted ? "Unmute" : "Mute"}
    >
      <Icon icon={isMuted ? "lucide:volume-x" : "lucide:volume-2"} className="text-xl" />
    </button>
  );
};

const SystemClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hidden md:flex flex-col items-end text-xs text-primary font-pixel border-l-2 border-primary pl-4 ml-4">
      <span>SYS.TIME</span>
      <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
    </div>
  );
};

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { play } = useSound();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Home", icon: "lucide:home" },
    { path: "/about", label: "About", icon: "lucide:user" },
    { path: "/projects", label: "Projects", icon: "lucide:code" },
    { path: "/terminal", label: "Terminal", icon: "lucide:terminal" },
    { path: "/contact", label: "Contact", icon: "lucide:mail" },
    { path: "https://drive.google.com/file/d/1B169jTyNRNM3GWP7UO1Rhlb0SsdE0qDi/view", label: "Resume", icon: "lucide:file", isExternal: true },
  ];

  return (
    <header className="border-b-2 border-primary bg-background/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onMouseEnter={() => play('hover')}
            onClick={() => play('click')}
          >
            <div className="w-10 h-10 bg-primary flex items-center justify-center group-hover:bg-foreground group-hover:text-primary transition-colors">
              <span className="font-pixel text-background group-hover:text-primary text-xl font-bold">KT</span>
            </div>
            <div className="flex flex-col">
              <span className="font-pixel text-primary text-lg tracking-widest group-hover:animate-glitch">KUNAL.DEV</span>
              <span className="text-[10px] text-primary/70 tracking-tighter">SYSTEM: ONLINE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {/* Controls */}
            <div className="flex items-center mr-6 border-r-2 border-primary pr-6 space-x-2">
              <ThemeToggle />
              <SoundToggle />
            </div>

            <nav>
              <ul className="flex space-x-6">
                {links.map((link) => (
                  <li key={link.path}>
                    {link.isExternal ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center space-x-1 text-sm font-pixel text-foreground/70 hover:text-primary transition-colors py-2"
                        onMouseEnter={() => play('hover')}
                        onClick={() => play('click')}
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">[</span>
                        <span className="group-hover:text-primary">{link.label}</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">]</span>
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className={`group relative flex items-center space-x-1 text-sm font-pixel py-2 ${location.pathname === link.path ? "text-primary" : "text-foreground/70 hover:text-primary"
                          }`}
                        onMouseEnter={() => play('hover')}
                        onClick={() => play('click')}
                      >
                        <span className={`${location.pathname === link.path ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity`}>[</span>
                        <span>{link.label}</span>
                        <span className={`${location.pathname === link.path ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity`}>]</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <SystemClock />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <SoundToggle />
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                play('click');
              }}
              className="text-primary focus:outline-none"
            >
              <Icon icon={isMenuOpen ? "lucide:x" : "lucide:menu"} className="text-3xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b-2 border-primary overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                {links.map((link) => (
                  <li key={link.path}>
                    {link.isExternal ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-lg font-pixel text-foreground/80 hover:text-primary border-l-4 border-transparent hover:border-primary pl-2 transition-all p-2"
                        onClick={() => {
                          setIsMenuOpen(false);
                          play('click');
                        }}
                      >
                        <Icon icon={link.icon} />
                        <span>{link.label}</span>
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className={`flex items-center space-x-3 text-lg font-pixel border-l-4 pl-2 transition-all p-2 ${location.pathname === link.path
                          ? "text-primary border-primary bg-primary/10"
                          : "text-foreground/80 border-transparent hover:text-primary hover:border-primary"
                          }`}
                        onClick={() => {
                          setIsMenuOpen(false);
                          play('click');
                        }}
                      >
                        <Icon icon={link.icon} />
                        <span>{link.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-primary/30 flex justify-between text-xs text-primary font-pixel">
                <span>SYSTEM STATUS:</span>
                <span>ONLINE</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
