import React from "react";
import { Switch, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "./components/navbar";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { ProjectsPage } from "./pages/projects";
import { ContactPage } from "./pages/contact";
import { TerminalPage } from "./pages/terminal";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/terminal" component={TerminalPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </motion.main>
      
      <footer className="border-t-2 border-primary py-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Kunal Tomar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
