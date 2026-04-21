import { Section, SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Education() {
  return (
    <Section id="education">
      <SectionHeader title="Education" subtitle="06. Academic Background" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card border border-border/50 p-8 rounded-sm hover:border-primary/30 transition-colors"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
          <h3 className="text-2xl font-bold font-display text-foreground">Bachelor of Engineering — Computer Science</h3>
          <div className="font-mono text-sm text-primary bg-primary/10 px-3 py-1 rounded-sm border border-primary/20">2016 – 2020</div>
        </div>
        <p className="text-lg text-muted-foreground">
          Laxmi Narayan College of Technology, RGPV <span className="text-primary mx-2">/</span> Indore, India
        </p>
      </motion.div>
    </Section>
  );
}
