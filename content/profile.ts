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
    { value: "10+", label: "Years in finance" },
    { value: "6", label: "Cities" },
    { value: "MS", label: "Analytics · UChicago" },
    { value: "VP", label: "JPMorgan Chase" },
  ],

  // --- Currently (shown in sidebar — what you're focused on right now) ---
  // Set to null to hide
  currently: "Published Titanic XAI — stress-testing counterfactual explanation methods against GDPR, CFPB, and EU AI Act · Writing on LinkedIn about the gap between data and decisions" as string | null,

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

  // --- Featured LinkedIn posts (Writing section on the homepage) ---
  // Order here is the order shown on the page. Set to [] to hide the cards.
  //   label - small uppercase line above the headline (e.g. "Latest · August 2026")
  //   title - the post's hook, shown in serif
  //   blurb - one or two sentences of supporting context
  //   url   - permalink to the post on LinkedIn
  linkedInPosts: [
    {
      label: "Latest · August 2026",
      title: "Your SHAP plot is correct and unreadable.",
      blurb:
        "The chart was right. Someone in the room still asked whether blue was good or bad, and nothing in the plot answered it. So I built the package that does.",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7492919549005307905/",
    },
    {
      label: "Most read · March 2026",
      title: "Most people in data science came from computer science. I came from finance.",
      blurb:
        "That difference changed everything about how I approach a problem — and why I ended up doing work most data scientists never touch.",
      url: "https://www.linkedin.com/posts/activity-7442903183473065985-561u",
    },
    {
      label: "April 2026",
      title: "What is the actual question you are trying to answer?",
      blurb:
        "Most data projects fail before the first line of code. Not because of the model. Because nobody stopped to agree on the question.",
      url: "https://www.linkedin.com/posts/activity-7444715132573880321-Up-M",
    },
  ],

  // --- Work Experience (for future Experience section) ---
  experience: [
    {
      title: "Lead Solutions Analyst / Lead Technical Program Manager",
      company: "JPMorgan Chase",
      period: "2022 – Present",
      location: "Chicago, IL",
    },
    {
      title: "Senior Data Analyst",
      company: "Northern Trust",
      period: "2020 – 2022",
      location: "Chicago, IL",
    },
    {
      title: "Data Analyst",
      company: "Mizuho Financial Group",
      period: "2018 – 2020",
      location: "New York, NY",
    },
    {
      title: "Investment Banking Analyst",
      company: "Standard Chartered Bank",
      period: "2015 – 2018",
      location: "London / Tokyo / Bangalore",
    },
  ],

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
