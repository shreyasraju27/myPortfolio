export const me = {
  name: "Shreya S Raju",
  email: "shreya27raju@gmail.com",
  linkedin: "https://www.linkedin.com/in/shreya-s-raju",
  github: "https://github.com/shreyasraju27",
  resume: "/resume.pdf",
};

export type Project = {
  tag: string;
  title: string;
  desc: string;
  stack: string[];
  details: [string, string][];
  href?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    tag: "01 // AI // FINTECH",
    title: "Chargeback Defense Engine",
    desc: "A multi-agent system that collects evidence for chargeback disputes, cutting about 45 minutes of manual work to under a minute per case. Built for the Razorpay AI Buildathon (AI Risk Manager track).",
    stack: ["LangGraph", "sqlglot", "Human-in-the-loop", "Multi-agent"],
    details: [
      ["Orchestration", "LangGraph, checkpointed"],
      ["SQL safety", "AST validation and rewrite"],
      ["Adversarial tests", "12 of 12 blocked"],
      ["Approval gate", "Survives server restarts"],
    ],
    href: "https://github.com/shreyasraju27/autonomous-chargeback-defense-engine",
    demo: "https://youtu.be/61miRh-Xfq4",
  },
  {
    tag: "02 // NLP // LLM",
    title: "FactLens",
    desc: "Splits text into sentences and labels each one as fact, opinion, speculation, mixed or unclassified using Gemini. It classifies the structure of a statement and doesn't judge whether it's true.",
    stack: ["Gemini", "Gradio", "NLTK", "Pydantic", "pytest"],
    details: [
      ["Output", "Schema-enforced JSON"],
      ["Validation", "Defensive validator with fallback"],
      ["Extras", "Neutral rewrite and CSV export"],
      ["Tests", "Offline pytest suite"],
    ],
    href: "https://github.com/shreyasraju27/factlens",
  },
  {
    tag: "03 // GENAI // RAG",
    title: "Chat with Your PDFs",
    desc: "Upload a PDF and ask questions about it. Answers come from the document itself through a retrieval-augmented generation pipeline.",
    stack: ["LangChain", "Gemini", "ChromaDB", "Streamlit"],
    details: [
      ["Approach", "RAG over uploaded PDFs"],
      ["Vector store", "ChromaDB"],
      ["Model", "Gemini"],
      ["Interface", "Streamlit"],
    ],
    href: "https://github.com/shreyasraju27/pdf---chatbot",
  },
  {
    tag: "04 // DATA // TEXT-TO-SQL",
    title: "AI SQL Assistant",
    desc: "Upload a CSV and ask questions in plain English. The app writes the SQL, runs it on your data and explains the result, with the query and result table left visible so you can check the work.",
    stack: ["Gemini", "SQLite", "Pandas", "Streamlit"],
    details: [
      ["Tested on", "82,000-row dataset"],
      ["Isolation", "Private SQLite per session"],
      ["Prompt context", "Column types and sample values"],
      ["Interface", "Streamlit"],
    ],
    href: "https://github.com/shreyasraju27/sql-assistant",
  },
];

export const skills = [
  { title: "Generative AI & LLMs", span: "md:col-span-4", desc: "Retrieval, evaluation and guardrails around language models.", chips: ["Generative AI", "Large Language Models (LLMs)", "Prompt Engineering", "Retrieval-Augmented Generation (RAG)", "Embeddings", "Vector Databases", "Semantic Search", "LangChain", "Hugging Face", "LLM Evaluation", "AI Guardrails", "Faithfulness Evaluation"] },
  { title: "Languages & Core", span: "md:col-span-2", desc: "The foundations everything else is built on.", chips: ["Python", "SQL", "Java", "JavaScript", "TypeScript", "DSA", "OOP", "Git", "GitHub"] },
  { title: "Machine Learning & NLP", span: "md:col-span-3", desc: "Classical and deep learning models, from features to transformers.", chips: ["Machine Learning", "Deep Learning", "Neural Networks", "Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Scikit-learn", "TensorFlow", "PyTorch", "NLP", "Text Classification", "Sentiment Analysis", "Tokenization", "Transformers"] },
  { title: "Evaluation & Deployment", span: "md:col-span-3", desc: "Measuring models properly and getting them in front of users.", chips: ["Model Evaluation", "Precision", "Recall", "F1-score", "Cross-validation", "Streamlit", "Hugging Face Spaces", "Model Deployment"] },
  { title: "Full-Stack Development", span: "md:col-span-4", desc: "Interfaces, APIs and authentication, end to end.", chips: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Node.js", "Express.js", "FastAPI", "Flask", "API Integration", "Authentication"] },
  { title: "Databases", span: "md:col-span-2", desc: "Schema design and querying.", chips: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Database Design", "SQL Queries", "Database Normalization"] },
  { title: "Data Analysis & BI", span: "md:col-span-6", desc: "From messy data to dashboards people can use.", chips: ["Exploratory Data Analysis (EDA)", "Data Cleaning", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Microsoft Excel", "Power BI", "Tableau", "Dashboard Development"] },
];

export const experience: [string, string, string][] = [
  [
    "May 2026 – Jul 2026",
    "Data Analyst Intern, Bayer",
    "Built data pipelines and Power BI dashboards on Microsoft Power Platform, and wrote optimized SQL for business-critical reporting.",
  ],
  [
    "May 2025 – Jul 2025",
    "Software Development Intern, Subspace",
    "Built 10+ responsive UI components and fixed 15+ performance bugs across mobile and desktop.",
  ],
];

export const education: [string, string, string][] = [
  [
    "Aug 2023 – Present",
    "B.Tech, Computer Science & Engineering (Data Science)",
    "Manipal University Jaipur.",
  ],
  [
    "Jun 2020 – Mar 2022",
    "Higher Secondary Certificate (Class XI & XII)",
    "Mahesh Pre-University College  91.6% & 75%.",
  ],
  [
    "Jun 2007 – Mar 2020",
    "Secondary School Certificate (Class X)",
    "Sophia High School  84%.",
  ],
];

export const achievements: [string, string, string][] = [
  [
    "Apr 2026",
    "Patent Published: Gait-Based Attendance Monitoring System",
    "App. No. 202611017267. A privacy-preserving, contactless attendance system using gait recognition on edge devices. It stores no raw video or biometric data, only encrypted gait embeddings, and feeds an institutional dashboard for real-time attendance reporting.",
  ],
  [
    "Mar 2026",
    "Student Excellence Award",
    "Manipal University Jaipur.",
  ],
  [
    "Jan 2026",
    "Patent Published: AI-Driven Deep-Sea eDNA Classifier",
    "App. No. 202511119168. A CNN-based hierarchical taxonomy classifier from kingdom to species for deep-sea biodiversity, with automated DNA pre-processing, novel species detection using confidence scoring, and a cloud platform for genomic data visualization.",
  ],
  [
    "Dec 2025",
    "Patent Published: HealthBridge, Digital Health Management Platform",
    "App. No. 20251111897A. A cloud-based system connecting patients, hospitals, insurance and emergency services over HTTPS, MQTT and WebSocket, with real-time emergency coordination, hospital resource monitoring and an AI-assisted analytics layer.",
  ],
];