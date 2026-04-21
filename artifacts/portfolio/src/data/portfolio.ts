export const PROFILE = {
  name: "Shantanu Upadhyay",
  role: "Frontend-Focused Full Stack Engineer",
  location: "Pune, India",
  email: "shantanu.upadhyay14@gmail.com",
  phone: "+91-79740 99695",
  linkedin: "#",
  github: "#",
};

export const EXPERIENCE = [
  {
    id: "wipro-2",
    role: "Project Engineer — Frontend & AI Platform",
    company: "Wipro Ltd.",
    location: "Pune, India",
    period: "Jan 2024 – Present",
    highlights: [
      "Architected & shipped 3 production React.js platform UIs (Data Catalog, Sensitive Data Management, Unstructured Data Processing) adopted across cross-functional teams.",
      "High-performance React component system using memoization, state normalization, lazy loading → ~40% fewer re-renders, ~35% faster Time-to-Interactive on dashboards.",
      "Designed 15+ RESTful APIs in Node.js/Express (ingestion, paginated querying, metadata) supporting 1M+ records with consistent sub-200ms responses.",
      "Owned full-stack LLM integration layer connecting React UI to Ollama-based pipelines — real-time AI-assisted data classification & metadata enrichment with sub-second feedback loops.",
      "Integrated Neo4j graph queries into Node.js services for relationship-aware entity exploration & lineage tracking (impossible in the prior SQL stack).",
      "Led sprint delivery across 4+ Agile cycles, zero critical-path delays.",
    ],
    metrics: [
      { label: "Render Reduction", value: "40%" },
      { label: "TTI Improvement", value: "35%" },
      { label: "API Latency", value: "<200ms" },
      { label: "Records Handled", value: "1M+" },
    ],
  },
  {
    id: "wipro-1",
    role: "Project Engineer — Enterprise Frontend (HP client)",
    company: "Wipro Ltd.",
    location: "Pune, India",
    period: "May 2022 – Dec 2023",
    highlights: [
      "Business-critical frontend modules for HP's global e-commerce + customer portal (millions of users across NA, EU, APAC).",
      "Owned 5+ UI modules in React.js + Redux, WCAG 2.1 compliant, zero post-launch regressions across major releases.",
      "Redesigned checkout-flow components via state normalization & render optimization → measurable bounce reduction & checkout completion lift.",
      "Defined clean REST contracts with distributed backend teams → ~30% fewer client-side API round-trips.",
      "Node/Express enhancements (validation, response shaping, error normalization) → ~25% lower failure rates on 3 high-traffic endpoints.",
      "Mentored a junior dev, enforced component library standards, drove reusable patterns adoption.",
    ],
    metrics: [
      { label: "API Round-trips", value: "-30%" },
      { label: "Endpoint Failures", value: "-25%" },
      { label: "Post-launch Regressions", value: "0" },
    ],
  },
];

export const PROJECTS = [
  {
    id: "real-time-stocks",
    title: "Real-Time Stock Tracking Platform",
    tech: ["React.js", "Node.js", "Express", "WebSockets", "REST"],
    description: "Full-stack real-time market-data platform; WebSocket streaming with multi-session updates at <100ms latency, designed to scale horizontally.",
    details: [
      "React views (watchlists, stock detail, charts, filters) tuned for high-frequency rendering via virtualization & throttled updates — zero jank under rapid tick rates.",
      "Node/Express backend managing persistent WS connections, REST endpoints for historical data, structured error handling, load-tested for concurrent session stability."
    ],
    image: "/src/assets/images/project-stocks.png"
  },
  {
    id: "codebricks",
    title: "CodeBricks — Component Platform",
    tech: ["React.js", "Next.js", "Node.js", "REST"],
    description: "Scalable React/Next component registry with list virtualization rendering 10,000+ rows without perf degradation.",
    details: [
      "Node/Express API layer with full CRUD, auth flows, feature-based modular architecture for long-term maintainability.",
      "Env-aware deployment pipelines + structured backend logging → faster cross-env debugging & consistent CI/CD delivery."
    ],
    image: "/src/assets/images/project-codebricks.png"
  },
  {
    id: "enterprise-data",
    title: "Enterprise Data Platform Suite (Wipro)",
    tech: ["React.js", "TypeScript", "Node.js", "Ollama (LLM)", "Neo4j"],
    description: "Three production React platforms for data cataloging, sensitive-data management, and unstructured data processing — used across cross-functional product/eng teams.",
    details: [
      "Real-time AI-assisted classification & metadata enrichment via React ↔ Ollama LLM pipeline (sub-second feedback).",
      "Graph-aware entity exploration & lineage tracking via Neo4j integration on the Node services."
    ],
    image: "/src/assets/images/project-data-platform.png"
  }
];

export const SKILLS = [
  { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux / Redux Toolkit", "Material UI", "HTML5", "CSS3", "TailwindCSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "WebSockets", "JWT / OAuth 2.0"] },
  { category: "AI / Data", items: ["LLM Integration (Ollama)", "Neo4j (Graph DB)", "Unstructured Data Pipelines", "AI Workflow Design"] },
  { category: "Databases", items: ["MongoDB", "PostgreSQL / SQL", "Neo4j"] },
  { category: "DevOps & Tools", items: ["Git", "GitHub", "CI/CD", "Jira", "Postman", "VS Code", "Agile / Scrum"] }
];
