// ============================================================
//  EDIT THIS FILE TO UPDATE YOUR PERSONAL INFO
// ============================================================

export const profile = {
  // --- Basic Info ---
  name: "Nishant Nayar",
  title: "Lead Solutions Analyst",
  tagline: "I build thoughtful digital products that people love to use.",

  // --- Bio (shown on the About page) ---
  // Use \n\n to create paragraph breaks
  bio: `I'm a full-stack developer with 5 years of experience building web applications
for startups and growing companies. I care deeply about clean code, great user
experience, and shipping products that make a real difference.

When I'm not coding, you'll find me hiking mountain trails, experimenting with
film photography, or obsessing over a good cup of coffee.`,

  // --- Profile photo ---
  // Place your photo in /public/images/ and update the path below.
  // Example: "/images/photo.jpg"
  // To use no photo, set to null.
  avatarUrl: null as string | null,

  // --- Location ---
  location: "Chicago, IL",

  // --- Skills (shown as tags on About page) ---
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Figma",
    "AWS",
  ],

  // --- Social / Contact Links ---
  // Set a link to null to hide it.
  social: {
    email: "nishant.nayar@hotmail.com",
    github: "https://github.com/nishantnayar",
    linkedin: "https://www.linkedin.com/in/nishantnayar/",
    twitter: null,
    // Add more as needed: dribbble, youtube, etc.
  },

  // --- Resume / CV ---
  // Place your resume PDF in /public/ and update the path, or set to null to hide.
  resumeUrl: "/resume.pdf" as string | null,

  // --- SEO ---
  // Your live site URL — update this once you have your Vercel or custom domain.
  // This is required for Open Graph links to work correctly on LinkedIn / Twitter.
  siteUrl: "https://nishantnayar.dev",

  // Open Graph / social share image.
  // Place a 1200×630px image at /public/og-image.png and set the path below.
  // If null, social shares will show a text-only card.
  ogImage: "/og-image.png" as string | null,
};
