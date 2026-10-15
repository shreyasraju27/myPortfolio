export type Project = {
  title: string;
  year: string;
  summary: string;
  outcomes: string[];
  stack: string[];
  href?: string; // TODO: add repo / demo links
};

export const projects: Project[] = [
  {
    title: "Autonomous Chargeback Defense Engine",
    year: "2026",
    summary:
      "A multi-agent system that gathers the evidence for a merchant's chargeback dispute, with a dashboard where a person approves every response.",
    outcomes: [
      "Evidence gathering dropped from about 45 minutes to under a minute per case.",
      "An SQL security layer built on sqlglot validates and rewrites every AI-generated query. It blocked all 12 cases in an adversarial test suite.",
      "A checkpointed LangGraph approval gate survives server restarts, so nothing reaches submission without human sign-off.",
    ],
    stack: ["LangGraph", "sqlglot", "Human-in-the-loop"],
  },
  {
    title: "RAG Pipeline with Hybrid Search",
    year: "2026",
    summary:
      "A retrieval system that combines dense vectors with BM25, fuses the results, reranks them, and cites its sources.",
    outcomes: [
      "91% faithfulness and 87% citation accuracy on a 50-question evaluation suite.",
      "Beat dense-only search by 10 points on relevance.",
      "Containerized with Docker behind a FastAPI interface.",
    ],
    stack: ["ChromaDB", "BM25", "Reciprocal Rank Fusion", "Cross-encoder reranking", "FastAPI", "Docker"],
  },
];
