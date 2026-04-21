import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/canvas/HeroBackground";
import { PROFILE } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const ROLES = [
  "React Architect",
  "Performance Engineer",
  "AI/LLM Integrator",
  "Full Stack Engineer"
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden w-full pt-20">
      <HeroBackground />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <p className="font-mono text-primary mb-5 tracking-widest text-sm uppercase">
            System Online // {PROFILE.location}
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter text-foreground mb-4">
            {PROFILE.name}.
          </h1>
          
          <div className="text-2xl md:text-4xl font-medium text-muted-foreground mb-8 flex items-center gap-3">
            <span>I am a</span>
            <span className="text-foreground relative inline-block w-[300px]">
              {ROLES.map((role, index) => (
                <motion.span
                  key={role}
                  className="absolute top-0 left-0 whitespace-nowrap text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: roleIndex === index ? 1 : 0,
                    y: roleIndex === index ? 0 : -20 
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {role}
                </motion.span>
              ))}
              {/* Invisible placeholder to maintain width */}
              <span className="opacity-0">AI/LLM Integrator</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            I engineer high-performance React platforms and own the full-stack layer 
            that wires UIs into real-time Ollama LLM pipelines. 
            I build systems that are fast by design, not by accident.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild className="font-mono h-12 px-8 rounded-sm">
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="font-mono h-12 px-8 rounded-sm border-border hover:bg-white/5">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
}
