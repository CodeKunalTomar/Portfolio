import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Input, Textarea, Button, addToast } from "@heroui/react";
import { PixelCard } from "../components/pixel-card";
import { PixelButton } from "../components/pixel-button";

export const ContactPage: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      addToast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
        timeout: 5000,
      });
      
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div>
      <motion.h1 
        className="font-pixel text-primary text-2xl sm:text-3xl mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        CONTACT.ME
      </motion.h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <PixelCard>
            <h2 className="font-pixel text-primary text-xl mb-6">GET IN TOUCH</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  label="Name"
                  placeholder="Enter your name"
                  value={name}
                  onValueChange={setName}
                  isRequired
                  className="border-primary"
                />
              </div>
              
              <div>
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  value={email}
                  onValueChange={setEmail}
                  type="email"
                  isRequired
                  className="border-primary"
                />
              </div>
              
              <div>
                <Textarea
                  label="Message"
                  placeholder="Enter your message"
                  value={message}
                  onValueChange={setMessage}
                  isRequired
                  className="border-primary min-h-[150px]"
                />
              </div>
              
              <div>
                <PixelButton type="submit" className="w-full">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <Icon icon="lucide:loader" className="animate-spin mr-2" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Icon icon="lucide:send" className="mr-2" />
                      Send Message
                    </span>
                  )}
                </PixelButton>
              </div>
            </form>
          </PixelCard>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <PixelCard className="mb-8">
            <h2 className="font-pixel text-primary text-xl mb-6">CONTACT INFO</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-black border border-primary flex items-center justify-center mr-4">
                  <Icon icon="lucide:mail" className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-foreground-500">kunaltomarmu26@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-black border border-primary flex items-center justify-center mr-4">
                  <Icon icon="lucide:phone" className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-foreground-500">8770782647</p>
                  <p className="text-foreground-500">9826234042 (Alternative)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-black border border-primary flex items-center justify-center mr-4">
                  <Icon icon="lucide:map-pin" className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-foreground-500">
                    441, VIP Paraspar Nagar,<br />
                    Indore (M.P., INDIA)- 452001
                  </p>
                </div>
              </div>
            </div>
          </PixelCard>
          
          <PixelCard>
            <h2 className="font-pixel text-primary text-xl mb-6">CONNECT ONLINE</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://github.com/CodeKunalTomar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 border border-primary hover:bg-black transition-colors"
              >
                <Icon icon="lucide:github" className="text-3xl mb-2 text-primary" />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/kunal-tomar-ab0960248/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 border border-primary hover:bg-black transition-colors"
              >
                <Icon icon="lucide:linkedin" className="text-3xl mb-2 text-primary" />
                <span>LinkedIn</span>
              </a>
            </div>
          </PixelCard>
        </motion.div>
      </div>
    </div>
  );
};
