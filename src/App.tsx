import { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/navbar';
import { HomePage as Home } from './pages/home';
import { AboutPage as About } from './pages/about';
import { ProjectsPage as Projects } from './pages/projects';
import { ContactPage as Contact } from './pages/contact';
import { TerminalPage } from './pages/terminal';
import MatrixRain from './components/MatrixRain';
import { useKonamiCode } from './hooks/useKonamiCode';

function App() {
  const location = useLocation();
  const [showMatrix, setShowMatrix] = useState(false);

  // Toggle Matrix Rain on Konami Code
  useKonamiCode(() => {
    setShowMatrix(prev => !prev);
  });

  return (
    <div className="min-h-screen bg-background text-foreground grid-bg flex flex-col relative overflow-hidden">
      <div className="scan-line pointer-events-none z-50"></div>

      {/* Easter Egg: Matrix Rain Overlay */}
      <AnimatePresence>
        {showMatrix && (
          <div className="fixed inset-0 z-40 pointer-events-none opacity-50">
            <MatrixRain />
          </div>
        )}
      </AnimatePresence>

      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 relative z-10">
        <AnimatePresence mode="wait">
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/terminal" component={TerminalPage} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
