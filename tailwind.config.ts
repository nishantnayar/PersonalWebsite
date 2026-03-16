import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#6366f1", // indigo-500
          hover: "#4f46e5",   // indigo-600
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#374151",
            a: { color: "#6366f1", "&:hover": { color: "#4f46e5" } },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
