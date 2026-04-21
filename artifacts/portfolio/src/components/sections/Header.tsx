import { useState, useEffect } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { PROFILE } from "@/data/portfolio";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a 
          href="#top" 
          className="font-display font-bold text-xl tracking-tight text-foreground"
        >
          SU<span className="text-primary">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium font-mono">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">01. About</a>
          <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">02. Experience</a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">03. Projects</a>
          <a href="#ai-showcase" className="text-muted-foreground hover:text-foreground transition-colors">04. AI/LLM</a>
          <a href="#contact" className="text-primary hover:text-primary/80 transition-colors border border-primary/30 px-4 py-2 rounded-sm">Contact</a>
        </nav>
      </div>
    </header>
  );
}
