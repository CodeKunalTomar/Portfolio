import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { TypewriterOutput } from "./TypewriterOutput";
import { MatrixRain } from "./MatrixRain"; // Added

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

const welcomeOutput = (
  <div>
    <pre className="font-mono text-primary text-xs leading-tight">
{`
  KK  KK UU UU NN NN   AA   LL LL      TTTTTT OO OO MM MM   AA   RRRR
  KK KK  UU UU NNN NN AAAA  LL LL        TT  OO  OO MMMMMM AAAA  RR RR
  KKKK   UU UU NN NNN AA AA LL LL        TT  OO  OO MM M MM AA AA RRRR
  KK KK  UU UU NN  NN AAAAA LLLLLL       TT  OOOOOO MM   MM AAAAA RR RR
`}
    </pre>
    <TypewriterOutput text="Welcome to KunalOS v1.0. Enhanced Interactive Terminal." speed={25} />
    <TypewriterOutput text="Type 'help' for a list of available commands." speed={25} />
  </div>
);

export const Terminal: React.FC = () => {
  const [input, setInput] = React.useState<string>("");
  const [history, setHistory] = React.useState<CommandOutput[]>([
    { command: "boot", output: welcomeOutput }
  ]);
  const [showMatrix, setShowMatrix] = React.useState(false); // Added state for MatrixRain
  const [altTheme, setAltTheme] = React.useState(false); // Added state for theme
  const terminalRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const executeCommand = (cmd: string): React.ReactNode => {
    const command = cmd.trim().toLowerCase();
    const args = cmd.trim().split(" ").slice(1);

    if (command === "help") {
      return (
        <div>
          <TypewriterOutput text="Available commands:" />
          <ul>
            <li>- <strong>help</strong>: Show this help message</li>
            <li>- <strong>about</strong>: Display information about Kunal Tomar</li>
            <li>- <strong>skills</strong>: List technical skills</li>
            <li>- <strong>education</strong>: Show academic background</li>
            <li>- <strong>projects</strong>: Display project information</li>
            <li>- <strong>contact</strong>: Show contact information</li>
            <li>- <strong>goto [section]</strong>: Navigate to a page (e.g., 'goto projects'). Sections: home, about, projects, contact, terminal.</li>
            <li>- <strong>matrix [on/off]</strong>: Toggle Matrix rain effect.</li>
            <li>- <strong>theme</strong>: Switch terminal color theme.</li>
            <li>- <strong>opticonnect</strong>: View OptiConnect project details and link.</li>
            <li>- <strong>clear</strong>: Clear the terminal</li>
          </ul>
        </div>
      );
    } else if (command === "about") {
      return <TypewriterOutput text="Kunal Tomar: B.Tech student in CSE (AI focus). Passionate about AI, data-driven innovation, and emerging tech. Strong analytical and problem-solving skills." />;
    } else if (command === "skills") {
      return (
        <div>
          <TypewriterOutput text="Technical Skills:" className="font-bold text-primary mb-1" />
          <TypewriterOutput text="• Programming: Python, C, C++, R" speed={30}/>
          <TypewriterOutput text="• ML/AI: Scikit-learn, TensorFlow, Keras, PyTorch" speed={30}/>
          <TypewriterOutput text="• Data Science: NumPy, Pandas, Matplotlib, Seaborn" speed={30}/>
          <TypewriterOutput text="• Web: JavaScript, HTML5, CSS3, React, TailwindCSS, Framer Motion" speed={30}/>
          <TypewriterOutput text="• Tools: Git, Docker, Jupyter, VS Code" speed={30}/>
          <TypewriterOutput text="• Databases: MySQL" speed={30}/>
        </div>
      );
    } else if (command === "education") {
      return (
        <div>
          <TypewriterOutput text="Education:" className="font-bold text-primary mb-1" />
          <TypewriterOutput text="Medicaps University, Indore" />
          <TypewriterOutput text="B.Tech in Computer Science and Engineering (AI Specialization)" />
          <TypewriterOutput text="2022–2026 | CGPA: 8.71" />
        </div>
      );
    } else if (command === "projects") {
      navigate("/projects");
      return <TypewriterOutput text="Navigating to projects page... For detailed project info, please view the Projects page." />;
    } else if (command === "contact") {
      return (
        <div>
          <TypewriterOutput text="Contact Information:" className="font-bold text-primary mb-1" />
          <TypewriterOutput text="Email: kunaltomarmu26@gmail.com" />
          <TypewriterOutput text="Mobile: +91 8770782647" />
          <TypewriterOutput text="LinkedIn: linkedin.com/in/kunal-tomar-ai" />
        </div>
      );
    } else if (command.startsWith("goto ")) {
      const section = args[0]?.toLowerCase();
      let path = "";
      switch (section) {
        case "home": path = "/"; break;
        case "about": path = "/about"; break;
        case "projects": path = "/projects"; break;
        case "contact": path = "/contact"; break;
        case "terminal": path = "/terminal"; break;
        default:
          return <TypewriterOutput text={`Error: Section '${section}' not found. Try 'home', 'about', 'projects', 'contact', 'terminal'.`} className="text-red-500" />;
      }
      if (path) {
        navigate(path);
        return <TypewriterOutput text={`Navigating to ${section}...`} />;
      }
    } else if (command.startsWith("matrix")) {
        const arg = args[0]?.toLowerCase();
        let newShowMatrixState = !showMatrix;
        if (arg === "on") newShowMatrixState = true;
        if (arg === "off") newShowMatrixState = false;
        setShowMatrix(newShowMatrixState);
        return <TypewriterOutput text={`Matrix effect ${newShowMatrixState ? "activated" : "deactivated"}.`} />;
    } else if (command === "theme") {
        setAltTheme(prev => !prev);
        // Output will show the theme it's switching TO
        return <TypewriterOutput text={`Switched to ${!altTheme ? "alternate blue" : "default green"} theme.`} />;
    } else if (command === "opticonnect") {
        return (
          <div>
            <TypewriterOutput text="OptiConnect – AI Solver:" className="font-bold text-primary mb-1"/>
            <TypewriterOutput text="An AI-driven Connect-4 web application that demonstrates advanced game theory algorithms." speed={30}/>
            <div className="mt-1">
                Project URL: <a href="https://opticonnect.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-green-400">https://opticonnect.vercel.app/</a>
            </div>
            <TypewriterOutput text="Try it out in your browser!" speed={30}/>
          </div>
        );
    } else if (command === "clear") {
      return null;
    } else if (command === "") {
      return "";
    } else {
      return <TypewriterOutput text={`Command not found: '${command}'. Type 'help' for available commands.`} className="text-red-500" />;
    }
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();

    if (trimmedInput === "") {
      setHistory(prev => [...prev, { command: "", output: "" }]);
      setInput("");
      return;
    }

    if (trimmedInput.toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = executeCommand(trimmedInput);
    setHistory(prev => [...prev, { command: trimmedInput, output }]);
    setInput("");

    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 0);
  };

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  React.useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <motion.div
      className={`terminal-window pixel-corners ${altTheme ? 'alt-theme' : ''}`} // Added altTheme conditional class
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => inputRef.current?.focus()}
      ref={terminalRef}
    >
      {/* Changed header div class for CSS variable styling */}
      <div className="terminal-header flex items-center sticky top-0 z-20"> {/* Increased z-index for header */}
        <Icon icon="lucide:terminal" className="mr-2" /> {/* Icon color will be inherited or set by .terminal-header color */}
        <span>KunalOS Terminal</span> {/* Text color inherited or set by .terminal-header */}
      </div>

      <div className="p-2 flex-grow overflow-y-auto"> {/* Added flex-grow and overflow for content area */}
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            <div className="flex">
              <span className="terminal-prompt mr-2">$</span> {/* Class for prompt styling */}
              <span className="command-text">{item.command}</span> {/* Class for command text styling */}
            </div>
            <div className="terminal-output mt-0.5 ml-4">
              {item.output}
            </div>
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center mt-2">
          <span className="terminal-prompt mr-2">$</span> {/* Class for prompt styling */}
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="terminal-input flex-grow" // Removed specific text color, will inherit
            autoFocus
            aria-label="Terminal input"
          />
        </form>
      </div>
      <MatrixRain isActive={showMatrix} className="absolute inset-0 z-0 pointer-events-none" />
      {/* MatrixRain behind content (z-0), header is z-20, content area has no z-index (so it's between) */}
    </motion.div>
  );
};
