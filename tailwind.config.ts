import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: "#1D3160",
          DEFAULT: "#1D3160",
        },
        accent: {
          gold: "#F4A261",
          DEFAULT: "#F4A261",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "sans-serif"],
        serif:   ["var(--font-barlow-condensed)", "sans-serif"],
        heading: ["var(--font-barlow-condensed)", "sans-serif"],
        display: ["var(--font-barlow-condensed)", "sans-serif"],
        body:    ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
