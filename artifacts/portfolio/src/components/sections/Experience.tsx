import { Section, SectionHeader } from "@/components/ui/section";
import { EXPERIENCE } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader title="Experience" subtitle="02. Work History" />
      
      <div className="relative border-l border-border/50 ml-4 md:ml-8 space-y-16">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline node */}
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
              <h3 className="text-2xl font-bold font-display text-foreground">{exp.role}</h3>
              <div className="font-mono text-sm text-primary">{exp.period}</div>
            </div>
            
            <div className="text-lg font-medium text-muted-foreground mb-6">
              {exp.company} // {exp.location}
            </div>
            
            <ul className="space-y-3 mb-8">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary mt-1.5 text-xs">▹</span>
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {exp.metrics.map((metric, i) => (
                <div key={i} className="bg-card border border-border/50 p-4 rounded-sm">
                  <div className="text-2xl font-bold font-mono text-primary mb-1">{metric.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{metric.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
