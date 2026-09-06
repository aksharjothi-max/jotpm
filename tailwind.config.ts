import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-primary": {
          DEFAULT: "var(--bg-primary)",
        },
        "bg-secondary": {
          DEFAULT: "var(--bg-secondary)",
        },
        "text-primary": {
          DEFAULT: "var(--text-primary)",
        },
        "text-secondary": {
          DEFAULT: "var(--text-secondary)",
        },
        border: {
          DEFAULT: "var(--border)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
