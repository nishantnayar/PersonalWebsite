import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-lora)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-dm-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        accent: {
          DEFAULT: "#2d5a3d",
          hover: "#234831",
        },
        ink: {
          DEFAULT: "#1a1814",
          mid: "#4a4740",
          light: "#8a8680",
        },
        paper: {
          DEFAULT: "#f7f5f0",
          warm: "#ede9e1",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#4a4740",
            a: { color: "#2d5a3d", "&:hover": { color: "#234831" } },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
