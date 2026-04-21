import { useState, useEffect, useRef } from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Database, Zap, GitCommit, Network, FileJson, Layers } from "lucide-react";

export function AIShowcase() {
  const [logs, setLogs] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const startSimulation = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setLogs(["[SYSTEM] Initiating unstructured data ingestion..."]);
    
    setTimeout(() => setLogs(l => [...l, "[OLLAMA] Parsing raw text for entity extraction..."]), 800);
    setTimeout(() => setLogs(l => [...l, "[OLLAMA] Identified entities: { User: 'Shantanu', Skill: 'React.js', DB: 'Neo4j' }"]), 1800);
    setTimeout(() => setLogs(l => [...l, "[LLM] Confidence score: 0.94. Tagging record..."]), 2500);
    setTimeout(() => setLogs(l => [...l, "[NEO4J] Executing graph mutation..."]), 3200);
    setTimeout(() => setLogs(l => [...l, "[NEO4J] Created relationship (Shantanu)-[KNOWS]->(React.js)"]), 4000);
    setTimeout(() => setLogs(l => [...l, "[SYSTEM] Pipeline execution complete. Latency: 142ms"]), 4800);
    setTimeout(() => setIsProcessing(false), 5000);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <Section id="ai-showcase" containerClassName="max-w-6xl">
      <SectionHeader title="AI/LLM Integration" subtitle="04. Production Workflow" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Narrative */}
        <div className="lg:col-span-5 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Integrating AI isn't just about calling an API—it's about building the engineering layer that makes LLMs usable in enterprise contexts.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I own the full-stack bridge connecting modern React UIs to local Ollama pipelines, enabling real-time metadata enrichment and entity extraction. Combined with Neo4j, this allows for relationship-aware exploration of unstructured data.
          </p>
          
          <button 
            onClick={startSimulation}
            disabled={isProcessing}
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-sm border border-primary/50 bg-transparent px-8 font-mono text-sm text-primary transition-all duration-300 hover:bg-primary/10 disabled:opacity-50"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap className={cn("w-4 h-4", isProcessing && "animate-pulse text-yellow-500")} />
              {isProcessing ? "Processing Stream..." : "Run Pipeline Simulation"}
            </span>
          </button>
        </div>

        {/* Right: Interactive Terminal / Diagram */}
        <div className="lg:col-span-7 bg-card border border-border/50 rounded-sm overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-muted/30 border-b border-border/50 p-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="ml-4 font-mono text-xs text-muted-foreground">ollama-pipeline.sh</div>
          </div>
          
          <div className="p-6">
            {/* Visual Pipeline */}
            <div className="flex items-center justify-between mb-8 relative">
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-border -z-10"></div>
              
              <div className={cn("flex flex-col items-center gap-2 bg-card px-2 transition-colors", logs.length >= 1 ? "text-primary" : "text-muted-foreground")}>
                <div className="w-10 h-10 rounded-full border border-current bg-background flex items-center justify-center">
                  <FileJson className="w-4 h-4" />
                </div>
                <span className="font-mono text-[10px] uppercase">Ingest</span>
              </div>
              
              <div className={cn("flex flex-col items-center gap-2 bg-card px-2 transition-colors", logs.length >= 2 ? "text-primary" : "text-muted-foreground")}>
                <div className="w-10 h-10 rounded-full border border-current bg-background flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="font-mono text-[10px] uppercase">Classify</span>
              </div>
              
              <div className={cn("flex flex-col items-center gap-2 bg-card px-2 transition-colors", logs.length >= 4 ? "text-primary" : "text-muted-foreground")}>
                <div className="w-10 h-10 rounded-full border border-current bg-background flex items-center justify-center">
                  <GitCommit className="w-4 h-4" />
                </div>
                <span className="font-mono text-[10px] uppercase">Enrich</span>
              </div>
              
              <div className={cn("flex flex-col items-center gap-2 bg-card px-2 transition-colors", logs.length >= 5 ? "text-primary" : "text-muted-foreground")}>
                <div className="w-10 h-10 rounded-full border border-current bg-background flex items-center justify-center">
                  <Network className="w-4 h-4" />
                </div>
                <span className="font-mono text-[10px] uppercase">Graph</span>
              </div>
            </div>

            {/* Terminal Output */}
            <div 
              ref={containerRef}
              className="bg-black/50 border border-border/30 rounded-sm h-[200px] p-4 font-mono text-xs overflow-y-auto"
            >
              {logs.length === 0 ? (
                <span className="text-muted-foreground">Waiting for input...</span>
              ) : (
                <div className="space-y-2">
                  {logs.map((log, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={
                        log.includes("SYSTEM") ? "text-blue-400" :
                        log.includes("OLLAMA") ? "text-green-400" :
                        log.includes("LLM") ? "text-yellow-400" :
                        log.includes("NEO4J") ? "text-purple-400" :
                        "text-foreground"
                      }
                    >
                      <span className="text-muted-foreground mr-2">[{new Date().toISOString().split('T')[1].slice(0,8)}]</span>
                      {log}
                    </motion.div>
                  ))}
                  {isProcessing && (
                    <div className="flex items-center mt-2">
                      <div className="w-2 h-4 bg-primary animate-pulse"></div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Utility
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}
