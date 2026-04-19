// ============================================================
//  EDIT THIS FILE TO UPDATE YOUR PORTFOLIO PROJECTS
// ============================================================
//
//  Each project has these fields:
//    title       - Project name
//    description - Short 1-2 sentence description
//    bullets     - 3 punchy one-line highlights (shown on card)
//    status      - "In Progress" | "Live" | "Complete"
//    tags        - Technologies used (shown as badges)
//    liveUrl     - Link to live site (set to null to hide)
//    githubUrl   - Link to GitHub repo (set to null to hide)
//    imageUrl    - Screenshot or cover image (place in /public/images/)
//                  set to null to show a placeholder
//    featured    - Set to true to show in a larger "featured" style
// ============================================================

export type Project = {
  title: string;
  description: string;
  bullets: string[];
  problem: string;
  solution: string;
  status?: string;
  tags: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  imageUrl: string | null;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Robinhood Portfolio Tracker",
    description:
      "Robinhood's UI is built for execution, not long-horizon analysis. This local-first pipeline syncs your positions, orders, dividends, and price history into PostgreSQL — then surfaces P&L, risk metrics, and a Streamlit dashboard you actually own.",
    bullets: [
      "FIFO / LIFO / average-cost P&L with wash-sale flagging and matched buy lots",
      "Alpha, beta, drawdown, and concentration metrics benchmarked against SPY",
      "Streamlit dashboard with equity curve, OHLC charts, watchlist, alerts, and a Claude-powered trade journal",
    ],
    problem: "Robinhood shows you your balance. It doesn't show you your win rate, drawdown, alpha vs SPY, or which positions are eating your concentration.",
    solution: "A sync-store-analyze-visualize pipeline: pull data from the Robinhood API into Postgres, run FIFO lot matching and risk metrics, surface everything in a Streamlit dashboard with an optional Claude copilot for trade journaling.",
    status: "Live — actively extended",
    tags: ["Python", "PostgreSQL", "Streamlit", "Plotly", "Prefect", "Claude API", "Quantitative Finance"],
    liveUrl: null,
    githubUrl: "https://github.com/nishantnayar/Robinhood",
    imageUrl: null,
    featured: true,
  },
  {
    title: "Credit Risk Model with Explainable Rejections",
    description:
      "Regulators require banks to explain every credit decision. This project builds a default-prediction classifier on the Lending Club dataset, then wraps it with a SHAP explanation layer that produces plain-language rejection reasons — mirroring SR 11-7 model risk management requirements.",
    bullets: [
      "Default-prediction classifier on Lending Club data wrapped with a SHAP explanation layer",
      "Generates ranked, plain-language rejection reasons per applicant",
      "Aligned to SR 11-7 model risk management requirements",
    ],
    problem: "Regulators require banks to explain every credit decision — most black-box models can't.",
    solution: "A SHAP explanation layer generates ranked, plain-language rejection reasons aligned to SR 11-7.",
    status: "Building now — ships April 2026",
    tags: ["Python", "Classification", "SHAP", "LIME", "Credit Risk", "Regulatory / SR 11-7"],
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
    featured: true,
  },
  {
    title: "RAG-Powered Financial Document Q&A",
    description:
      "An analyst who used to spend 4 hours reading a 10-K filing can now get the key passages in 4 minutes. This Retrieval-Augmented Generation system ingests annual reports, earnings releases, and regulatory documents, then answers natural language questions with cited source passages.",
    bullets: [
      "Ingests 10-K filings, earnings releases, and regulatory documents into a vector store",
      "Answers natural language questions with cited source passages",
      "Cuts analyst document review from hours to minutes",
    ],
    problem: "Analysts spend 4+ hours reading a single 10-K filing to extract a handful of key passages.",
    solution: "A RAG system ingests filings and answers natural language questions with cited source passages in minutes.",
    status: "Building now — ships April 2026",
    tags: ["Python", "RAG", "LangChain", "FAISS", "OpenAI", "Streamlit", "Generative AI"],
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
    featured: true,
  },
  {
    title: "Earnings Call Sentiment → Stock Movement Predictor",
    description:
      "A buy-side analyst can now quantify what they were already doing intuitively — reading between the lines of management language. This project pulls earnings call transcripts from SEC EDGAR, applies NLP to extract sentiment signals, then builds a model predicting 5-day post-earnings price direction.",
    bullets: [
      "Extracts sentiment, tone, and uncertainty signals from SEC EDGAR transcripts",
      "Predicts 5-day post-earnings price direction with an XAI layer",
      "SHAP surfaces which phrases — 'headwinds', 'record quarter' — drove the signal",
    ],
    problem: "Buy-side analysts read tone and language intuitively during earnings calls — but can't quantify it.",
    solution: "NLP extracts sentiment signals from EDGAR transcripts; SHAP shows which phrases moved the needle.",
    status: "Live",
    tags: ["Python", "NLP", "SHAP / XAI", "SEC EDGAR", "Finance", "Sentiment Analysis"],
    liveUrl: null,
    githubUrl: "https://github.com/nishantnayar/Earnings-Sentiment",
    imageUrl: null,
    featured: true,
  },
  {
    title: "Data Governance Health Dashboard",
    description:
      "Before you trust a model, trust the data. This tool shows you whether you should. An interactive dashboard that profiles financial datasets across four dimensions — completeness, consistency, freshness, and lineage — scores each, and flags anomalies.",
    bullets: [
      "Profiles datasets across completeness, consistency, freshness, and lineage",
      "Scores each dimension and flags anomalies automatically",
      "Quantifies how data quality degradation impacts downstream model performance",
    ],
    problem: "Most data science pipelines don't measure whether the data feeding them is actually trustworthy.",
    solution: "An interactive dashboard scores datasets across four quality dimensions and flags anomalies before they reach the model.",
    status: "Up next — Q3 2026",
    tags: ["Python", "Data Governance", "Streamlit", "Data Quality", "Data Profiling"],
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
    featured: true,
  },
  {
    title: "Program Delivery Risk Predictor",
    description:
      "A PMO director can see which programs are heading for trouble six weeks before the status report says so. Using publicly available project management data, this model predicts program delivery risk: likelihood of delay, scope creep indicators, and team velocity signals.",
    bullets: [
      "Predicts delay likelihood, scope creep risk, and velocity signals weeks in advance",
      "Built on GitHub Issues and JIRA-style Kaggle datasets",
      "Bridges TPM domain expertise with predictive ML — rare in DS portfolios",
    ],
    problem: "Status reports flag delivery problems weeks after they've already become unfixable.",
    solution: "An ML model trained on project data predicts delay risk and scope creep six weeks before it shows up in a report.",
    status: "Up next — Q3 2026",
    tags: ["Python", "Predictive ML", "TPM Domain", "Cross-functional", "Kaggle"],
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
    featured: true,
  },
  {
    title: "Market Regime Classifier + Strategy Switcher",
    description:
      "Most models fail in market transitions. This one knows when the rules have changed. An unsupervised classifier using Hidden Markov Models and clustering identifies current market regimes — trending, mean-reverting, high-volatility — from historical price and volume data.",
    bullets: [
      "Identifies market regimes (trending, mean-reverting, volatile) using HMM and clustering",
      "Strategy layer switches behavior automatically by detected regime",
      "Demonstrates measurable outperformance over static single-regime approaches",
    ],
    problem: "Most trading strategies fail silently when market conditions shift — they were built for one regime.",
    solution: "An HMM classifier detects the current market regime and switches strategy rules automatically.",
    status: "Up next — Q3 2026",
    tags: ["Python", "Unsupervised ML", "HMM", "Clustering", "Quantitative Finance"],
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
    featured: true,
  },
];
