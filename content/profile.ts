// ============================================================
//  EDIT THIS FILE TO UPDATE YOUR PERSONAL INFO
// ============================================================

export const profile = {
  // --- Basic Info ---
  name: "Nishant Nayar",
  title: "Data Science · Program Delivery · Finance",
  tagline: "Turning complex data into decisions that matter.",

  // --- Bio (shown on the About page) ---
  // Use \n\n to create paragraph breaks
  bio: `Nishant works at the intersection of data, technology, and business — a place where most professionals pick one lane. He didn't.

Over the past decade, he's built his career across the financial services industry — investment banking, commercial banking, and asset management — translating complex data problems into decisions that actually get made. As a Lead Solutions Analyst and Technical Program Manager, his job is to bridge the gap between what the data says and what the business needs to hear.

That career has taken him across four continents — from Bangalore and Tokyo to London, New York, Boston, and now Chicago — working across the global footprint of financial services institutions.

He holds a Master's in Analytics from the University of Chicago and an MBA in Finance from Punjabi University. The combination isn't accidental — it reflects how he thinks: rigorously on the data side, clearly on the business side.

He's particularly drawn to Explainable AI and Generative AI — not as buzzwords, but as tools that, used well, make data science something organizations can actually trust and act on.

Outside of work, he mentors early-career professionals navigating the same crossroads he once stood at: enough technical depth to be credible, enough business sense to be useful.`,

  // --- Stats (3–4 highlights shown below the hero) ---
  // Edit values and labels freely; set to [] to hide the strip
  stats: [
    { value: "10+", label: "Years across investment banking, asset management, and commercial banking" },
    { value: "6", label: "Cities — Bangalore · Tokyo · London · New York · Boston · Chicago" },
    { value: "3.95", label: "GPA · MS Analytics, University of Chicago" },
    { value: "VP", label: "Lead Solutions Analyst · JPMorgan Chase" },
  ],

  // --- Currently (shown in sidebar — what you're focused on right now) ---
  // Set to null to hide
  currently: "Building a TFT forecasting model with XAI interpretability stack · Speaking at DataFest Northwestern · Writing on LinkedIn about the gap between data and decisions" as string | null,

  // --- Profile photo ---
  // Place your photo in /public/images/ and update the path below.
  // Example: "/images/photo.jpg"
  // To use no photo, set to null.
  avatarUrl: "/images/photo.jpg",

  // --- Location ---
  location: "Chicago, IL",

  // --- Education ---
  // logoUrl: place a square logo image in /public/images/ and set the path (e.g. "/images/uchicago.png")
  // color: used as the badge background when no logo is provided
  education: [
    {
      degree: "Master of Science in Analytics",
      institution: "University of Chicago",
      location: "Chicago, IL",
      logoUrl: "/images/uchicago.png",
      color: "#800000",          // UChicago Maroon
      abbreviation: "UChicago",
    },
    {
      degree: "MBA — Finance",
      institution: "Punjabi University",
      location: "Patiala, India",
      logoUrl: "/images/PU.jpg",
      color: "#1e3a8a",
      abbreviation: "PU",
    },
  ],

  // --- Skills (shown as tags on About page) ---
  skills: [
    "Python",
    "SQL",
    "PostgreSQL",
    "Data Governance",
    "Data Science",
    "Machine Learning",
    "Explainable AI",
    "Generative AI",
    "Program Management",
    "Business Intelligence",
    "Financial Services",
    "Data Analytics",
  ],

  // --- Social / Contact Links ---
  // Set a link to null to hide it.
  social: {
    email: "nishant.nayar@hotmail.com",
    github: "https://github.com/nishantnayar",
    linkedin: "https://www.linkedin.com/in/nishantnayar/",
    medium: "https://medium.com/@nishant-nayar",
    twitter: null,
    // Add more as needed: dribbble, youtube, etc.
  },

  // --- Resume / CV ---
  // Place your resume PDF in /public/ and update the path, or set to null to hide.
  resumeUrl: null as string | null,

  // --- SEO ---
  // Your live site URL — update this once you have your Vercel or custom domain.
  // This is required for Open Graph links to work correctly on LinkedIn / Twitter.
  siteUrl: "https://nishantnayar.dev",

  // Open Graph / social share image.
  // Place a 1200×630px image at /public/og-image.png and set the path below.
  // If null, social shares will show a text-only card.
  ogImage: null as string | null,
};
