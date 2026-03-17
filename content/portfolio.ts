// ============================================================
//  EDIT THIS FILE TO UPDATE YOUR PORTFOLIO PROJECTS
// ============================================================
//
//  Each project has these fields:
//    title       - Project name
//    description - Short 1-2 sentence description
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
  tags: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  imageUrl: string | null;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Credit Risk Model with Explainable Rejections",
    description:
      "Regulators require banks to explain every credit decision. This project builds a default-prediction classifier on the Lending Club dataset, then wraps it with a SHAP explanation layer that produces plain-language rejection reasons — mirroring SR 11-7 model risk management requirements. Every rejection comes with ranked drivers: 'Primary: debt-to-income ratio (42%). Secondary: recent late payment.'",
    tags: ["Python", "Classification", "SHAP", "LIME", "Credit Risk", "Regulatory / SR 11-7"],
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
    featured: true,
  },
  {
    title: "RAG-Powered Financial Document Q&A",
    description:
      "An analyst who used to spend 4 hours reading a 10-K filing can now get the key passages in 4 minutes. This Retrieval-Augmented Generation system ingests annual reports, earnings releases, and regulatory documents, then answers natural language questions with cited source passages. Ask 'What did management say about liquidity risk in Q3?' and get a sourced answer in seconds — combining Generative AI with deep finance domain knowledge.",
    tags: ["Python", "RAG", "LangChain", "FAISS", "OpenAI", "Streamlit", "Generative AI"],
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
    featured: true,
  },
  {
    title: "Earnings Call Sentiment → Stock Movement Predictor",
    description:
      "A buy-side analyst can now quantify what they were already doing intuitively — reading between the lines of management language. This project pulls earnings call transcripts from SEC EDGAR, applies NLP to extract sentiment, tone, and uncertainty signals from executive remarks, then builds a model predicting 5-day post-earnings price direction. A SHAP explanation layer surfaces which phrases drove the signal: 'headwinds,' 'we're cautious,' 'record quarter.' Finance domain credibility meets explainable AI.",
    tags: ["Python", "NLP", "SHAP / XAI", "SEC EDGAR", "Finance", "Sentiment Analysis"],
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
    featured: true,
  },
  {
    title: "Data Governance Health Dashboard",
    description:
      "Before you trust a model, trust the data. This tool shows you whether you should. An interactive dashboard that profiles financial datasets across four dimensions — completeness, consistency, freshness, and lineage — scores each, flags anomalies, and shows what happens to model performance as data quality degrades. The project no one else in data science portfolios is building, because most data scientists don't care about governance. This one does.",
    tags: ["Python", "Data Governance", "Streamlit", "Data Quality", "Data Profiling"],
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
    featured: true,
  },
  {
    title: "Program Delivery Risk Predictor",
    description:
      "A PMO director can see which programs are heading for trouble six weeks before the status report says so. Using publicly available project management data — GitHub Issues, JIRA-style datasets on Kaggle — this model predicts program delivery risk: likelihood of delay, scope creep indicators, and team velocity signals. The most unique project in this portfolio. It connects TPM domain expertise directly to data science, speaking to an audience most DS portfolios never reach.",
    tags: ["Python", "Predictive ML", "TPM Domain", "Cross-functional", "Kaggle"],
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
    featured: true,
  },
  {
    title: "Market Regime Classifier + Strategy Switcher",
    description:
      "Most models fail in market transitions. This one knows when the rules have changed. An unsupervised classifier using Hidden Markov Models and clustering identifies current market regimes — trending, mean-reverting, high-volatility — from historical price and volume data. A strategy layer then switches behavior by regime and demonstrates the outperformance over static approaches. A natural extension of the TFT pairs trading work, and the foundation for Part 2.",
    tags: ["Python", "Unsupervised ML", "HMM", "Clustering", "Quantitative Finance"],
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
    featured: true,
  },
];
