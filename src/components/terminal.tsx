import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const Terminal: React.FC = () => {
  const [input, setInput] = React.useState<string>("");
  const [history, setHistory] = React.useState<CommandOutput[]>([
    { 
      command: "help", 
      output: (
        <div>
          <p>Available commands:</p>
          <p>- <strong>help</strong>: Show this help message</p>
          <p>- <strong>about</strong>: Display information about Kunal Tomar</p>
          <p>- <strong>skills</strong>: List technical skills</p>
          <p>- <strong>education</strong>: Show academic background</p>
          <p>- <strong>projects</strong>: Display project information</p>
          <p>- <strong>contact</strong>: Show contact information</p>
          <p>- <strong>clear</strong>: Clear the terminal</p>
        </div>
      )
    }
  ]);
  const terminalRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const executeCommand = (cmd: string): React.ReactNode => {
    const command = cmd.trim().toLowerCase();
    
    if (command === "help") {
      return (
        <div>
          <p>Available commands:</p>
          <p>- <strong>help</strong>: Show this help message</p>
          <p>- <strong>about</strong>: Display information about Kunal Tomar</p>
          <p>- <strong>skills</strong>: List technical skills</p>
          <p>- <strong>education</strong>: Show academic background</p>
          <p>- <strong>projects</strong>: Display project information</p>
          <p>- <strong>contact</strong>: Show contact information</p>
          <p>- <strong>clear</strong>: Clear the terminal</p>
        </div>
      );
    } else if (command === "about") {
      return (
        <div>
          <p className="text-primary-500 font-bold mb-2">Kunal Tomar</p>
          <p>B.Tech student specializing in Computer Science and Engineering with a focus on Artificial Intelligence.</p>
          <p>Strong analytical and problem-solving mindset, with a passion for AI and data-driven innovation.</p>
          <p>Self-motivated learner with a proactive approach to exploring emerging technologies.</p>
        </div>
      );
    } else if (command === "skills") {
      return (
        <div>
          <p className="text-primary-500 font-bold mb-2">Technical Skills:</p>
          <p>• Programming Languages: Python, C, C++, R</p>
          <p>• Machine Learning & AI Frameworks: Scikit-learn, TensorFlow, Keras, PyTorch</p>
          <p>• Data Science & Analytics: NumPy, Pandas, Matplotlib, Seaborn, Jupyter</p>
          <p>• Web Technologies: JavaScript, HTML5, CSS3</p>
          <p>• Tools & Platforms: Google Colab, JupyterLab, RStudio</p>
          <p>• Databases: MySQL</p>
        </div>
      );
    } else if (command === "education") {
      return (
        <div>
          <p className="text-primary-500 font-bold mb-2">Education:</p>
          <p>Medicaps University, Indore</p>
          <p>B.Tech in Computer Science and Engineering (Specialization in Artificial Intelligence)</p>
          <p>2022–2026</p>
          <p>CGPA: 8.71</p>
        </div>
      );
    } else if (command === "projects") {
      return (
        <div>
          <p className="text-primary-500 font-bold mb-2">Projects:</p>
          <p className="font-bold">OptiConnect – AI Solver (Individual Project)</p>
          <p>Technologies: JavaScript, HTML5, CSS3, Heuristic AI, Recursive Search Algorithms</p>
          <p>• Developed an AI-driven Connect-4 web application that simulates intelligent gameplay using recursive evaluation and heuristic scoring.</p>
          <p>• Implemented depth-limited search and board-state heuristics to mimic strategic planning and opponent prediction.</p>
          <p>• Built a dynamic difficulty module that adjusts AI behavior based on selected challenge levels, enhancing user engagement.</p>
          <p>• Modeled decision-making patterns inspired by game theory and Minimax-style algorithms under real-time constraints.</p>
        </div>
      );
    } else if (command === "contact") {
      return (
        <div>
          <p className="text-primary-500 font-bold mb-2">Contact Information:</p>
          <p>Email: kunaltomarmu26@gmail.com</p>
          <p>Mobile: 8770782647</p>
          <p>Alt Mobile: 9826234042</p>
          <p>Address: 441, VIP Paraspar Nagar, Indore (M.P., INDIA)- 452001</p>
        </div>
      );
    } else if (command === "clear") {
      return null;
    } else if (command === "opticonnect") {
      return (
        <div>
          <p className="text-primary-500 font-bold mb-2">OptiConnect – AI Solver:</p>
          <p>An AI-driven Connect-4 web application that demonstrates advanced game theory algorithms.</p>
          <p className="mt-2">Project URL: <a href="https://opticonnect.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://opticonnect.vercel.app/</a></p>
          <p className="mt-2">Try it out in your browser!</p>
        </div>
      );
    } else if (command === "") {
      return "";
    } else {
      return (
        <p className="text-red-500">Command not found: {command}. Type 'help' for available commands.</p>
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (input.trim() === "") return;
    
    if (input.trim().toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      return;
    }
    
    const output = executeCommand(input);
    
    setHistory(prev => [...prev, { command: input, output }]);
    setInput("");
    
    // Scroll to bottom
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 0);
  };

  React.useEffect(() => {
    // Focus input on mount
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <motion.div 
      className="terminal-window pixel-corners"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => inputRef.current?.focus()}
      ref={terminalRef}
    >
      <div className="mb-4 flex items-center">
        <Icon icon="lucide:terminal" className="mr-2" />
        <span className="text-primary font-bold">Kunal.Terminal v1.0.0</span>
      </div>
      
      {history.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="flex">
            <span className="terminal-prompt">$</span>
            <span>{item.command}</span>
          </div>
          <div className="terminal-output mt-1 ml-4">
            {item.output}
          </div>
        </div>
      ))}
      
      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="terminal-prompt">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="terminal-input"
          autoFocus
          aria-label="Terminal input"
        />
      </form>
    </motion.div>
  );
};
