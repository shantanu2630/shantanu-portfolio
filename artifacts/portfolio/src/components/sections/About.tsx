import { Section, SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="about">
      <SectionHeader title="Engineering Philosophy" subtitle="01. Mindset" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            I treat <strong className="text-foreground">performance as a product feature</strong>, not a technical debt ticket. Over the last 4+ years, I've architected production-grade React platforms for global enterprises where milliseconds matter.
          </p>
          <p>
            When dashboards are slow, I don't just add a spinner. I normalize state, implement advanced memoization, and lazy-load components to squeeze out 30–40% render efficiency gains. When APIs choke under 1M+ records, I design clean Node.js/Express contracts that hold sub-200ms responses consistently.
          </p>
          <p>
            My true differentiator is the <strong className="text-foreground">AI integration layer</strong>. I don't just consume AI endpoints—I own the full-stack bridge connecting modern React UIs to Ollama-based LLM pipelines and Neo4j graph databases, enabling real-time, sub-second AI-assisted workflows at scale.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
          <div className="relative h-full w-full border border-border bg-card/50 backdrop-blur p-8 font-mono text-sm">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-border/50">
              <span className="text-primary">System Architecture</span>
              <span className="text-xs text-muted-foreground">Ollama + React + Node</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-24 text-right text-muted-foreground">Client</div>
                <div className="flex-1 h-[1px] bg-border relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-primary text-xs">WebSocket</div>
                </div>
                <div className="w-24 text-left">React.js</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-right text-muted-foreground">Gateway</div>
                <div className="flex-1 h-[1px] bg-border relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-primary text-xs">REST</div>
                </div>
                <div className="w-24 text-left">Node/Express</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-right text-muted-foreground">AI Layer</div>
                <div className="flex-1 h-[1px] bg-border relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-primary text-xs">Stream</div>
                </div>
                <div className="w-24 text-left">Ollama LLM</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-right text-muted-foreground">Storage</div>
                <div className="flex-1 h-[1px] bg-border relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-primary text-xs">Graph</div>
                </div>
                <div className="w-24 text-left">Neo4j</div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border/50 flex justify-between text-xs text-muted-foreground">
              <span>Latency: &lt; 200ms</span>
              <span>Status: Optimal</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
