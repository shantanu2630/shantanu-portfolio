import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { AIShowcase } from "@/components/sections/AIShowcase";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { PROFILE } from "@/data/portfolio";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <AIShowcase />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="py-8 border-t border-border/50 mt-24">
        <div className="container mx-auto px-6 text-center font-mono text-sm text-muted-foreground">
          <p>Designed & Built by {PROFILE.name}</p>
          <p className="mt-2 text-xs opacity-60">Performance &gt; Spectacle.</p>
        </div>
      </footer>
    </div>
  );
}
