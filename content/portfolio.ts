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
    title: "Taskflow — Project Management App",
    description:
      "A full-stack Kanban board with real-time collaboration, drag-and-drop, and team workspaces. Built for remote teams who want less friction.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    liveUrl: "https://taskflow.example.com",
    githubUrl: "https://github.com/alexjohnson/taskflow",
    imageUrl: null,
    featured: true,
  },
  {
    title: "OpenWeather Dashboard",
    description:
      "A beautiful weather dashboard that visualizes 7-day forecasts, historical trends, and severe weather alerts for any city.",
    tags: ["React", "D3.js", "OpenWeather API", "Tailwind CSS"],
    liveUrl: "https://weather.example.com",
    githubUrl: "https://github.com/alexjohnson/weather-dashboard",
    imageUrl: null,
    featured: true,
  },
  {
    title: "CLI Code Formatter",
    description:
      "A zero-config command-line tool for auto-formatting and linting TypeScript/JavaScript projects with sensible defaults.",
    tags: ["Node.js", "TypeScript", "AST", "CLI"],
    liveUrl: null,
    githubUrl: "https://github.com/alexjohnson/fmt",
    imageUrl: null,
  },
  {
    title: "Portfolio Site Generator",
    description:
      "An open-source Next.js starter template for developer portfolios — the very site you're looking at now.",
    tags: ["Next.js", "Tailwind CSS", "Markdown", "Vercel"],
    liveUrl: "https://alexjohnson.dev",
    githubUrl: "https://github.com/alexjohnson/personal-website",
    imageUrl: null,
  },
];
