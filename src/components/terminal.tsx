import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { useTheme } from "../context/ThemeContext";
import { useSound } from "../context/SoundContext";

const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayed, setDisplayed] = useState("");
  const { play } = useSound();

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      if (i > 0) play('type'); // Play sound on character reveal
      i++;
      if (i > text.length) clearInterval(timer);
    }, 15); // Speed for typing effect
    return () => clearInterval(timer);
  }, [text, play]);

  return <span>{displayed}</span>;
};

export const Terminal: React.FC = () => {
  const { setTheme } = useTheme();
  const { play } = useSound();
  const [input, setInput] = useState("");
  const [isChatMode, setIsChatMode] = useState(false);
  const [history, setHistory] = useState<Array<{ type: "input" | "output"; content: string; isAi?: boolean }>>([
    { type: "output", content: "Welcome to Portfolio.OS v1.1.0" },
    { type: "output", content: "Type 'help' to see available commands." },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const processChat = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("exit") || q.includes("quit") || q.includes("bye")) {
      setIsChatMode(false);
      return "Exiting AI Chat Mode. Returning to standard terminal.";
    }

    // General Greeting
    if (q.includes("hi") || q.includes("hello") || q.includes("hey")) {
      return "Hello! I am Kunal's AI Assistant. I can tell you about his work, skills, and more.";
    }

    // Identity
    if (q.includes("who") || q.includes("kunal") || q.includes("about")) {
      return "Kunal is a Final-year CS student specializing in AI & Robotics. He thrives on building autonomous systems.";
    }

    // Skills
    if (q.includes("skill") || q.includes("stack") || q.includes("tech") || q.includes("language")) {
      return "Core Stack: Python, C++, ROS2, TensorFlow, OpenCV.\nAlso experienced with: React, SQL, Gazebo, and Unity 3D.";
    }

    // Experience/Internship
    if (q.includes("intern") || q.includes("job") || q.includes("experience") || q.includes("work")) {
      return "Current: Research Intern at IIT Mandi (Jan 2026 - Present).\nPast: AI & Robotics Intern at IIIT Allahabad (June-Aug 2025).";
    }

    // Projects
    if (q.includes("project")) {
      return "Key Projects:\n1. Autonomous Multi-Robot Coordination (ROS2)\n2. OptiConnect (AI Connect-4 Game)\nAsk specifically about 'robots' or 'game' for more.";
    }

    // Education
    if (q.includes("education") || q.includes("college") || q.includes("degree") || q.includes("study")) {
      return "Education: B.Tech in CSE at Medicaps University (2022-2026).\nCurrent CGPA: 8.81/10. He also holds an NPTEL Elite+Gold certification.";
    }

    // Location
    if (q.includes("location") || q.includes("where") || q.includes("city")) {
      return "He is based in Indore, Madhya Pradesh, India.";
    }

    // Contact
    if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
      return "Email: kunaltomarmu26@gmail.com\nLinkedIn: linkedin.com/in/kunal-tomar1";
    }

    // Hobbies/Personal
    if (q.includes("hobby") || q.includes("fun") || q.includes("like")) {
      return "He enjoys robotics simulations, solving algorithmic challenges (CodeKaze Rank 19!), and gaming.";
    }

    return "I didn't quite catch that. Try asking about 'skills', 'projects', 'education', or 'internship'.";
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;
    play('click'); // Play click sound on enter


    if (isChatMode) {
      const response = processChat(trimmedCmd);
      const isExitMsg = response.includes("Exiting AI Chat Mode");
      setHistory((prev) => [
        ...prev,
        { type: "input", content: cmd },
        { type: "output", content: response, isAi: !isExitMsg },
      ]);
      return;
    }

    const commandParts = trimmedCmd.split(" ");
    const baseCommand = commandParts[0].toLowerCase();
    let output = "";

    switch (baseCommand) {
      case "help":
        output = `Available commands:
  help        - Show this help message
  about       - Display information about me
  skills      - List technical skills
  projects    - List my projects
  resume      - View my resume
  contact     - Show contact information
  chat        - Talk to the AI Assistant
  opticonnect - Link to OptiConnect game
  sudo        - Run as superuser
  clear       - Clear the terminal`;
        break;
      case "chat":
        output = "Entering AI Chat Mode... (Type 'exit' to quit)\nHello! Ask me anything about Kunal.";
        setIsChatMode(true);
        break;
      case "about":
        output = "I am a Final-year CS student specializing in AI. I am currently a Research Intern at IIT Mandi working on advanced autonomous systems. Previously, I interned at IIIT Allahabad.";
        break;
      case "skills":
        output = `LANGUAGES:
  Python, C++, C, SQL, R

FRAMEWORKS & PLATFORMS:
  ROS2, TensorFlow, PyTorch

LIBRARIES:
  NumPy, SciPy, Pandas, OpenCV, Matplotlib, scikit-learn

SIMULATION & ROBOTICS:
  PyBullet, Gazebo, PX4, RViz2, Unity 3D

TOOLS:
  Git, GitHub, Jupyter, MySQL, VS Code, Anaconda`;
        break;
      case "resume":
        output = "Opening Resume...";
        window.open("https://drive.google.com/file/d/1B169jTyNRNM3GWP7UO1Rhlb0SsdE0qDi/view", "_blank");
        break;
      case "projects":
        output = `1. Autonomous GPS-Denied Drone Navigation System
   - Production-ready autonomous navigation for GPS-denied environments.
   - Real-time obstacle detection & PX4 Autopilot integration.

2. Autonomous Multi-Robot Coordination System
   - ROS2-based system for synchronized control of dual 7-DOF robotic arms.
   - Real-time computer vision and inverse kinematics.

3. OptiConnect (Connect-4 AI)
   - Browser-based game with Minimax AI and Web Workers.
   - Non-blocking UI and adaptive difficulty.`;
        break;
      case "contact":
        output = `Email: kunaltomarmu26@gmail.com
Phone: (+91) 8770782647
LinkedIn: linkedin.com/in/kunal-tomar1
GitHub: github.com/CodeKunalTomar
Website: kunaltomar.vercel.app`;
        break;
      case "opticonnect":
        output = "Opening OptiConnect...";
        window.open("https://opticonnect.vercel.app/", "_blank");
        break;
      case "clear":
        setHistory([]);
        return;
      case "theme":
        const args = trimmedCmd.split(" ");
        if (args.length < 2) {
          output = "Usage: theme [green | amber | cyan | red]";
        } else {
          const themeColor = args[1].toLowerCase();
          if (["green", "amber", "cyan", "red"].includes(themeColor)) {
            setTheme(themeColor as any);
            output = `System theme updated to: ${themeColor.toUpperCase()}`;
          } else {
            output = `Error: Theme '${themeColor}' not available.\nAvailable themes: green, amber, cyan, red`;
          }
        }
        break;
      case "sudo":
        const subCommand = commandParts.slice(1).join(" ");
        if (!subCommand) {
          output = "usage: sudo [command]";
        } else if (subCommand.includes("make me a sandwich")) {
          output = "pfft. make it yourself."; // XKCD
        } else if (subCommand === "reboot") {
          output = "Rebooting system...";
          setTimeout(() => window.location.reload(), 2000);
        } else {
          output = `[sudo] password for visitor: **********\nSorry, user visitor is not allowed to execute '${subCommand}' as root.`;
        }
        break;
      default:
        // Handle multi-word commands or unknown commands
        if (trimmedCmd.startsWith("theme ")) {
          break;
        }
        output = `Command not found: ${baseCommand}. Type 'help' for available commands.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: "input", content: cmd },
      { type: "output", content: output },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
  };

  return (
    <div className="terminal-window font-mono text-sm sm:text-base">
      {history.map((item, index) => (
        <div key={index} className="terminal-output">
          {item.type === "input" ? (
            <div className="flex">
              <span className={`terminal-prompt ${isChatMode ? "text-cyan-400" : "text-primary"}`}>
                {isChatMode ? "AI>" : "$"}
              </span>
              <span className={isChatMode ? "text-cyan-100" : ""}>{item.content}</span>
            </div>
          ) : (
            <div className="whitespace-pre-wrap">
              {item.isAi ? (
                <span className="text-cyan-400">
                  <TypewriterText text={item.content} />
                </span>
              ) : (
                <span className="text-primary/80">{item.content}</span>
              )}
            </div>
          )}
        </div>
      ))}
      <form onSubmit={handleSubmit} className="flex">
        <span className={`terminal-prompt ${isChatMode ? "text-cyan-400" : "text-primary"}`}>
          {isChatMode ? "AI>" : "$"}
        </span>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            play('type');
          }}
          className={`terminal-input flex-1 bg-transparent border-none outline-none focus:ring-0 ${isChatMode ? "text-cyan-100 placeholder-cyan-800" : "text-foreground placeholder-foreground-500"
            }`}
          autoFocus
        />
        <span className={`terminal-cursor ${isChatMode ? "bg-cyan-400" : "bg-primary"}`}></span>
      </form>
      <div ref={bottomRef} />
    </div>
  );
};
