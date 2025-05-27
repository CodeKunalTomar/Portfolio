import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { PixelCard } from "../components/pixel-card";

export const AboutPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      <motion.h1 
        className="font-pixel text-primary text-2xl sm:text-3xl mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ABOUT.ME
      </motion.h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          className="lg:col-span-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <PixelCard className="mb-8">
              <h2 className="font-pixel text-primary text-xl mb-4">PROFILE</h2>
              <p className="mb-4">
                I am Kunal Tomar, a B.Tech student specializing in Computer Science and Engineering with a focus on Artificial Intelligence at Medicaps University, Indore.
              </p>
              <p className="mb-4">
                With a strong analytical and problem-solving mindset, I am passionate about AI and data-driven innovation. I am a self-motivated learner with a proactive approach to exploring emerging technologies and research directions.
              </p>
              <p className="mb-4">
                I am detail-oriented and organized, with a focus on writing clean, efficient, and modular code. I am an effective communicator with experience collaborating in research teams and executing tasks independently.
              </p>
              <p>
                My project <a href="https://opticonnect.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OptiConnect</a> demonstrates my ability to implement complex AI algorithms in practical applications.
              </p>
            </PixelCard>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <PixelCard className="mb-8">
              <h2 className="font-pixel text-primary text-xl mb-4">FIELDS OF INTEREST</h2>
              <ul className="space-y-3">
                <li className="flex">
                  <Icon icon="lucide:activity" className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <span>Data Analytics and Machine Learning for Smart Environments</span>
                </li>
                <li className="flex">
                  <Icon icon="lucide:eye" className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <span>Deep Learning for Computer Vision and Real-time Data Interpretation</span>
                </li>
                <li className="flex">
                  <Icon icon="lucide:flask" className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <span>Research and Development of AI-driven Solutions for Real-world Problems</span>
                </li>
                <li className="flex">
                  <Icon icon="lucide:bar-chart-2" className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <span>Application of Statistical Learning and Predictive Modeling in Industry and Society</span>
                </li>
                <li className="flex">
                  <Icon icon="lucide:cpu" className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <span>Data-centric AI and Scalable ML using GPU-accelerated Platforms</span>
                </li>
              </ul>
            </PixelCard>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <PixelCard>
              <h2 className="font-pixel text-primary text-xl mb-4">EDUCATION</h2>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg">Medicaps University, Indore</h3>
                  <p>B.Tech in Computer Science and Engineering</p>
                  <p className="text-sm text-foreground-500">Specialization in Artificial Intelligence</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <p className="text-right">2022–2026</p>
                  <p className="text-right font-bold text-primary">CGPA: 8.71</p>
                </div>
              </div>
              
              <div className="w-full bg-black border border-primary h-4 pixel-corners">
                <div className="bg-primary h-full" style={{ width: '87.1%' }}></div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span>0.0</span>
                <span>10.0</span>
              </div>
            </PixelCard>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <PixelCard className="mb-8">
              <h2 className="font-pixel text-primary text-xl mb-4">TECHNICAL SKILLS</h2>
              
              <div className="mb-4">
                <h3 className="font-bold mb-2 flex items-center">
                  <Icon icon="lucide:code" className="mr-2 text-primary" />
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 border border-primary text-sm">Python</span>
                  <span className="px-2 py-1 border border-primary text-sm">C</span>
                  <span className="px-2 py-1 border border-primary text-sm">C++</span>
                  <span className="px-2 py-1 border border-primary text-sm">R</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-bold mb-2 flex items-center">
                  <Icon icon="lucide:brain" className="mr-2 text-primary" />
                  ML & AI Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 border border-primary text-sm">Scikit-learn</span>
                  <span className="px-2 py-1 border border-primary text-sm">TensorFlow</span>
                  <span className="px-2 py-1 border border-primary text-sm">Keras</span>
                  <span className="px-2 py-1 border border-primary text-sm">PyTorch</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-bold mb-2 flex items-center">
                  <Icon icon="lucide:bar-chart" className="mr-2 text-primary" />
                  Data Science & Analytics
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 border border-primary text-sm">NumPy</span>
                  <span className="px-2 py-1 border border-primary text-sm">Pandas</span>
                  <span className="px-2 py-1 border border-primary text-sm">Matplotlib</span>
                  <span className="px-2 py-1 border border-primary text-sm">Seaborn</span>
                  <span className="px-2 py-1 border border-primary text-sm">Jupyter</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-bold mb-2 flex items-center">
                  <Icon icon="lucide:globe" className="mr-2 text-primary" />
                  Web Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 border border-primary text-sm">JavaScript</span>
                  <span className="px-2 py-1 border border-primary text-sm">HTML5</span>
                  <span className="px-2 py-1 border border-primary text-sm">CSS3</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-bold mb-2 flex items-center">
                  <Icon icon="lucide:tool" className="mr-2 text-primary" />
                  Tools & Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 border border-primary text-sm">Google Colab</span>
                  <span className="px-2 py-1 border border-primary text-sm">JupyterLab</span>
                  <span className="px-2 py-1 border border-primary text-sm">RStudio</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-2 flex items-center">
                  <Icon icon="lucide:database" className="mr-2 text-primary" />
                  Databases
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 border border-primary text-sm">MySQL</span>
                </div>
              </div>
            </PixelCard>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <PixelCard>
              <h2 className="font-pixel text-primary text-xl mb-4">STRENGTHS</h2>
              <ul className="space-y-3">
                <li className="flex">
                  <Icon icon="lucide:check-circle" className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <span>Strong analytical and problem-solving mindset, with a passion for AI and data-driven innovation</span>
                </li>
                <li className="flex">
                  <Icon icon="lucide:check-circle" className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <span>Self-motivated learner with a proactive approach to exploring emerging technologies and research directions</span>
                </li>
                <li className="flex">
                  <Icon icon="lucide:check-circle" className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <span>Detail-oriented and organized, with a focus on writing clean, efficient, and modular code</span>
                </li>
                <li className="flex">
                  <Icon icon="lucide:check-circle" className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <span>Effective communicator with experience collaborating in research teams and executing tasks independently</span>
                </li>
              </ul>
            </PixelCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
