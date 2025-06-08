import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./components/navbar";
import { AnimatedPageWrapper } from "./components/AnimatedPageWrapper";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { ProjectsPage } from "./pages/projects";
import { ContactPage } from "./pages/contact";
import { TerminalPage } from "./pages/terminal";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const location = useLocation(); // Added location hook

  React.useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-6">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 10px rgba(0,255,0,0.3)",
                  "0 0 20px rgba(0,255,0,0.5)",
                  "0 0 10px rgba(0,255,0,0.3)"
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-24 h-24 mx-auto bg-black border-2 border-primary flex items-center justify-center"
            >
              <span className="font-pixel text-primary text-3xl">KT</span>
            </motion.div>
          </div>
          <p className="font-pixel text-primary text-lg">SYSTEM BOOTING...</p>
          <div className="mt-4 w-64 h-2 bg-black border border-primary">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5 }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground grid-bg">
      <div className="scan-line"></div>

      <Navbar />

      <motion.main
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0 }} // This outer animation might be redundant or could be combined/adjusted
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPageWrapper><HomePage /></AnimatedPageWrapper>} />
            <Route path="/about" element={<AnimatedPageWrapper><AboutPage /></AnimatedPageWrapper>} />
            <Route path="/projects" element={<AnimatedPageWrapper><ProjectsPage /></AnimatedPageWrapper>} />
            <Route path="/terminal" element={<AnimatedPageWrapper><TerminalPage /></AnimatedPageWrapper>} />
            <Route path="/contact" element={<AnimatedPageWrapper><ContactPage /></AnimatedPageWrapper>} />
          </Routes>
        </AnimatePresence>
      </motion.main>

      <footer className="border-t-2 border-primary py-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Kunal Tomar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
