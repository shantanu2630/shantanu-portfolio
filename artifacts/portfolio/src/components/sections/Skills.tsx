import { Section, SectionHeader } from "@/components/ui/section";
import { SKILLS } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader title="Technical Arsenal" subtitle="05. Skills" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((group, idx) => (
          <motion.div 
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-card border border-border/50 p-6 rounded-sm hover:border-primary/30 transition-colors"
          >
            <h4 className="font-display font-bold text-xl text-foreground mb-6 pb-4 border-b border-border/50">{group.category}</h4>
            <ul className="flex flex-col gap-3 font-mono text-sm text-muted-foreground">
              {group.items.map((skill, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      
      {/* Performance Meter */}
      <div className="mt-24 p-8 border border-border/50 bg-card rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2">
          <h4 className="font-display font-bold text-xl text-foreground">Live Engineering Metrics</h4>
          <p className="text-sm text-muted-foreground">Frontend simulation of platform performance signals.</p>
        </div>
        
        <div className="flex gap-8">
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-primary animate-pulse">60</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">FPS Target</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-green-500">14ms</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">TTI Avg</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-blue-500">0</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Layout Shifts</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
