// ============================================================
//  EDIT THIS FILE TO UPDATE YOUR PERSONAL INFO
// ============================================================

export const profile = {
  // --- Basic Info ---
  name: "Nishant Nayar",
  title: "Lead Solutions Analyst",
  tagline: "Turning complex data into decisions that matter.",

  // --- Bio (shown on the About page) ---
  // Use \n\n to create paragraph breaks
  bio: `Nishant is a passionate data management professional with a proven track record of developing and executing strategic initiatives within Investment Bank, Commercial Bank and Asset Management segments of the financial services. He excels at translating complex data challenges into actionable solutions by leveraging data governance best practices and applied data science techniques. Additionally, he is a critical thinker and a problem solver, brings a strong work ethic and a commitment to data-driven decision making.

He is passionate about Explainable & Generative AI, data analytics, mentoring and giving back to the community.

He holds a Masters in Analytics from University of Chicago and an MBA (Finance) from Punjabi University, India.`,

  // --- Stats (3–4 highlights shown below the hero) ---
  // Edit values and labels freely; set to [] to hide the strip
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "3",   label: "Banking Sectors" },
    { value: "M.S.", label: "Analytics · UChicago" },
  ],

  // --- Currently (shown in sidebar — what you're focused on right now) ---
  // Set to null to hide
  currently: "Exploring Explainable & Generative AI in financial services" as string | null,

  // --- Profile photo ---
  // Place your photo in /public/images/ and update the path below.
  // Example: "/images/photo.jpg"
  // To use no photo, set to null.
  avatarUrl: "/images/photo.jpg",

  // --- Location ---
  location: "Chicago, IL",

  // --- Skills (shown as tags on About page) ---
  skills: [
    "Python",
    "SQL",
    "PostgreSQL",
    "Data Governance",
    "Data Science",
    "Machine Learning",
    "Generative AI",
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
