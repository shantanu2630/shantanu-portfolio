import { Section, SectionHeader } from "@/components/ui/section";
import { PROJECTS } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader title="Selected Projects" subtitle="03. Case Studies" />
      
      <div className="space-y-32">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Image */}
            <div className="w-full lg:w-3/5 relative group">
              <div className="absolute -inset-4 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <div className="relative aspect-video rounded-sm overflow-hidden border border-border bg-card">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center">
              <p className="font-mono text-primary text-sm mb-3">Featured Project</p>
              <h3 className="text-3xl font-bold font-display text-foreground mb-6">{project.title}</h3>
              
              <div className="bg-card border border-border/50 p-6 rounded-sm mb-6 relative z-20 -ml-0 lg:-ml-12 shadow-2xl">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <ul className="space-y-2">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">-</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground mb-8">
                {project.tech.map((t, i) => (
                  <li key={i} className="bg-primary/5 px-2 py-1 rounded-sm border border-primary/20 text-primary/90">{t}</li>
                ))}
              </ul>
              
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="font-mono text-xs rounded-sm border-border hover:bg-white/5 gap-2" asChild>
                  <a href="#"><Github className="w-4 h-4" /> GitHub</a>
                </Button>
                <Button variant="outline" size="sm" className="font-mono text-xs rounded-sm border-border hover:bg-white/5 gap-2" asChild>
                  <a href="#"><ExternalLink className="w-4 h-4" /> Live Demo</a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
