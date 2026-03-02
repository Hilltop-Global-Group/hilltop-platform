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
        sans: ["var(--font-open-sans)", "sans-serif"],
        serif: ["var(--font-merriweather)", "serif"],
        heading: ["var(--font-merriweather)", "serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;



